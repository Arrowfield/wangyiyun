<?php
namespace app\index\controller;
use think\Controller;
use think\Request;
use app\index\model\User as UserModel;

class User extends Controller{
  
  protected $user ;

  function __construct() {
    //$this->$user = UserModel::instance();
  }

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

    //dump(UserModel);
    $user = UserModel::get(['phone'=>$phone,'upwd'=>$upwd]);
    
    //echo $request->host();
    return redirect('/index/index/index')->with('userInfo',$user);
    //echo $upwd.$phone;
    //$data = ['name' => 'thinkphp','status' => '1'];
    //return json($data);//输出json;
  }
}