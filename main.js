<<<<<<< HEAD
/*基于express构建服务器*/
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const pro = require('./router/pro');
const user = require('./router/user');
var app = express();

//sesseion
app.use(session({
  secret: "mySession",
  resave: false,
  saveUninitialized: true
}));
//解决跨域问题
app.use(cors({
  origin: ['http://127.0.0.1:3000','http://176.137.16.237:3000'],
  credentials: true
}));
//托管静态资源
app.use(express.static('./static'));
//设置body-parser参数
app.use(bodyParser.urlencoded({
  extended: false
}));
//挂载路由[使用路由器来管理路由]
app.use('/pro', pro);
app.use('/user', user);

app.listen(3000);
=======
/*基于express构建服务器*/
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const pro = require('./router/pro');
const user = require('./router/user');
var app = express();

//sesseion
app.use(session({
  secret: "mySession",
  resave: false,
  saveUninitialized: true
}));
//解决跨域问题
app.use(cors({
  origin: ['http://127.0.0.1:3000','http://176.137.16.237:3000'],
  credentials: true
}));
//托管静态资源
app.use(express.static('./static'));
//设置body-parser参数
app.use(bodyParser.urlencoded({
  extended: false
}));
//挂载路由[使用路由器来管理路由]
app.use('/pro', pro);
app.use('/user', user);

app.listen(3005);
>>>>>>> 1687aa6862b0038631593cfa6181d8664a6d903c
