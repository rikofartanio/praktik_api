const { DataType, DataTypes } = require('sequelize');
const dbConn = require('../config/database');

const OrdersTable = dbConn.define('orders',{
    id:{
        type: DataTypes.BIGINT, //jumlah lebih dari integer
        allowNull: false,
        primaryKey: true
    },
    cars_id:{
        type: DataTypes.STRING,
        allowNull: true
    },
    order_date:{
        type: DataTypes.DATE,
        allowNull: true
    },
    qty:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    tableName: 'orders',
    timestamps: false
});

OrdersTable.associate = function(model){
    //belongsTo = 1 orders dimiliki oleh cars 
    OrdersTable.belongsTo(model.CarsTable, { foreignKey: 'cars_id', as: 'cars'});
}


module.exports = OrdersTable;