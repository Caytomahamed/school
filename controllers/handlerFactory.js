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
    const doc = +req.params.id
      ? await Model.find(+req.params.id)
      : await Model.find();

    if (!doc.length) {
      return next(new AppError('No document found width this ID', 404));
    }

    res.status(200).json({
      status: 'success',
      result: doc.length,
      data: {
        data: doc,
      },
    });
  });
