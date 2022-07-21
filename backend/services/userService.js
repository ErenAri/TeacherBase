const author = require("../models/author");
var Author = require("../models/author")
var router = express.Router()
var User = require("../models/user")
var jwt = require("jwt-simple")

router.post("/register",(request,response)=>{
    var userData = request.body;
    var user = new User(userData)

    user.save((error,result)=>{
        if(error){
            console.log("Error saving the user")
        }
        return response.sendStatus(201).send({message:"Created"})
    })
})

router.post("/login",async(request,response)=>{
    var userData = request.body
    var user = await User.findOne({email:userData.email})
    if(!user){
        return response.status(401).send({message:"Email or password invalid"})
    }

    if(userData.password != user.password){
        return response.status(401).send({message:"Email or password invalid"})
    }

    var payload = {}
    var token = jwt.encode(payload,"12345")

    return response.Status(200).send({token})
})

var user ={router}

module.exports = author