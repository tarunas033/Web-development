function validate(req,res,next){
    const {dish_name,price,cuisine,rating}=req.body;
    if(typeof(dish_name)==="string"&&typeof(price)==="number"&&typeof(cuisine)==="string"&&typeof(rating)==="number"){
        next()
    }else{
        res.send("err","validation failed",err)
    }
}

module.exports={
    validate
};