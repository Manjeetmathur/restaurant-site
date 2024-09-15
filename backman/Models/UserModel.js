const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
       email:{
              type : String,
              unique : true,
              required : true,
       },
       phone:{
              type : String,
              unique : true,
              required : true,
       },
       password:{
              type : String,
              required : true,
       },
       confirmPassword:{
              type : String,
              required : true,
       }
},
{
       Timestamp:true
});

const userModel = mongoose.model("user",userSchema)

module.exports = userModel