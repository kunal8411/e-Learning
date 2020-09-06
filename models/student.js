
const mongoose= require('mongoose');

const StudentSchema = new mongoose.Schema({
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



const Student=mongoose.model('Student',StudentSchema); 

module.exports= Student;