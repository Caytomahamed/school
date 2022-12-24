const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdandDelete(+req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      message: `success`,
      data: null,
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const [doc] = await Model.findByIdandUpdate(+req.params.id, req.body);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const [doc] = await Model.create(req.body);
    console.log(doc);

    if (!doc) {
      return next(
        new AppError(
          "You can't create a this document same thing wrong.please add all requirement ",
          404
        )
      );
    }

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    // Saving a rating into database
    await Model.ratingToDb();

    const [doc] = await Model.findById(+req.params.id);

    if (!doc) {
      return next(new AppError('No document found width this ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // 1) Saving a rating into database
    await Model.ratingToDb();

    // 2) Normal get
    let query = +req.params.id ? Model.find(+req.params.id) : Model.find();

    // 3A) filtering
    let queryObJ = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'field'];
    excludedFields.forEach(el => delete queryObJ[el]);
    // 3B)Addvanced filtering
    if (queryObJ.duration?.hasOwnProperty('&lt;')) {
      query = Model.find()
        .where(`duration`, '<', ``)
        .andWhere('level', `${queryObJ.level}`);
    }
    if (queryObJ.duration?.hasOwnProperty('>')) {
      query = Model.find()
        .where(`duration`, '>', `${queryObJ.duration['>']}`)
        .andWhere('level', `${queryObJ.level}`);
    }

    // 4) Sort
    if (req.query.sort) {
      const sortBy = {
        price: req.query.sort.slice(0, 6),
        ratingsAverage: req.query.sort.slice(7, req.query.sort.length),
      };

      sortBy.price.slice(0, 1) === '-'
        ? (query = Model.find().orderBy([
            { column: sortBy.price.slice(1, 6), order: 'desc', nulls: 'frist' },
            { column: sortBy.ratingsAverage, order: 'desc' },
          ]))
        : (query = Model.find().orderBy(
            sortBy.price.slice(0, sortBy.price.length - 1),
            sortBy.ratingsAverage
          ));
    } else {
      query = Model.find().orderBy('c.createAt');
    }

    // limit Field
    if (req.query.field) {
      const excludeField = [
        'email',
        'password',
        'passwordResetToken',
        'passwordResetExpires',
        'active',
        'roleId',
        'roleId',
        'stars',
        'comment',
        'courseId',
      ];
      let fields = req.query.field.split(/\s*,\s*/);
      fields = fields.filter(el => !excludeField.includes(el));
      fields.unshift('c.id');
      query = Model.fieldLimit().select(fields);
    }

    // 6) Pagination
    // { page: '2', 'limit ': '10' } page1: 1-10,  page2:11-20,  page3:21-30
    const page = req.query.page * 1 || 1; // default page 1
    const limit = req.query.limit * 1 || 100; // default 50 document
    const skip = (page - 1) * limit;

    if (req.query.page) {
      const [numCourses] = await Model.countCourses();
      if (skip >= numCourses.count) {
        return next(new AppError("This page doesn't Exist!", 404));
      }
      query = Model.find().offset(skip).limit(limit);
    }

    console.log(req.query);
    console.log(page, limit, skip);

    // 6) await document
    const doc = await query;

    if (!doc.length) {
      return next(new AppError('No document found', 404));
    }

    // 7) Sent back
    res.status(200).json({
      status: 'success',
      result: doc.length,
      data: {
        data: doc,
      },
    });
  });
