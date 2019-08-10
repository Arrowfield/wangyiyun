<?php
namespace app\index\controller;
use app\index\model\MusicLists as MusicListsModel;
use think\Controller;
class MusicLists extends Controller {
    public function add(){
        $music = new MusicListsModel();
        //dump($music);
        $music->music_title = "留在你身边";
        $music->music_weight = 8;
        if($music->save()){
            return "新增歌曲成功";
        }else{
             return "新增歌曲失败";
        }
    }
}

//http://www.mydemo.com/index.php/index/music_lists/add