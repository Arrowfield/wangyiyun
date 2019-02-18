const express = require('express');
const pool = require('../pool');
var router = express.Router();
router.get('/prolist', (req, res) => {
  var active = 0;
  if (req.query.pno && req.query.pSize) {
    active = 1;
  }
  if (req.query.keywords) {
    active = 2;
  }
  if (req.query.min && req.query.max) {
    active = 3;
  }
  //（1）分页查询
  if (active === 1) {
    var pno = parseInt(req.query.pno);
    var pSize = parseInt(req.query.pSize);
    var title = req.query.title;
    if (!title) {
      title = "%";
    } else {
      title = "%" + title + "%";
    }
    if (!pno) {
      pno = 1;
    }
    if (!pSize) {
      pSize = 10;
    }
    console.log(title);
    var $begin = (pno - 1) * pSize;
    console.log($begin, pSize);
    var sql = "SELECT title as t,price as p,md as m";
    sql += " FROM xz_laptop inner join xz_laptop_pic";
    sql += " on xz_laptop.lid = xz_laptop_pic.laptop_id";
    sql += " WHERE xz_laptop.title LIKE ? LIMIT ? , ?";
    pool.query(sql, [title, $begin, pSize], (err, result) => {
      if (err) throw err;
      res.send({
        code: 1,
        msg: result
      });
    });
  }

  //（2）模糊查询
  if (active === 2) {
    var keywords = req.query.keywords;
    if (!keywords) {
      keywords = "氧气耳机";
    }
    keywords = "%" + keywords + "%";
    var sql = "SELECT title as t,price as p,md as m";
    sql += " FROM xz_laptop inner join xz_laptop_pic";
    sql += " on xz_laptop.lid = xz_laptop_pic.laptop_id";
    sql += " WHERE title LIKE ?"; //同时进行分页
    pool.query(sql, [keywords], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send({
          code: 1,
          msg: result
        });
      } else {
        res.send({
          code: -1,
          msg: "未找到相关的商品"
        });
      }
    })
  }

  //（3）范围查询
  if (active === 3) {
    var max = req.query.max;
    var min = req.query.min;
    var sql = "SELECT title as t,price as p,md as m";
    sql += " FROM xz_laptop inner join xz_laptop_pic";
    sql += " on xz_laptop.lid = xz_laptop_pic.laptop_id";
    sql += " WHERE xz_laptop.price > ? AND xz_laptop.price < ?";
    pool.query(sql, [min, max], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send({
          code: 1,
          msg: result
        });
      } else {
        res.send({
          code: -1,
          msg: "商品不存在"
        });
      }
    })
  }
})
router.get('/detail',(req,res)=>{
  var pid = req.query.pid;
  var sql = "SELECT * FROM xz_laptop WHERE lid = ?";
  pool.query(sql,[pid],(err,result)=>{
    if(result.length>0){
      res.send({code:1,msg:result})
    }else{
      res.send({code:-1,msg:"未找到该商品或该商品已经下架"})
    }
  })
})
//获取图片与单价的接口
router.get('/pic',(req,res)=>{
  var sql = "SELECT lid,price,md FROM xz_laptop INNER JOIN xz_laptop_pic ON xz_laptop.lid = laptop_id  ORDER BY  RAND() LIMIT 10"
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:result})
  })
  /*这条sql语句有效率的问题以及兼容性问题：解决：
    SELECT MIN(id), MAX(id) FROM tablename;
    $id=rand($min,$max);
    SELECT * FROM tablename WHERE id > '$id' LIMIT 10;
  */
})
module.exports = router;