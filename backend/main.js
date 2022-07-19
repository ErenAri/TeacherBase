var express = require("express")
var mongoose = require("mongoose")
var bodyParser  = require("body-parser")
var corse = require("cors")
var Author = require("./models/author")
var author = require("./services/authorService")
var app = express()
var User = require("./models/user")
var user = require("./services/userService")



app.use(bodyParser.json())


mongoose.connect("mongodb+srv://eren:12345@teacherbase.ufxgu.mongodb.net/?retryWrites=true&w=majority",(err)=>{
    if(!error){
        console.log('Connected to db')
    }
})

app.use("/author", author.router)
app.use(body.parser.json())
app.listen(8080)

