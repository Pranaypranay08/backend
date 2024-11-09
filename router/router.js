const express=require('express')
const router=express.Router();

const employeeController=require('../controller/EmployeeController');
const Employee=require('./model/Employee')


module.exports=router;