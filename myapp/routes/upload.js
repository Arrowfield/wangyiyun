var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
  res.render('upload',{title:"book"});
});
//pc端版本 3.0layer
router.post('/handlePhoto',(req,res)=>{
  console.log(req.body);
});

module.exports = router;