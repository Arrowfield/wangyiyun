/*基于mysql模块构建数据库池*/
const mysql=require('mysql');
const pool=mysql.createPool({
	host:'ltuizoczyjpu.mysql.sae.sina.com.cn',
	port:'10062',
	user:'root',
	password:'',
	database:'wyy',
	connectionLimit:10
});
module.exports=pool;