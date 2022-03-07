const express = require("express")
const app = express()
app.get("/books",logger,checkpermission,function(req,res){
    return res.send({ route: req.role})
})
app.get("/libraries",logger,checkpermission,function(req,res){
    return res.send({ route: req.role, permission: loggerper})
})
app.get("/authors",logger,checkpermission,function(req,res){
    return res.send({ route: req.role, permission: loggerper})
})
app.listen(5000,()=>{
    console.log("listing to port 5000")
})
let loggerper
function checkpermission(req,res,next){
    if(req.path=="/books"){
        req.role = "/books"
    }
    else if(req.path == "/libraries"){
        req.role = "/libraries"
        loggerper = true
    }
    else if(req.path=="/authors"){
        req.role = "/authors"
        loggerper = true
    }
    next()
}
function logger(req,res,next){
    console.log("before logger")
    next()
    console.log("After logger")
}
