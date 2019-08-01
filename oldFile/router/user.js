/*编写有关用户信息相关的路由*/
const express = require("express");
const pool = require("../pool");
var router = express.Router();

//有关session的使用 导入express-session模块

//检查用户登录信息
router.post('/signin', (req, res) => { //路径名应修改为signin 请求方式应该为get
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  if (!uname) {
    res.send({ code: 403, msg: "用户名不能为空" });
    return;
  }
  if (!upwd) {
    res.send({ code: 404, msg: "密码不能为空" });
    return;
  }
  (async function () {
    var obj = {result:{},count:0}
    var sql = " SELECT uid FROM xz_user WHERE uname = ? AND upwd = ?";
    sql += " OR phone = ? AND upwd = ? OR email = ? AND upwd = ?";
    await new Promise(function(open){
      pool.query(sql, [uname, upwd, uname, upwd, uname, upwd], (err, result) => {
        if(err) throw err;
        //获取结果
        if(result.length > 0){
          req.session.uid = result[0].uid;
          obj.result = {code:1,msg:result};
        }else{
          obj.result = {code:-1,msg:"没有找到该用户"}
        }
        open();
      })
    })
    var sql = "SELECT count FROM xz_shoppingcart_item WHERE user_id = ";
        sql += "(SELECT uid FROM xz_user WHERE uname = ? AND upwd = ?)"
    await new Promise(function(open){
      pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        //获取结果
        if(result.length > 0){
          obj.count = result
        }else{
          obj.count = 0
        }
        open();
      })
    })
    res.send(obj);
  })();

  /*pool.query(sql, [uname, upwd, uname, upwd, uname, upwd], (err, result) => {
    if (err) throw err;
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf-8"
    });
    if (result.length > 0) {
      req.session.uid = result[0].uid; //获取用户ID
      //console.log(req.session);
      res.write(JSON.stringify({
        code: 1,
        msg: result
      }));
    } else {
      res.write(JSON.stringify({
        code: 303,
        msg: "没有找到该用户"
      }));
    }
    res.end();
  })*/

})
//检查用户是否登录
router.get('/islogin', (req, res) => {
  var uid = req.session.uid;
  //console.log(req.session);
  //var uid = req.query.uid;
  if (!isNaN(uid)) { //NaN与NaN比较返回的是false
    var sql = " SELECT * FROM xz_user WHERE uid = ? ";
    pool.query(sql, [uid], (err, result) => {
      if (err) throw err
      res.send({
        code: 1,
        msg: result
      })
    })
  } else {
    res.send({
      code: -1,
      msg: "用户未登录"
    });
  }
})
//检查用户是否注销
router.get('/signout', (req, res) => {
  req.session.uid = undefined;
  res.send({
    code: 1,
    msg: '用户注销'
  });
})
//用户注册
router.post('/adduser', (req, res) => {
  var $phone = req.body.phone;
  var $upwd = req.body.upwd;
  var sql = " INSERT INTO xz_user VALUES(null,null,?,null,?,null,null,null) ";
  pool.query(sql, [$upwd, $phone], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 200,
        msg: "注册成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "注册失败"
      });
    }
  })
})
//用户添加商品到购物车
router.post('/addpro', (req, res) => {

})

//获取用户的购物车信息
router.get('/cartnews', (req, res) => {
  var uid = parseInt(req.query.uid); //传过来的数据类型全部为字符串类型
  if (isNaN(uid)) {
    res.send({
      code: -1,
      msg: "用户未登录"
    });
    return;
  }
  var sql = "select lid,is_checked,count,md,title,subtitle,price from xz_shoppingcart_item left join";
  sql += " xz_laptop_pic on xz_shoppingcart_item.product_id = xz_laptop_pic.laptop_id left join";
  sql += " xz_laptop on xz_shoppingcart_item.product_id = xz_laptop.lid where xz_shoppingcart_item.user_id = ?";
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      msg: result
    });
  })
})
module.exports = router;
//整理代码
/*select is_checked,count,md,title,subtitle,price from xz_shoppingcart_item left join
  xz_laptop_pic on xz_shoppingcart_item.product_id = xz_laptop_pic.laptop_id left join
  xz_laptop on xz_shoppingcart_item.product_id = xz_laptop.lid where xz_shoppingcart_item.user_id = 1
*/