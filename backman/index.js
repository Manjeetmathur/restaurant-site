const express = require('express')
const mongoose = require("mongoose")
const app = express()
const connectDB = require("./db")
const router = require('./Route/Route')
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(cookieParser())

app.use("/pip",router)

const URI ="mongodb+srv://kumanjeet779:food-app@practice-food-app.gdety.mongodb.net/food?retryWrites=true&w=majority&appName=practice-food-app"

const PORT = 8000 || URI
connectDB().then(() =>{
       app.listen(PORT, () =>{
              console.log("connect with DB");
       })
})



