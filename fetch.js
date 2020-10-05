const con = require('./db_conect');
const connection = con.getConnection();
connection.connect();
const express = require('express')
const  router = express.Router();
router.get('/',(req,res)=>{
    connection.query('select * from starwisp.quotations',(err,arr,fields)=>{
        res.send(arr)
    })
})
module.exports = router