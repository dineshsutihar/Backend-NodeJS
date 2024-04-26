const express = require('express');
const app = express();

// Form Data parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Middleware
app.use((req,res,next)=>{
    console.log('Middlewere working');
    next()
})

// Creation of routes using express ja
app.get('/',(req,res)=>{
    res.send('This is just a response which is sent to the client')
})

app.get('/profile',(req,res)=>{
    res.send('Hyy, This is Dinesh Sutihar.\n You are at Profile Route.')
})

app.get('/updated',(req,res,next)=>{
    return next(new Error('Something went wrong'))
})

// Server is listening on port 3000
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})