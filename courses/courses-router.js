const express = require("express");
const model = require("./courses-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await model.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "some thing wrong" });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const [user] = await model.findById(+id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "some thing wrong" });
  }
});

router.patch("/", async (req, res) => {
  let newCourse = req.body;
  try {
    const [course] = await model.insert(newCourse);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: "some thing wrong" });
  }
});

router.put("/:id", async(req,res) => {
    let {params:{id}, body} = req; 
    try {
        const [course] = await model.update(+id,body); 
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ message: "some thing wrong" });
    } 
})

router.delete("/:id", async(req,res) => { 
  const {id} = req.params;
  try {
    const course_id = await model.remove(+id); 
    console.log(course_id);
    res.status(200).json({message:`successfull delted ${course_id}`})
  } catch (error) {
    res.status(500).json({ message: `some thing wrong ${error}`});
  }
})
module.exports = router;
