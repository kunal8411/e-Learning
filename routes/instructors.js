const express= require('express');
const path= require('path');
const router= express.Router()


const instructor_controller= require('../controllers/instructor_controller');



router.get('/classes',instructor_controller.classes);



module.exports=router;