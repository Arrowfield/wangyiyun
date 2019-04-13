const basePath = "http://jsonplaceholder.typicode.com";
const urlList = {
  homeInfo:basePath + "/users",
	login:basePath + "/login",
};

//module.exports = urlList;
export default urlList;

//如果一个页面中存在多个对象就使用export
//如果一个页面中仅存在一个对象就使用export default
