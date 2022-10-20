const users = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await users.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
};

exports.getUserById = async (req, res) => {
  let { id } = req.params;
  try {
    const [user] = await users.findById(id);
    if (!user || user.length === 0) {
      res.status(404).json({ message: `not found this user ${id}` });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
};

exports.insertUser = async (req, res) => {
  let { body } = req;
  try {
    const [user] = await users.insert(body);
    if (!user) {
      res.status(404).json({ message: "you missing same thing" });
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: `insternal server error` });
  }
};

exports.updateUser = async (req, res) => {
  const {params: { id },body} = req;

  try {
    const [user] = await users.update(id, body);

    if (!user) {
      res.status(404).json({ message: "could not update that user" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `insternal server error` });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const [user] = await users.remove(id);
    res.status(200).json({ message: `user deleted ${user}` });
  } catch (error) {
    res.status(500).json({ message: `insternal server error` });
  }
};
