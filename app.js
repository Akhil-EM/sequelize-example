const express = require("express");
const cors = require("cors");


const app = express();
const corsOptions = {
    origin:"https://localhost:8000"
}
const PORT = process.env.PORT || 8000;

//middle wares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routers
const productRoute = require("./src/routes/product.Route");

app.use("/product",productRoute);
app.get("/",(req,res)=>{
    res.json({status:"success",message:"sequelize application working good"});
})




app.listen(PORT,()=>console.log("application running on "+PORT));
