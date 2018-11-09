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
});
module.exports = router;