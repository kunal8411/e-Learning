


const Class= require('../models/class');
const Student= require('../models/student');
const User= require('../models/user');
const Instructor = require('../models/instructor');



module.exports.classes=async function(req,res){
    let instructor= await Instructor.findOne({
        email:req.user.email});
    console.log(instructor)
    if(instructor){
        return res.render('iclasses',{
            instructor:instructor
        })
    }


}