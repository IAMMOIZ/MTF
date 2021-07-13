const mysql = require("mysql");
const db = mysql.createConnection({
    // host : "10.26.24.41",
    host  : "127.0.0.1",
    // user : "MTF_Vessels_Accounting_rw",
    user : "root",
    // password : "",
    password : "",
    // database : "MTF_Vessels_Accounting"
        database : "mtf_vessels_accounting"
})

db.connect((err)=>{
    if(err)
    {
        console.log(err);
    }else{
        console.log("database connected successfully");
    }
})

module.exports = db;