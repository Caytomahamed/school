const reader = require('../reader/handleReader');
const replyReader = require('../reader/replyReader');

exports.find = (id) => {
  return replyReader.read(id);
};

exports.findById = id => {
  return replyReader.readById(id);
};

exports.create = newOne => {
  return reader.createOne({
    table: 'reply',
    newOne,
    getById: this.findById,
  });
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table: 'reply',
    condition: 'reply_id',
    getById: this.findById,
    changes,
    id,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'reply',
    condition: 'reply_id',
    id,
  });
};
