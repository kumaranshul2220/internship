var express = require('express');
var router = express.Router();
const dbModels=require('../models/db');
var index=require('../views/index.pug')
var jwt=require('jsonwebtoken');
// const dbModels=require('../models/db');

const { success, error, validation } =require("../responseApi");


/* GET home page. */ 
router.get('/', function(req, res, next) {
  console.log('hello')
  res.render('index', { title: 'Backend server Anshul' });
});

router.get("/test", async(req, res) => {

  //console.log(req.headers['bearer'])
  try {
    //  success here
    res.status(200).json(success('OK', {id:887,name:'Anshul'}, res.statusCode));
  } catch(err) {
    //  error here
    res.status(500).json(error('Something went wrong.', res.statusCode));
  }

});

router.get("/model",async(req,res)=>{
  try{
    const model=await dbModels.testUsers.find();
  
    res.status(200).json(model);
    } catch(err){
      res.status(500).json({message:err.message})
    }
})

//jwt-tokens post request
router.post("/register", (req,res)=>{
  var {email,password}=req.body
  try{
      tokens=jwt.sign({email:email},'supersecret')
  
    res.status(200).json({token:tokens});
    } catch(err){
      res.status(500).json({message:err.message})
    }
})

//pug page render
router.get("/page",(req,res)=>
{
  res.render('index')
})

module.exports = router;
