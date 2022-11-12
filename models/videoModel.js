const reader = require("../reader/handleReader");
const videoReader = require("../reader/videoReader");


exports.find = id => {
  return videoReader.read(id)
};

exports.findById = id => videoReader.readById(id)

exports.create = video => {
  return reader.createOne({
    table:"videos",
    newOne:video,
    getById:this.findById
  })
};

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table:"videos as v",
    condition:"v.video_id",
    getById: this.findById,
    changes,
    id
  })
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'videos as v',
    condition: 'v.video_id',
    id,
  });
};
