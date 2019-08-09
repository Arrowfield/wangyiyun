<?php
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{
    public function index(){
      //return 'hello thinkphp5';
      //return $this->fetch('/index');
      echo 132;
      $this->assign('name','ThinkPHP');
      $this->assign('email','thinkphp@qq.com');

      return $this->fetch('/index');

      
    }
    public function hhh(){
      //return 'hello thinkphp5';
      //return $this->fetch('/index');
      echo 123;
      $this->assign('name','ThinkPHP');
      $this->assign('email','thinkphp@qq.com');
      
      return $this->fetch('/home');

      
    }

    
}
