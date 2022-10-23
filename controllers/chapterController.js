const chapters = require("../models/chapterModel");
const catchAsyn = require('../utils/catchAsync');
const AppError = require("../utils/appError")

exports.getAll = catchAsyn(async (req,res,next) => {
    const allChapters = await chapters.findAll();
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
    const [chapter] = await chapters.findById(+id);
    if(!chapter){
        return next(new AppError('No chapter found width this ID', 404))
    }
    res.status(200).json({
        status:"success",
        data:{
             chapter,
        }
    })
    
})