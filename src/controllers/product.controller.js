const db = require("../models");

//models
const Product = db.products;
const Review = db.reviews;



exports.addProduct = async (req,res)=>{
    

    try{

        let result = await Product.create({
                            title:req.body.title,
                            price:req.body.price,
                            description:req.body.description,
                            published:req.body.published ? req.body.published :false})

        res.json({status:"success",message:"product inserted",data:result})

    }catch(error){
        res.json({status:"error",message:error.message,data:null})
    }
    
}


exports.getProducts = async (req,res)=>{

    try{

        let products = await Product.findAll({
            attributes:["id","title","price"]
        });
        res.json({status:"success",message:"products",data:products})

    }catch(error){
        res.json({status:"error",message:error.message,data:null})
    }
}


exports.getProduct = async (req,res)=>{

    try{
        
        let id = req.params.id;
        let product = await Product.findOne({where:{id:id}});
        res.json({status:"success",message:"products",data:product})

    }catch(error){
        res.json({status:"error",message:error.message,data:null})
    }
}

exports.updateProduct = async (req,res)=>{

    try{
        
        let id = req.params.id;
        let product = await Product.update(req.body,{where:{id:id}});
        res.json({status:"success",message:"products",data:product})

    }catch(error){
        res.json({status:"error",message:error.message,data:null})
    }
}


exports.getPublishedProducts = async (req,res)=>{

    try{
        
        let products = await Product.findAll({where:{published:true}});
        console.log(products);
        res.json({status:"success",message:"products",data:products})

    }catch(error){
        res.json({status:"error",message:error.message,data:null})
    }
}

exports.deleteProduct = async (req,res)=>{

    try{
        
        let id = req.params.id;
        await Product.destroy({where:{id:id}});

        res.json({status:"success",message:"product deleted",data:null})

    }catch(error){
        res.json({status:"error",message:error.message,data:null})
    }
}