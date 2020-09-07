const express= require('express');
const path= require('path');
const router= express.Router();
const Class= require('../models/class')

const class_controller= require('../controllers/class_controller')

router.get('/view', class_controller.classes)
router.get('/details/:id', class_controller.details);
router.get('/:id/lessons', class_controller.lessons)


module.exports=router;