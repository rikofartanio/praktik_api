const {OrdersTable, CarsTable} = require("../model")

const viewsHomePage = async (req, res) => {
    res.render('pages/index') //merender file html dan memunculkan html
}

const viewCarsPage= async (req,res) => {
    const carsData= await CarsTable.findAll({order: [['id','ASC']]});
    res.render('pages/cars',{data : carsData})
}

const viewOrdersPage = async (req, res)=>{
        const orders = await OrdersTable.findAll({
            include: [{
                model: CarsTable,
                as:'cars'
            }]
        });
    res.render('pages/orders', {data : orders})
}

module.exports = {viewsHomePage, viewCarsPage, viewOrdersPage}