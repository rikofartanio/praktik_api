const { DataTypes }= require('sequelize');
const dbConn= require('../config/database');

const CarsTable= dbConn.define('cars',{
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    brand:{
        type: DataTypes.STRING,
        allowNull: true
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
},{
    tableName:'cars',
    timestamps: false,
});

CarsTable.associate = function(model){
    // hasMany = cars bisa punya banyak orders
    CarsTable.hasMany(model.OrdersTable, { foreignKey: 'cars_id'});
}

module.exports = CarsTable; 