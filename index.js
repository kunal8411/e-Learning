const express= require('express');
const path= require('path');
const favicon= require('serve-favicon');
const morgan= require('morgan');

const port= 8000;


// const localStrategy= require('passport-local').Strategy;
const cookieParser= require('cookie-parser');
var app = express();
app.use(express.urlencoded());

app.use(cookieParser());
const boduparser= require('body-parser');
const passport= require('passport');
const passportLocal= require('./config/passport-local-strategy');
const ejs= require('ejs');
const flash= require('connect-flash');
const session= require('express-session');
const mongoose= require('./config/mongoose');
const expressvalidator= require('express-validator');
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');

const MongoStore=require('connect-mongo')(session);
app.use(session({
    secret:'abcdefghijk',
    saveUninitialized:'false',
    resave:'false',
    cookie:{
        //milliseconds, max age of cookie specified here 
       maxAge:(1000 * 60 * 100)
   },
   store:new MongoStore(
    {
         mongooseConnection:mongoose,
         autoRemove: 'disabled'

    },
    function(err){
        console.log(err || 'connect-mongoose setup OK')
    }

)
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
// app.use( function(req,res,next){
//     res.locals.message= require('express-message')(req,res)
//     next();
// })

app.use('/',require('./routes/index'))





app.listen(port, function(err){
    if(err){
        console.log('Error in connnecting to port ',port );
    }
    console.log('Connected to port no:',port)
})