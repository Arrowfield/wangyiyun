<?php
namespace app\index\controller;
use think\Controller;
//[控制器 返回数据 C]
class Login extends Controller
{
    public function login(){
        //加载登录模板
        return view();
    }
    public function create(){
        return 1;
    }
    public function checkUser(){

    }
}

