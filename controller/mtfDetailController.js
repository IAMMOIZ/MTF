const db = require("../db");

exports.vesselDetailCntrl = (req , res )=>{
    db.query(
        "SELECT * FROM mtf_vessels_accounting.mtf_vessel_detail_sap",
        (err , result )=>{
            if(err)
            {
                res.json({status : 400 ,err : err});
            }else{
                res.json({status : 200 ,result : result});
            }
        }
    )   


    // res.json({status : 200 , msg : "working"});
}

exports.add = (req , res) =>{
    // app.get("/hi" , (req , res )=>{
//     db.query(
//         "",
//         (err , result )=>{
//             if(err)
//             {
//                 res.json({status : 400 , msg : "failed to perform operation"})
//             }
//             else
//             {

//             }
//         }
//     )
//     res.json({
//         status : 200 ,
//         msg  : "success"
//     })
// })

}