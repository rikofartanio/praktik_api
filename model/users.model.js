const { DataTypes }= require('sequelize');
const dbConn= require('../config/database');

const UsersTable= dbConn.define('users',{
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: true
    },
    last_login:{
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    tableName:'users',
    timestamps: false,
});

module.exports = UsersTable; 