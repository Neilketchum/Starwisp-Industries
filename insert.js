const con = require('./db_conect');
const connection = con.getConnection();
connection.connect();
const express = require('express')
const  router = express.Router();
router.post('/',(req,res)=>{
   const quotation_id = req.body.quotation_id;
   const university_name = req.body.university_name;
   const number_of_students = req.body.number_of_students;
   const number_of_teachers = req.body.number_of_teachers;
   const number_of_employees = req.body.number_of_employees;
   const contact_number = req.body.contact_number;
   connection.query(`insert into quotations values(${quotation_id},"${university_name}",${number_of_students},${number_of_teachers},${number_of_employees},${contact_number})`,(err,result)=>{
       if(err){
           res.status(400).json({
               message:err
           })
       }else{
           res.status(200).json({
               message:result
           })
       }
   })
})
module.exports = router;