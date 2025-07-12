// const registerUser = require('./Registration')
// const os =require('os')
// const fs =require('fs')

const express = require('express');

// function sayHello(){
//     console.log("hello, from Node js");
// }

// sayHello();

// registerUser.checkForUser();
// registerUser.registerForUser();

// console.log(os.freemem());
// console.log(os.homedir());

// Creating file using Fs module
// fs.writeFile('./Sample.js',"i am sample.js file",(err)=>{
    
//     if(err){
//         console.log("error occured");
//         return
//     }
//         console.log('file created succesfully')
    
// })

// reading file using fs module 

// fs.readFile('./Sample.js','utf8',(err,data)=>{
//     if(err){
//         console.log("error occured")
//         return
//     }
//     console.log('data presenting succesfully ', data)
// })


const app = express();

//Get route method
app.get('/',(req,res)=>{
    console.log(req)
    res.send("Hey, wecome to the sever..")
})

app.get('/bye',(req,res)=>{
    console.log(req);
    res.send("Byee Byee...!!!")
})

//Post route method
app.listen(3000,()=>{
    console.log("your server running. ")
})