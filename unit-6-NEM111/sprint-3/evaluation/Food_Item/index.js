
 const express=require("express");
  const {connection}=require("./db")
  const {foodRouter}=require("./routes/Food.routes")
  require("dotenv").config()
  const {record}=require("./middlewares/record.middleware")


 
 const app=express()
 app.use(express.json())

 app.get("/",(req,res)=>{
    res.send("welcome to server")
 })
 app.use("/foods",foodRouter)


 


 app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        res.send("cannot connect to db",err)
    }
    console.log("server is running at 4300")
 })