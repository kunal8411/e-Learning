


const Class= require('../models/class');
const Student= require('../models/student');
const User= require('../models/user');



module.exports.classes=async function(req,res){
    let student= await Student.findOne({
        email:req.user.email});
    // console.log(student)
    if(student){
        return res.render('sclasses',{
            student:student
        })
    }


}