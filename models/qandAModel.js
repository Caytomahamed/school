const reader = require('../reader/handleReader');
const QandAreader = require('../reader/QandAReader');

exports.find = (id) => {
  return QandAreader.read(id);
};

exports.findById = id => {
  return QandAreader.readById(id);
};

exports.create = newQ => {
  return reader.createOne({
    table: 'QandA',
    newOne: newQ,
    getById: this.findById,
  });
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table: 'QandA',
    condition: 'QandA_id',
    getById: this.findById,
    changes,
    id,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table:"QandA",
    condition:"QandA_id",
    id,
  });
};
