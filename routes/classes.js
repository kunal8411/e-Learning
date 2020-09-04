const express= require('express');
const path= require('path');
const router= express.Router();


const class_controller= require('../controllers/class_controller')

router.get('/view', class_controller.classes)
router.get('/details/:id', class_controller.details);



module.exports=router;