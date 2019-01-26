<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

//设置管理员权限

Route::group("admin",function(){
   Route::rule('/','admin/index/login'.'get'); 
});

Route::get('think', function () {
    return 'hello,world';
});

Route::get('hello/:name', 'index/hello');

Route::rule('new/:id','index/News/read','POST');

return [];
