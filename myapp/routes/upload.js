var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var path = require('path');

router.get('/', (req, res) => {
  res.render('upload', {title: "book"});
});
//pc端版本 3.0layer
router.post('/handlePhoto', (req, res) => {
  //路径
  var form = new multiparty.Form();
  form.encoding = "utf-8";
  var url = __dirname.substring(0, __dirname.length - 6);
  url = form.uploadDir = url + "public/storage/images";
  //执行
  form.parse(req, function (err, fields, files) {
    var msg = {};
    if (err) {
      throw err;
      res.send({code:201,msg:"上传失败"});
      return;
    }
    var path = files.files[0].path;
    var i = path.indexOf("storage");
    path = path.substr(i).replace(/\\/g,"/");
    msg.img = path;
    msg.info = '上传成功';
    msg.len = files.length;
    res.send({code:200,msg});
  });
});

module.exports = router;