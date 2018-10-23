/*基于express构建服务器*/
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const pro = require('./router/pro');
var   app = express();
app.listen(3000);
app.use(session({
  secret:"my_session",
  resave:false,
  saveUninitialized:true
}));
//解决跨域问题
app.use(cors({
  origin:['http://localhost:3000'],
  credentials:true
}));
//托管静态资源
app.use(express.static('./static'));
//设置body-parser参数
app.use(bodyParser.urlencoded({extended:false}));
//挂载路由[使用路由器来管理路由]
app.use('/pro',pro);
