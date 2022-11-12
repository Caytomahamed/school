const reader = require('../reader/handleReader');
const chapterReater = require('../reader/chapterReader');

exports.find = id => {
  return chapterReater.read(id);
};

exports.findById = id => chapterReater.readById(id);

exports.create = chapter => {
  return reader.createOne({
    table: 'chapters',
    newOne: chapter,
    getById: this.findById,
  });
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table: 'chapters as ch',
    condition: 'ch.chapter_id',
    getById: this.findById,
    id,
    changes,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'chapters as ch',
    condition: 'ch.chapter_id',
    id,
  });
};
