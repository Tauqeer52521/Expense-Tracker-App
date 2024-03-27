const express=require('express');
require('dotenv').config();

const app=express();
const port=process.env.PORT;

app.get("/",(req,res)=>{
res.send("Hello from the server");
});

app.listen(port,()=>{
    console.log("You are listening to the port no.:",port);
})