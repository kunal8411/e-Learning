
const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    type:{
        type:String
    }
},  {
        timestamps: true
});



const Users=mongoose.model('Users',userSchema); 

module.exports= Users;