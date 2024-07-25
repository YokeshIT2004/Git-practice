require("dotenv").config()
const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    res.json({message : "This is from node server"});
});



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});