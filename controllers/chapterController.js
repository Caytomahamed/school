const chapters = require("../models/chapterModel");
const catchAsyn = require('../utils/catchAsync');
const AppError = require("../utils/appError");

exports.getAll = catchAsyn(async (req,res,next) => {
    const {courseId} = req.params
    let allChapters;
    if(courseId) {
        allChapters = await chapters.find(+courseId);
    }else { 
        allChapters = await chapters.find()
    }
    
    res.status(200).json({
        status:"success",
        result:allChapters.length,
        data:{
            allChapters
        }
    })
})

exports.getById = catchAsyn(async (req,res,next) => {
    const {id} = req.params;
    const [chapter] = await chapters.find(+id);
    if(!chapter){
        return next(new AppError('No chapter found width this ID', 404))
    }
    res.status(200).json({
        status:"success",
        data:{
             chapter,
        }
    })
    
});

exports.insertChapter = catchAsyn(async(req,res,next) => {
    let {newChapter} = req.body;
    
}) 

exports.getByCourseId = catchAsyn( async(req,res,next) => {
    const {id} = req.params;
    const chaptersByCourse =await chapters.getByCourseId(+id)
    
    if(!chaptersByCourse) {
        return next(new AppError('No chapter found width this course ID', 404));
    }
    
    res.status(200).json({
        status: "success",
        result: chaptersByCourse.length,
        chapters: chaptersByCourse
    })
})