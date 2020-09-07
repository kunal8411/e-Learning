const express= require('express');
const path= require('path');
const router= express.Router()


const instructor_controller= require('../controllers/instructor_controller');
const { info } = require('console');
const Instructor = require('../models/instructor');
const Class= require('../models/class');



router.get('/classes',instructor_controller.classes);

router.post('/classes/register', function(req,res){
    var info= [];
    info['instructor_email']=req.user.email;
    info['class_id']= req.body.class_id;
    info['class_title']= req.body.class_title

    Instructor.register(info, function(err,instructor){
        if(err){console.log(err)}
        // console.log(instructor)
    });

    console.log('Now you registered to teach this class')
    res.redirect('/instructors/classes');

})


router.get('/classes/:id/lessons/new' , function(req,res,next ){
    res.render('inewlesson',{
        class_id:req.params.id
    })
})

router.post('/classes/:id/lessons/new' , function(req,res, next ){
    var info= [];
    info['class_id']= req.params.id;
    info['lesson_number']= req.body.lesson_number;
    info['lesson_title']= req.body.lesson_title;
    info['lesson_body']= req.body.lesson_body;

    Class.addLesson(info, function(err, lesson){
        console.log('Lesson Added')
    });


    res.redirect('/instructors/classes');
})
module.exports=router;