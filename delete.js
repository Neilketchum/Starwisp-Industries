const con = require('./db_conect');
const connection = con.getConnection();
connection.connect();
const express = require('express')
const  router = express.Router();

router.post("/:id",(req,res)=>{
    const quotation_id = req.params.id;
 
    connection.query(`DELETE FROM quotations where quotation_id = ${quotation_id}`,(err,result)=>{
        if(!err){
            res.status(200).json({
                message:"Success"
            })
        }else{
            res.status(400).json({
                message:err
            })
        }
    })
})
module.exports = router;