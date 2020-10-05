const con = require('./db_conect');
const connection = con.getConnection();
connection.connect();
const express = require('express')
const  router = express.Router();
router.post('/:id',(req,res)=>{
   const quotation_id = req.params.id;
   const university_name = req.body.university_name;
   const number_of_students = req.body.number_of_students;
   const number_of_teachers = req.body.number_of_teachers;
   const number_of_employees = req.body.number_of_employees;
   const contact_number = req.body.contact_number;
   
   connection.query(`update quotations set university_name = "${university_name}" ,number_of_students = ${number_of_students}, number_of_teachers = ${number_of_teachers}, number_of_employees = ${number_of_employees}, contact_number = ${contact_number} where quotation_id = ${quotation_id} `,(err,result,field)=>{
       if(err){
           res.status(404).json({
               message:err
           })
       }else{
           res.status(200).json({
               message:"Success"
           })
       }
   })
})
module.exports = router;