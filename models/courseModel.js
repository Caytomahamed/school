const reader = require('../reader/handleReader');
const courseReader = require('../reader/courseReader');

exports.find = id => {
  return courseReader.read(id);
};

exports.findById = id => courseReader.readById(id);

exports.create = course => {
  return reader.createOne({
    table: 'courses',
    newOne: course,
    getById: this.findById,
  });
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table: 'courses as c',
    condition: 'c.id',
    getById: this.findById,
    changes,
    id,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'courses',
    condition: 'id',
    id,
  });
};
