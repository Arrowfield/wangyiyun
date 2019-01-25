var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var path = require('path');

router.get('/',(req,res)=>{
  res.render('upload',{title:"book"});
});
//pc端版本 3.0layer
console.log();
router.post('/handlePhoto',(req,res)=>{
  //路径
  var form = new multiparty.Form();
  //form = JSON.parse(form);
  form.encoding = "utf-8";
  var url = __dirname.substring(0,__dirname.length-6);
  form.uploadDir = url + "public/storage/images";
  //执行
  form.parse(req, function(err, fields, files) {
    if(err){
      console.log(err);
      res.send({code:201,msg:"存入本地失败"});
      return;
    } else {
      res.render('login',{title:"123"});
    }
  });
});

module.exports = router;