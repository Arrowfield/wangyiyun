var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login',(req,res)=>{
  res.send("用户正在进行用户的验证");
});
router.get('/register',(req,res)=>{
  res.send("用户正在进行注册的操作");
});

module.exports = router;
