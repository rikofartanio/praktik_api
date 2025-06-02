const sequelize= require("../config/database")
const CarsTable= require("./cars.model")

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

module.exports= {initDB, CarsTable}