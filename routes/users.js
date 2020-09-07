const express= require('express');
const path= require('path');
const router= express.Router();

const users_controller= require('../controllers/users_controller');
const passport = require('passport');

router.get('/signup',users_controller.signup)
router.post('/create',users_controller.create)
router.get('/login',users_controller.login)

router.post('/createsession',passport.authenticate(
    'local',
    {
        failureRedirect: '/users/signup'
    },
),users_controller.createsession)


//signout
router.get('/signout',users_controller.destroySession);
router.get('/profile',users_controller.profile)


module.exports=router;