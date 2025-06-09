const {OrdersTable, CarsTable} = require("../model")

const getOrdersWithCars = async (req, res) => {
    try {
        const orders = await OrdersTable.findAll({
            include: [{
                model: CarsTable,
                as:'cars'
            }]
        });

        if(orders){
            res.status(200).json({
                data : orders,
                message : "Succesfully get orders with cars"
            })
        }else{
            res.status(404).json({
                data : [],
                message : "Data not found on get orders with cars"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            data : [],
            message : " Failed on get orders with cars"
        })
    }
}

module.exports= {getOrdersWithCars}