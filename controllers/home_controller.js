



const Class= require('../models/class')



module.exports.home= async function(req,res){
    const value= await Class.find({});

    // console.log(value)
    return res.render('homepage',{
        classes:value
    })
}