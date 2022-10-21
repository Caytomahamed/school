const courses = require("../models/courseModel")

exports.getAllCourses = async (req, res) => {
  try {
    const users = await courses.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "some thing wrong" });
  }
};

exports.getCourse = async (req, res) => {
  let { id }  = req.params;
  try {
    const [course] = await courses.findById(+id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "some thing wrong" });
  }
}; 

exports.insertCourse = async (req, res) => {
  let newCourse = req.body;
  console.log(newCourse); 
  try {
    const [course] = await courses.insert(newCourse);
    console.log(course);
    res.status(201).json(course);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "some thing wrong" });  
  }
};

exports.updateCourse = async (req, res) => {
  let {params: { id },body} = req;
  try {
    const [course] = await courses.update(+id, body);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "some thing wrong" });
  }
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course_id = await courses.remove(+id);
    console.log(course_id);
    res.status(200).json({ message: `successfull delted ${course_id}` });
  } catch (error) {
    res.status(500).json({ message: `some thing wrong ${error}` });
  }
};
