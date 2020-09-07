
const mongoose= require('mongoose');

const InstructorSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    address:[{
        street_address:{type:String},
        city:{type:String},
        state:{type:String},
        zip:{type:String}
    }],
    email:{
        type:String, 
    },
    password:{
        type: String,
        // required: true
    },
    classes:[{
        class_id:{type:[mongoose.Types.ObjectId]},
        class_title:{type:String}
    }]
},  {
        timestamps: true
});



const Instructor=mongoose.model('Instructor',InstructorSchema); 

module.exports= Instructor;

module.exports.register= function(info, callback ){
    instructor_email= info['instructor_email'];
    class_id=info['class_id'];
    class_title=info['class_title'];
    

    var query= {email:instructor_email}
    Instructor.findOneAndUpdate(
        query,
        {$push:{"classes":{class_id:class_id, class_title: class_title}}},
        {safe: true, upsert: true},
        callback
    )
}