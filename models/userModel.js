const bcrypt = require("bcrypt");
const reader = require('../reader/handleReader');
const userReader = require('../reader/userReader');

exports.find = async () => userReader.read();

exports.findById = id => userReader.readById(id);

exports.findOne = filter => userReader.readBy(filter);

exports.create = user => userReader.readerCreate(user);

exports.findByIdandUpdate = (id, changes) => {
  return reader.updateOne({
    table: 'users',
    condition: 'userId',
    getById: this.findById,
    changes,
    id,
  });
};

exports.findByIdandDelete = id => {
  return reader.deleteOne({
    table: 'users',
    condition: 'userId',
    id, 
  });
};

// correct password
exports.correctPassword = async (password,userPassword) => {
  return await bcrypt.compare(password,userPassword)
}
