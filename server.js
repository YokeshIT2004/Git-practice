require("dotenv").config()
const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    res.json({message : "This is from node server"});
});

app.get("/hello-world" , (req ,res) => {
    res.send("Hello World");
});

app.get("/hello/:name" , (req,res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get("/user" , (req , res) => {
    res.send("This is user route");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});