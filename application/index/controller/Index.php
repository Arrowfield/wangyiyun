<?php
namespace app\index\controller;

use app\index\model\MusicLists;
use think\Controller;

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

      $this->assign('name','ThinkPHP');
      $this->assign('email','thinkphp@qq.com');


      return $this->fetch('/index/index');
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
}
//模块->控制器->操作