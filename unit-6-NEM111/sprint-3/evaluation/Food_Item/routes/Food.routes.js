const express=require("express")
const {foodModel} =require("../model/Food.model")
const foodRouter=express.Router()
const {validate}=require("../middlewares/validate.middleware")

foodRouter.get("/",async(req,res)=>{
    let {min,max,price,cuisine}=req.query
    if(min && max){
        try{
         let foods=await foodModel.find({rating:{$gte:min,$lte:max}})
         res.send(data)
        }catch(err){
            res.send("failed to get data min and max")

        }
    }else if(price){
        try{
            let foods=await foodModel.find({price:{$lte:price}})
            res.send(foods)
           }catch(err){
               res.send("failed to get data price")
   
           } 
    }else if(cuisine){
        try{
            let foods=await foodModel.find({cuisine:cuisine})
            res.send(foods)
           }catch(err){
               res.send("failed to get data cuisine")
   
           } 
    }else{
        try{
            const foods=await foodModel.find()
            res.send(foods)
            console.log(foods)
        }catch(err){
            res.send("food not got",err)
        }
    }
   
})

foodRouter.post("/register",validate,async (req,res)=>{
    try{
        const food=new foodModel(req.body)
        await food.save()
        // console.log(food)
        res.send(" food added to database")
    }catch(err){
        console.log("err food not posted",err)
        res.send(err.message)
    }
})
//patch part
foodRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body
    try{
        await foodModel.findByIdAndUpdate({_id:ID},payload)
        res.send("data has been updated ")

    }catch(err){
       console.log("problen in update",err)
       res.send("msg","cannot modify",err)
    }
})
//delete part 
foodRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id;
    
    try{
        await foodModel.findByIdAndDelete({_id:ID})
        res.send("data has been updated ")

    }catch(err){
       console.log("problen in deleting",err)
       res.send("msg","cannot delete",err)
    }
})



module.exports={
    foodRouter
}