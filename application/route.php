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


use think\Route;
//页面渲染
Route::get('api','api/Index/index');
Route::rule('new/:id','index/Index/list');
Route::rule('store/product','index/Index/store');
Route::rule('nmusician/web/index','index/Index/musician');
Route::rule('store/product/detail','index/Index/detail');
Route::rule('store/cart','index/Index/cart');
Route::rule('store/product/variouskind','index/Index/list');

//接口调用
Route::get('/api/user/login',"index/User/login");
Route::post('/api/user/github','index/User/githubLogin');

//store/product/detail?id=17994022
//store/product/variouskind?cid=101000&title=数码影音

return [
    '__pattern__' => [
        'name' => '\w+',
    ],
    '[hello]'     => [
        ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
        ':name' => ['index/hello', ['method' => 'post']],
    ],

];
