




const User= require('../models/user');
const Student= require('../models/student');
const Instructor= require('../models/instructor');


//get sign up page
module.exports.signup= function(req,res){
    
    return res.render('signup');
}

//post method for signup page
module.exports.create= function(req,res){
    if(req.body.password != req.body.confirmpassword){
        return res.redirect('back');

    }  

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            User.create({
                email:req.body.email,
                password:req.body.password,
                name:req.body.first_name,
                type:req.body.type

            }, function(err,user){
                if (err){console.log('error in creating user while signing up');  return }

                //check type if student create student else instructor 
                var type= req.body.type
                if(type=='student'){
                   Student.create({
                    firstname:req.body.first_name,
                    lastname:req.body.last_name,
                    address:[{
                        street_address:req.body.street_address,
                        city:req.body.city,
                        state:req.body.state,
                        zip:req.body.zip

                    }],
                    email:req.body.email

                   })
                }else{
                    console.log('is instructor');
                    Instructor.create({
                        firstname:req.body.first_name,
                    lastname:req.body.last_name,
                    address:[{
                        street_address:req.body.street_address,
                        city:req.body.city,
                        state:req.body.state,
                        zip:req.body.zip

                    }],
                    email:req.body.email
                    })
                }
                // req.flash('success','user created')
                return res.redirect('/'); 
            })
        }
        else{
            return res.redirect('back'); 
            
        }
    });

}


//post method for login page 
module.exports.createsession= function(req,res){
    var usertype= req.user.type;
    // var username= req.user;
    // console.log(username)
    return res.redirect('/'+usertype+'s/classes'); 
    // return res.redirect('/')
}

module.exports.login= function(req,res){
    return res.render('loginpage')
}
//sign-out controller
module.exports.destroySession= function(req,res){
    //this is by default method provided by passoport 
    req.logout();
    req.flash('success','Logged out Successfully');
    return res.redirect('/');
}

module.exports.profile= function(req,res){
    return res.render('profile')
}