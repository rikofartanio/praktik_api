const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    //Ambil atau cek token dari barier, contoh : Bearer <token>
    const token = authHeader && authHeader.split(' ')[1];

    if (!token){
        return res.status(401).json ({ message : "Token not found, you cant access this API"});
    }

    jwt.verify(token, SECRET_KEY, (err, user)=> {
        //pengecekan error : jika error maka muncul pesan 
        if(err){
            return res.status(403).json({ message : "Your token not valid, please relogin"});
        }

        // jika aman tidak error lanjutkan proses APInya 
        req.user = user;
        next();
    })
}

module.exports = verifyToken;