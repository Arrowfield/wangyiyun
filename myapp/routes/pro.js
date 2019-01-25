const express = require("express");
const router = express.Router();
const pool = require('../connection');

router.get('/',(req,res)=>{
  var sql = "SELECT * FROM xz_user";
  //[]代表占位符的参数
  pool.query(sql,[],(err,result)=>{
    if(err) throw  err;
    res.send(result);
  })
});

module.exports = router;