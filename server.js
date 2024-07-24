const express = require("express");
const app = express();

const PORT = 3000;

app.get("/" , (req , res) => {
    res.json({message : "This is from node server"});
});

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});