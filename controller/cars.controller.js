const { CarsTable }= require('../model');

//Method GET, mengambil data cars
const getCars= async(req,res)=>{
    try {
        // findAll = memanggil semua data/menemukan
        // semua data dari model tersebut
        const carsData= await CarsTable.findAll({order: [['id','ASC']]});
        //ASC= ASCENDING = urutan dar kecil ke terbesar, misal 1,2,3,... atau a,b,c,...
        //DESC= DESCENDING = urutan dari terbesar ke terkecil . misal 100, 99, 98,.... atau z, y, x,...
        // Tanpa order ASC/DESC (order) , maka data akan diurutkan secara acak 
        res.status(200).json({
            data: carsData,
            message: "Success get cars data"
        });
    } catch (error) {
        console.log("error"+error);
        res.status(500).json({
            data:[],
            message: "Something wrong, failed get cars data"
        })
    }
}

const getOneCars= async(req,res)=> {
    try {
        // findOne = memanggil satu data/manemukan
        // satu data dari model tersebut berdasarkan parameter
        // yang di pilih
        const idCar= req.params.id; // dapet dari :id
        const carsData= await CarsTable.findOne({
            where:{id: idCar}
        });

        if(carsData === null){
            res.status(404).json({
                data:{},
                message: "Data cars not found, please use another"
            })
        }else{
            res.status(200).json({
                data: carsData,
                message: "Success get one cars data"
            });
        }      
    } catch (error) {
        console.log("error"+error);
        res.status(500).json({
            data:[],
            message: "Something wrong, failed get cars data"
        })
    }
}

const createCars= async (req,res) =>{
    try {
        const id= req.body.id;
        const name= req.body.name;
        const brand= req.body.brand;
        const year= req.body.year;

        const data ={
            id:id,
            name:name,
            brand:brand,
            year:year
        }
        const tryCreate= await CarsTable.create(data);
        if (tryCreate) {
            res.status(200).json({message: "Success create new car"})
        } else {
            res.status(500).json({message: "Failed create new car"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed create new car"});
    }
}

const updateCars= async (req,res) => {
    const id = req.params.id; //mengambil id dari parameter
    try {
        const name = req.body.name;
        const brand = req.body.brand;
        const year = req.body.year;

        const data = {
            name : name,
            brand : brand,
            year : year
        }

        // Temukan datanya berdasarkan pk (primary key)
        const findData= await CarsTable.findByPk(id);
        if(findData){
            //coba ubah data setelah ketemu/match
            const tryUpdate = await findData.update(data);
            if(tryUpdate){
                res.status(200).json({ message: "Success to update cars with id : "+id})
            }else{
                res.status(500).json({ message: "failed to update cars with id : "+id})
            }
        }else{
            //jika data  tidak ditemukan 
            res.status(404).json({ message: "Cars with id "+id+" not found, please try another id"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Failed to update cars with id : "+id})
    }
}

const deleteCars = async (req,res) => {
    const id = req.params.id;
    try {
        // cari data cars berdasarkan id primary key nya
        const findData = await CarsTable.findByPk(id);
        if(findData){
            //jika ketemu datanya maka langsung delelte
            const tryDelete = await findData.destroy();
            if(tryDelete){
                //jika berhasil delete 
                res.status(200).json({ message: "Success delete data with id : "+id});
            }else{
                //jika gagal delete
                res.status(500).json({ message: "Failed delete data with id : "+id});
            }
        } else{
            //jika data tidak ketemu
            res.status(404).json({ message: "Failed find data with id : "+id});
        }
    } catch (error) {
        //jika ada error di program
        console.log(error)
        res.status(500).json({ message: "Failed delete data with id : "+id});
    }
}

module.exports= {getCars, getOneCars, createCars, updateCars, deleteCars}