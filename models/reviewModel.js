const reader = require('../reader/handleReader');
const reviewReader = require('../reader/reviewReader');

exports.find = id => {
  return reviewReader.read(id);
};

exports.findById = id => reviewReader.readById(id);

exports.create = review => {
  return reader.createOne({
    table: 'reviews',
    newOne: review,
    getById: this.findById,
  });
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    tbale: 'reviews as r',
    condition: 'r.review_id',
    getById: this.findById,
    changes,
    id,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'reviews as r',
    condition: 'r.review_id',
    id,
  });
};
