const express = require('express');
const app = express();
const path = require('path')
const Usermodel = require('./models/user');
const user = require('./models/user');

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
  res.render("app")
})
app.get('/read',async(req,res)=>{
  let users = await Usermodel.find();
   res.render("read",{users})
})
app.post('/create',async(req,res)=>{
  let{name,email,image}=req.body;
  let createUser = await Usermodel.create({
    name,
    email,
    image
  })
  res.send(createUser)
  
})

app.listen(3000)
