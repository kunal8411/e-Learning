const express= require('express');
const path= require('path');
const router= express.Router();


const home_controller= require('../controllers/home_controller');
router.use('/users', require('./users'));
router.use('/classes', require('./classes'));
router.use('/students',require('./students'));
router.use('/instructors',require('./instructors'))
router.get('/', home_controller.home)
// router.use('/classes', require('./classes'))




module.exports=router;