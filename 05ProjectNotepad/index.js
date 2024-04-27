const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//we will use ejs so that we can calculate anything or use js in html on ejs
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render("index")
})


//here ':' is dynamic 
app.get('/profile/:username',(req,res)=>{
    // req.params.username
    res.send('Welcome',req.params.username)
    //res.send("Its running")
})

app.get('/author/:username/:age',(req,res)=>{
    //res.send(req.params.username) // this is object
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`)
})


app.listen(3000, ()=>{
    console.log("Running at 3000");
})