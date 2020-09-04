

const Class= require('../models/class');



module.exports.classes= async function(req,res){
    const value= await Class.find({});

    // console.log(value)
    return res.render('classes',{
        classes:value
    })
}



module.exports.details= async function(req,res){
    const details= await Class.findById(req.params.id);
    return res.render('details',{
        details:details
    })
}