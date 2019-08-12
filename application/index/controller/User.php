<?php
namespace app\index\controller;
use think\Controller;

class User extends Controller{
  
  public function index(){
    return "login sucess";
  }
  public function login(){
    $obj =  "{msg:'hangle success';,code:200}";
    //return $obj;
  }
}