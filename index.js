const express= require('express');
const path= require('path');
const favicon= require('serve-favicon');
const morgan= require('morgan');
const cookieparser= require('cookie-parser');
const boduparser= require('body-parser');
const ejs= require('ejs');
const flash= require('connect-flash');
const session= require('express-session');
const passport= require('passport');
const localStrategy= require('passport-local').Strategy;
const mongoose= require('./config/mongoose');
const expressvalidator= require('express-validator');
var app = express();
const port= 8000;
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    secret:'abcdefghijk',
    saveUninitialized:'false',
    resave:'true',
}));
app.use(passport.initialize());
app.use(passport.session());

//eexpress Validator
// app.use(expressvalidator({
//     errorFormatter:function(param,msg,value){
//         var namespace= param.split('.')
//         ,root= namespace.shift()
//         , formParam= root ;

//         while(namespace.lenght){
//             formParam+='['+ namespace.shift() + ']';

//         }
//         return {
//             param: formParam,
//             msg:msg,
//             value:value
//         }
//     }
// }));

app.use(flash());

//globale variable message
app.use( function(req,res,next){
    res.locals.message= require('express-message')(req,res)
    next();
})

app.use('/',require('./routes/index'))





app.listen(port, function(err){
    if(err){
        console.log('Error in connnecting to port ',port );
    }
    console.log('Connected to port no:',port)
})