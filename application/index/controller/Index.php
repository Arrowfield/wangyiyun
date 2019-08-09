<?php
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{
    public function index(){
      //return 'hello thinkphp5';
      //return $this->fetch('/index');
      $this->assign('name','ThinkPHP');
      $this->assign('email','thinkphp@qq.com');
      return $this->fetch('/index/index');
    }
    public function home(){

      $this->assign('name','ThinkPHP');
      $this->assign('email','thinkphp@qq.com');
      
      return $this->fetch('/index/home');
    }
}
//模块->控制器->操作