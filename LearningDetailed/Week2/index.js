import express from 'express'

const app = express();


// Form Data parsers for body 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Middleware
function middleware(req, res, next){
    console.log("From insid middleware : " , req.header.createuser);
    console.log("Error from inside middleware");
    next() //this is to continue the patth to other
}


app.use(middleware) //this is to register middleware


function handleSum(n){
    
    let ans  = 0; 
    for(let i=1; i<=n; i++){
        ans=ans+i
    }
    return ans; 
}

app.get("/",(req, res)=>{
    console.log(req.body);
    let answer = handleSum(100)
    res.send(`answer is : ${ans}`)
})
app.post("/",(req, res)=>{
    console.log(req.body)
    console.log(req.body.name)
    res.json({response: `Congrats ${req.body.name} and your age is ${req.body.age}`})
})
 
//Req from user we are using Query params
app.get('/handleval', (req, res)=>{
    res.send(`Answer for your request is : ${handleSum(req.query.counter)}`)
})
// http://localhost:8000/handleval?counter=3203

//post method 
app.post('/createuse1r',(req, res)=>{
    if(req.body.counter<100){
        res.status(411).send("counter is too less ")
    }else{
        res.send("User is created")
        
    }
})

app.listen(8000, ()=>{
    console.log("App is listining at 8000");
})