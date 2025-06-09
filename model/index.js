const sequelize= require("../config/database")
const CarsTable= require("./cars.model")
const OrdersTable = require("./orders.model")

const models = {
    CarsTable,
    OrdersTable
};

//panggil associate untuk setiap model (jika ada)
Object.values(models).forEach((Model)=>{
    if (Model.associate){
        Model.associate(models);
    }
});

const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB Connection successfully");
        await sequelize.sync();
        console.log("Model synced");
    } catch (error) {
        console.log("DB Connection failed : ",error);
    }
}

module.exports= {initDB, CarsTable, OrdersTable}