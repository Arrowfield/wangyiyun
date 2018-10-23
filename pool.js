/*基于mysql模块构建数据库池*/
const mysql=require('mysql');
const pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'wyy',
	connectionLimit:10
});
module.exports=pool;