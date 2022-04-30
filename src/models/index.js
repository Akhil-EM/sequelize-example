const dbConfig = require("../config/db-config");

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
      host:dbConfig.HOST,
      dialect:"mysql",
      operatorsAliases:0,
      pool:dbConfig.pool
    });


sequelize.authenticate()
         .then(()=> console.log("connected..."))
         .catch(error => console.log(error));

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel.js")(sequelize,DataTypes);
db.reviews = require("./reviewModel.js")(sequelize,DataTypes);

//this line is very important because 
//every time the server runs data get lost if it's set 
//to false
db.sequelize.sync({force:false})
            .then(()=>console.log("application re-syncing"))
            .catch(error=>console.log(error));

    
module.exports = db;