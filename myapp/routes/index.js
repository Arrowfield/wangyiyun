var express = require('express');
var router = express.Router();
var conn = require('../connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*模块》控制器》方法*/
router.get('/home',(req,res)=>{
  //res.send("this is a login page")
  res.render('home',{title:"home"})
});

router.get('/login',(req,res)=>{
  //res.send("this is a login page")
  res.render('login',{title:"login"});
});
//操作登录的collector
router.post('/checkLogin',(req,res)=>{
  //接受视图的数据并控制用户输入
  var $uname = req.body.uname;
  var $upwd = req.body.upwd;
  if(!$uname){
    res.send({code:201,msg:"用户名不能为空"});
    return;
  }
  if(!$upwd){
    res.send({code:202,msg:"密码不能为空"});
    return;
  }
  var sql = "SELECT * FROM xz_user WHERE uname = ? AND upwd = ?";
  //将模型中发送数据
  conn.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.length > 0){
      //用户登录成功将uid存入session
      req.session.uid = result[0].uid;
      req.session.isLogin = true;
      res.send({code:200,msg:"登录成功"});
    }else{
      //向视图中发送数据
      res.render('login',{code:204,msg:"用户名或密码错误"});
      //res.send();
    }
  });
});

router.get('/register',(req,res)=>{
  //res.send("this is a login page")
  res.render('register',{title:"login"});
});

module.exports = router;
