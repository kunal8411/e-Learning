const mongoose= require('mongoose');


const classSchema = new mongoose.Schema({
    title:{
        type:String
        
    },
    description:{
        type: String
    },
    instructor:{
        type: String
    },
    lessons:[{
        lesson_number:{type:String},
        lesson_title:{type:String},
        lesson_body:{type:String}
    }]

    
},  {
        timestamps: true
});


const Classes=mongoose.model('Classes',classSchema); 

module.exports= Classes;


module.exports.addLesson= function(info, callback){
    class_id= info['class_id'];
    lesson_title= info['lesson_title'];
    lesson_number= info['lesson_number'];
    lesson_body= info['lesson_body'];
    
    Classes.findByIdAndUpdate(
        class_id, 
        {$push:{"lessons":{lesson_number:lesson_number,lesson_title:lesson_title,lesson_body:lesson_body}}},
        {safe: true, upsert: true }, 
        callback
    )
}