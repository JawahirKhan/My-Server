const User = require("../model/user")

const express=require("express")
const app=express()

app.post('/create', async (req, res) => {
    const { username, email, phone } = req.body;
    const user = new User({

        username, email, phone

    }
    )
    await user.save();
    res.status(200).json(user)
})
const getAllUsers=async (req,res) =>{
    const user = await User.find()
    res.status(200).json(user)
}
app.get('/getUser', async (req, res) => {
    
})

app.put('/update/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(user)
})

const userdelete = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id, { new: true })
    res.status(200).json(user)
}

//mongodb+srv://nayabrasheedn:<password>@cluster0.wmtebag.mongodb.net/

app.get("/", ((req, res) => {
    res.send('Hello World')
}))

app.get("/about-route", ((req, res) => {
    res.send('Hello From Jawahir');
}))

app.get("/contact", ((req, res) => {
    res.send('<h1> My Contact </h1>');
}))

app.get("/home", ((req, res) => {
    res.send('<h1> My Home Page </h1>');
}))

app.get("/", ((req,res)=> { 
    res.send('<h1> My Home Page </h1>');
}))
    
module.exports={getAllUsers,userdelete}