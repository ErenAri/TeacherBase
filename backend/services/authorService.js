var Author = require("../models/author")
var router = express.Router()
var express = require("express")
var user = require("./userService")


router.post("", user.checkAuthenticated,(request,response)=>{
    var author =   request.body
    var author =  new Author(request.body)
    author.save((error,result)=>{
        if(error){
            console.log(error)
            return response.sendStatus(500).send({messagee:error})
        }

        return response.sendStatus(201)
    })
})

router.get("",user.checkAuthenticated,async(request,response)=>{
    var authors = await Author.find({},"-__v -_id")
})

var author = {router}

module.exports = author
