const express = require("express");
const model = require("./users-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await model.find()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  //   console.log(filter);
  try {
    const [user] = await model.findById(id);
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
    const [user] = await model.insert(body);
    if (!user) {
      res.status(404).json({ message: "you missing same thing" });
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: `insternal server error` });
  }
});

router.put("/:id", async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const [user] = await model.update(id, body);

    if (!user) {
      res.status(404).json({ message: "could not update that user" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `insternal server error` });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [user] = await model.remove(id);
    res.status(200).json({ message: `user deleted ${user}` });
  } catch (error) {
    res.status(500).json({ message: `insternal server error` });
  }
});

module.exports = router;
