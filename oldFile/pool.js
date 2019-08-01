/*基于mysql模块构建数据库池*/

const mysql=require('mysql');
const pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'wyy',
	connectionLimit:10
});
module.exports=pool;


//数据库不存在【Handshake inactivity timeout】



















