const reader = require('../reader/handleReader');
const replyReader = require('../reader/replyReader');

exports.find = () => {
  return replyReader.read();
};

exports.findById = id => {
  return replyReader.readById(id);
};

exports.create = newOne => {
  return reader.createOne({
    table: 'replys',
    newOne,
    getById: this.findById,
  });
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table: 'replys',
    condition: 'reply_id',
    getById: this.findById,
    changes,
    id,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'replys',
    condition: 'reply_id',
    id,
  });
};
