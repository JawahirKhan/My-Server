const express = require("express");
const app = express();
const port = 3000 


app.get("/", ((req,res)=> { 
    res.send('Hello World')
}))

app.get("/about-route", ((req,res)=> { 
    res.send('Hello From Jawahir');
}))

app.get("/contact", ((req,res)=> { 
    res.send('<h1> My Contact </h1>');
}))

app.get("/home", ((req,res)=> { 
    res.send('<h1> My Home Page </h1>');
}))

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})