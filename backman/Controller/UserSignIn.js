const userModel = require("../Models/UserModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');



console.log("yex");
async function userSignInController(req,res){
       
       console.log("yex");
       try {
              
              console.log("yex");

              const {email,password} = req.body
              console.log(req.body);

              if(!email){
                     throw new Error("Enter your email please...!")
              }
              
              if(!password){
                     throw new Error("Enter your password please...!")
              }
              
              const user = await userModel.findOne({email})
              console.log("user : " , user);

              if(!user){
                     throw new Error("User Not found")
              }

              const checkPassWord = await bcrypt.compare(password,user.password)
              console.log("Check PassWord  : ", checkPassWord);
              

              if(checkPassWord)
              {
                     const tokenData = {
                            _id : user._id,
                            email : user.email
                     }

                     const token = await jwt.sign(tokenData,"mnbvcxz",{expiresIn : 60*60*8})

                     const tokenOption = {
                            httpOnly : true,
                            secure : true,
                     }
                     res.cookie("token",tokenOption).json({
                            message : "login SuccessFully",
                            data : token,
                            success : true,
                            error : false
                     })
              }
              else{
                     throw new Error("Ckeck Your Password...")
              }

              
       } catch (error) {
              res.json({
                     message : error.message || error,
                     error : true,
                     success : false
              })
       }
}
module.exports = userSignInController
