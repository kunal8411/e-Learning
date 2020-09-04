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