<?php
namespace app\index\controller;
use think\Controller;
//[控制器 返回数据 C]
class Index extends Controller
{
    public function index()
    {   //渲染视图
        return view();
    }
    //可以设置默认值
    public function hello($name)
    {
        return 'hello,' .  $name;
    }
    public function json($data){
        return json($data);
    }
    public function read(){
        //return view();
    }
}
