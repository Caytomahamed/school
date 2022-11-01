const express = require("express");
const courseController= require("../controllers/courseController");
const chapterRoutes = require("../routes/chapterRoutes");

const router = express.Router();


// GET: :id/courseId/Chapters
router.use("/:courseId/chapters", chapterRoutes);

router
    .route("/")
    .get(courseController.getAllCourses)
    .post(courseController.insertCourse);
    
router
    .route("/:id")
    .get(courseController.getCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse);
    
module.exports = router;