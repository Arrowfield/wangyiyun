<?php
$name = "fzp";
echo "我的第一段PHP脚本,my name is $name !";
#echo "这是我的变量:$name";
$a = <<<EOF
$name<br>是我的名字<br/>
"\n"
hello world
EOF;
echo $a."\n";
$cars = array("tom","jerry","lili");
var_dump($cars);
//echo "$cars";
?>

