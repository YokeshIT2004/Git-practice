const express = require("express");
const app = express();

const PORT = 3000;

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

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});