<?php
namespace app\index\controller;

use app\index\model\MusicLists;
use think\Controller;
use think\Request;
use think\Db;

define('_CDN_','../application/index/');

//use think\Db;
class Index  extends Controller
{
    public function index(){
      /** 
       * 首页的数据：
       * 热门推荐
       * 个性化推荐
       * 入驻歌手
       * 新碟上架
       * 榜单
       * 热门主播
      */
      /** 
       * 操作数据库
      */
      //$data = Db::connect()->table('wy_music_l ists').find()
      //$music = MusicLists::get(1);
      //echo $music;
      //$music = $db::get(1);
      //echo $music;

      //$this->assign('name','ThinkPHP');
      //$this->assign('email','thinkphp@qq.com');

      //$request =  Request::instance();
      //dump($request);
      //echo $request->method().'<br />';
      //echo $request->param('name');
      return $this->fetch('/index/index');
      //dump(input(''));
    }
    public function db(){
      //插入数据
      //$result = Db::execute(' insert into wy_music_lists (music_title,music_weight) values ("ceshi",10) ');
      
      //dump($result);
      $res = Db::table('wy_music_lists')->insert(['music_title'=>'夜曲','music_weight'=>8]);
      //return "123";
    }
    public function home(){

      $this->assign('name','ThinkPHP');
      $this->assign('email','thinkphp@qq.com');
      
      return $this->fetch('/index/home');
    }
    public function course(){
      //echo \think\facade\App::version();
      //return "hello world"
    }
    public function list(){
      return "这是我自己定义的路由规则";
    }
    public function store(){
      return $this->fetch('index/store');
      
    }
}
//模块->控制器->操作