const express= require('express');
const path= require('path');
const router= express.Router()

const student_controller= require('../controllers/student_controller');


router.get('/classes',student_controller.classes);
router.post('/classes/register',)



module.exports=router;