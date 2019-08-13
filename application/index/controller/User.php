<?php
namespace app\index\controller;
use think\Controller;
use think\Request;
class User extends Controller{
  
  public function index(){
    return "login sucess";
  }
  public function login(){
    //return $obj;
  }
  public function githubLogin(){
    //获取请求参数
    $request = Request::instance();
    
    $phone = $request->param()['phone'];
    $upwd = $request->param()['upwd'];

    echo $request->host();
    //return redirect('http://www.field.com');
    //echo $upwd.$phone;
    //$data = ['name' => 'thinkphp','status' => '1'];
    //return json($data);//输出json
  }
}