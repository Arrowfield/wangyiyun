<pre>
一、项目的基本常识
    (1)全局目录的获取：npm config get prefix
    (2)服务器的类别：1、phonegap；2、php；3、node；4、ngoke；5、local；
    (3)功能实现：播放歌曲，生成进度条；三个事件：mousedown/mousemove/mouseup
    (4)文件目前的大小：58.1M
    (5)更新：2018/10/27 08:56:00
    
二、项目的基本流程
    (1)完成首页的静态页面
    (2)完成用户的注册登录功能

三、项目目录结构介绍
    3.1 .vscode-->vscode软件的配置文件：基本配置有Scss的存储路径和tab的缩进这两项
    3.2 node_modules-->第三的模块依赖，必须导入依赖程序才可以运行
    3.3 pic-->项目的模板图片，可以看上面的图片进行开发
    3.4 router-->路由器文件夹，存储相应的路由模块（user，pro）
    3.5 static-->静态资源文件夹，有了该文件就不属于前后端分离，该文件夹需要托管到服务器的主程序中进行访问
    3.6 main.js-->主程序的入口文件
    3.7 pool.js-->数据库的连接池模块，其中包含数据库的基本配置
    3.8 wyy.sql-->数据库的脚本文件

四、项目当前运行流程
    （1）前端静态页面的展示：static/index.html
    （2）后台数据获取的接口：router/pro.
    （3）项目启动：cmd->node main->http:127.0.0.1:3000
    （4）备注：前端静态资源运行的IP：http://127.0.0.1:3000；前端获取数据的IP：http://127.0.0.1:3000；因此属于非跨域， 即非前后端分离（在新浪云运行时服务器的端口号修改为5050）
    （5）可以将该项目称为服务端

五、项目打包部署流程
	（1）https://github.com/Arrowfield
  （2）常用的GIT指令：
        git init;
        git add .;
        git commit -m "update";
        git push;
        git pull;git remote add 远程仓库地址;
        git remote remove 远程仓库地址;
        git status;
        git config user.name;
        git config user.email;git remote -v;
        git rm -r --cached node_modules/;
        git push -f origin master

六、项目打包部署流程（前端开发流程）
    （1）前端：静态页面（html）+样式文件（css）+业务逻辑处理（js）+静态资源（img）
    （2）后台：接口编写（node）+数据库文件（sql）
    （3）打包：资源打包（webpack）
    （4）上线：线上域名（ase）+线上代码管理（github）+线上数据库（mysql）+线上存储（storage）
    （5）运维：网站维护（web2.0）+网站优化（cdn）
    （6）前端+后端：分离
七、前端：
    （1）静态资源文件 
        -html:index.html/login.html
        -css:base.css/index.css/login.css/
        -js:jquery.js/index.js
        -font:font0.ttf
        -plugin:carousel
        -media:t.mp3
        -request:ajax
        -img:index/detail
        -sass:index.scss/login.scss
    （2）动态资源文件
        -pool.js
        -wyy.sql
        -router
          -pro.js
          -user.js
        -main.js
</pre>

  
	
	
	
