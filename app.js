const express= require('express');
const cors= require('cors');
const bodyParser= require('body-parser')
const port= 3030;
const app= express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//panggil ejs dan set ke express
app.set('view engine','ejs');

// panggil semua routing yang ada
const routerCars= require('./routes/cars.route');
const routeOrders = require('./routes/orders.route');
const routeViews = require('./routes/views.routes');
app.use(routerCars);
app.use(routeOrders);
app.use(routeViews);

//panggil package yang dipakai/diperlukan
// const opstionAllow ={
//     origin: 'http://localhost:3000'
// }
// app.use(cors(opstionAllow))  // (ini utuk hanya memperbolehkan akses ke API nya hanya localhost tertentucle)

app.use(cors())


//buat server virtual
app.listen(port, ()=>{
    console.log("Backend Praktik API berjalan di port : ",port)
});
