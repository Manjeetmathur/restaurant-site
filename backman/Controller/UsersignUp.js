const userModel = require("../Models/UserModel")
const bcrypt = require("bcrypt")


async function userSignUpController(req,res){
       try {
              const {email,phone,password} = req.body
              console.log(req.body);
              
              const user = await userModel.findOne({email})
              console.log("user : " , user);

              if(user){
                     throw new Error("User is Already Registered")
              }

              if(!email){
                     throw new Error("Enter your email please...!")
              }
              if(!phone){
                     throw new Error("Enter your phone number please...!")
              }
              
              if(!password){
                     throw new Error("Enter your password please...!")
              }

              const salt=bcrypt.genSaltSync(10);
              const hashPassword = await bcrypt.hashSync(password,salt)

              if(!hashPassword){
                     throw new Error("Something went Wrong");
              }
              console.log("Password  : ",hashPassword);
              

              const payload ={
                     ...req.body,
                     password : hashPassword
              }

              const userData = new userModel(payload)
              const saveUser = await userData.save()
              
              res.status(201).json({
                     data:saveUser,
                     message : "User Created Successfully",
                     error : false,
                     success : true,
                     
                     
              })
              

       } catch (error) {
              res.json({
                     message : error.message || error,
                     error : true,
                     success : false
              })
       }
}
module.exports = userSignUpController
