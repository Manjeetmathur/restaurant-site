const mongoose = require('mongoose')


async function connectDB(){
       try {
              await mongoose.connect("mongodb+srv://kumanjeet779:food-app@practice-food-app.gdety.mongodb.net/food?retryWrites=true&w=majority&appName=practice-food-app")
              console.log("hello");
              
       } catch (error) {
              console.log(error)
       }
}
module.exports = connectDB;
