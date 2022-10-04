const express = require("express");
const model = require("./users-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await model.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `${errro}` });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  //   console.log(filter);
  try {
    const user = await model.findById(id);
    console.log(user);
    if (!user || user.length === 0) {
      res.status(404).json({ message: `not found this user ${id}` });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

router.post("/", async (req, res) => {
  let { body } = req;
  try {
    const user = await model.insert(body);
    console.log(user);
    if (!user) {
      res.status(404).json({ message: "you missing same thing" });
    }

    res.status(201).json(user);
  } catch (error) {}
});
module.exports = router;
