SET NAMES UTF8;
DROP DATABASE IF EXISTS wyy;
CREATE DATABASE wyy CHARSET=UTF8;
USE wyy;

/**笔记本电脑型号家族**/
CREATE TABLE xz_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**笔记本电脑**/
CREATE TABLE xz_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  
  promise VARCHAR(64),        #服务承诺
  spec VARCHAR(64),           #规格/颜色
  lname VARCHAR(32),          #商品名称
  os VARCHAR(32),             #操作系统
  memory VARCHAR(32),         #内存容量
  
  resolution VARCHAR(32),     #分辨率
  video_card VARCHAR(32),     #显卡型号
  cpu VARCHAR(32),            #处理器
  video_memory VARCHAR(32),   #显存容量
  category VARCHAR(32),       #所属分类
  
  disk VARCHAR(32),           #硬盘容量及类型
  details VARCHAR(1024),      #产品详细说明
  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN           #是否促销中
);

/**笔记本电脑图片**/
CREATE TABLE xz_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #笔记本电脑编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/**用户信息**/
CREATE TABLE xz_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**收货地址信息**/
CREATE TABLE xz_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE xz_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE xz_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE xz_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页商品****/
CREATE TABLE xz_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

/**笔记本电脑型号家族**/
INSERT INTO xz_laptop_family VALUES
(NULL,'AppleMacBookAir'),
(NULL,'小米Air')
;

/**笔记本电脑**/
INSERT INTO xz_laptop VALUES
(1,1,'哆啦A梦系列金币指环支架','11月焕新季',45,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,null,'MacOS','8G',null,null,null,'其它','轻薄本','128G固态',null,150123456789,2968,true),
(2,1,'哆啦A梦航海大冒险数据线','5月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航',8268,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','双核i5/8GB内存/256GB闪存','AppleMacBook Air','MacOS','8G','1920*1080','集成显卡','Intel i5低功耗版','其它','轻薄本','256G固态',null,150223456789,1922,false),
(3,1,'哆啦A梦铃铛挂饰','i7处理器在此！依旧纤薄轻盈，续航持久，能胜任更多高强度工作，办公利器！',7488,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','定制款：双核i7/8G内存/128G闪存','AppleMacBook Air','MacOS','8G','1920*1080','集成显卡','Intel i7低功耗版','其它','轻薄本','128G固态',null,150323456789,733,false),
(4,1,'哆啦A梦自拍杆神器安卓卡通苹果','i7处理器在此！依旧纤薄轻盈，续航持久，能胜任更多高强度工作，办公利器！',7888,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','定制款：双核i7/8G内存/256G闪存','AppleMacBook Air','MacOS','8G','1920*1080','集成显卡','Intel i7低功耗版','其它','轻薄本','256G固态',null,150323456789,105,false),
(5,2,'网易云音乐手机壳 吉祥物-团子款（多多西西）','【i5 独立显卡】全高清窄边框 8G内存 256G固态硬盘 支持SSD硬盘扩容 薄至14.8mm 轻至1.28kg！AKG扬声器！',4999,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【13.3英寸】I5-6200U 8G 256G','小米Air','Windows 10','8G','全高清屏(1920*1080)','入门级游戏独立显卡','Intel i5低功耗版','1G','轻薄本','256G固态',null,154123456789,1527,true),

(6,2,'网易云音乐手机壳 吉祥物-团子款（多多西西）','【FHD窄边框】第七代处理器 128G SSD支持M.2接口SSD硬盘扩容 薄至12.9mm 轻至1.07kg！AKG扬声器！',3599,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【12.5银色】 M-7Y30 4G 128G','小米Air','Windows 10','4G','全高清屏(1920*1080)','集成显卡','Intel CoreM','其它','轻薄本','128G固态',null,153123456789,115,false),
(7,2,'网易云音乐手机壳 毛绒公仔多多西西','【FHD窄边框】第七代处理器 128G SSD支持M.2接口SSD硬盘扩容 薄至12.9mm 轻至1.07kg！AKG扬声器！',3599,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【12.5金色】 M-7Y30 4G 128G','小米Air','Windows 10','4G','全高清屏(1920*1080)','集成显卡','Intel CoreM','其它','轻薄本','128G固态',null,156123456789,812,true),
(8,3,'Beats EP 头戴式耳机 线控带麦运动耳机','【FHD窄边框】库存紧张 128G固态硬盘 支持M.2接口SSD硬盘扩容 薄至12.9mm 轻至1.07kg！',3499,' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','【12.5英寸】M-6Y30 4G 128G','小米Air','Windows 10','4G','全高清屏(1920*1080)','集成显卡','Intel CoreM','其它','轻薄本','128G固态',null,157123456789,1081,false),
(9,3,"第一卫H隐形蓝牙耳机",null,1200,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(10,3,"硕美科（SOMIC）G941 电竞游戏吃鸡耳机 降噪震动耳机",null,256,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),

(11,3,"爱国者（aigo） A690 圈铁HiFi耳机 重低音线控入耳式苹果手机电脑通用",null,65,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(12,3,"skullcandy Smokin Buds 2骷髅头入耳式重低音耳机塞线控男女通用",null,54,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(13,3,"爱国者（aigo） S18蓝牙耳机运动跑步头戴式无线双耳塞挂耳式耳机",null,99,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(14,3,"漫步者（EDIFIER）K800 高品质游戏耳机 电脑语音耳麦",null,110,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(15,3,"1MORE 活塞耳机风尚版入耳式耳塞式耳机",null,230,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),

(16,3,"Happy Plugs In-Ear 瑞典时尚色彩 入耳式耳机",null,356,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(17,3,"漫步者（EDIFIER）H840 高保真音乐头戴式耳机",null,101,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(18,3,"爱国者（aigo） A669耳机立体声入耳式运动通话 带麦线控 金属耳机大动圈",null,90,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(19,3,"漫步者（EDIFIER）H180P 立体声耳机 线控带麦手机耳塞",null,185,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(20,3,"铁三角 ATH-DSR7BT 无线蓝牙头戴式耳机",null,101,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),

(21,3,"QCY T1 pro蓝牙耳机迷你超小无线运动耳塞开车跑步入耳式双耳通用",null,563,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(22,3,"漫步者（EDIFIER） H297 高端旗舰入耳式耳机 运动耳塞挂耳式耳塞",null,602,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(23,3,"漫步者（EDIFIER）M5 MKIII 迷你便携户外蓝牙耳机",null,652,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
(24,3,"漫步者（EDIFIER）M300 无线蓝牙耳机便携音箱 插卡音响",null,350,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);

/**笔记本电脑图片**/
INSERT INTO xz_laptop_pic VALUES
(NULL, 1, null,'img/product/md/d1.jpg',null),
(NULL, 2, null,'img/product/md/d2.jpg',null),
(NULL, 3, null,'img/product/md/d3.jpg',null),
(NULL, 4, null,'img/product/md/d4.jpg',null),
(NULL, 5, null,'img/product/md/p1.jpg',null),

(NULL, 6, null,'img/product/md/p2.jpg',null),
(NULL, 7, null,'img/product/md/p3.jpg',null),
(NULL, 8, null,'img/product/md/e6.jpg',null),
(NULL, 9, null,'img/product/md/e7.jpg',null),
(NULL, 10, null,'img/product/md/e8.jpg',null),

(NULL, 11, null,'img/product/md/e4.jpg',null),
(NULL, 12, null,'img/product/md/e5.jpg',null),
(NULL, 13, null,'img/product/md/e9.jpg',null),
(NULL, 14, null,'img/product/md/e10.jpg',null),
(NULL, 15, null,'img/product/md/e11.jpg',null),

(NULL, 16, null,'img/product/md/e12.jpg',null),
(NULL, 17, null,'img/product/md/e13.jpg',null),
(NULL, 18, null,'img/product/md/e14.jpg',null),
(NULL, 19, null,'img/product/md/e15.jpg',null),
(NULL, 20, null,'img/product/md/e16.jpg',null),

(NULL, 21, null,'img/product/md/e17.jpg',null),
(NULL, 22, null,'img/product/md/e1.jpg',null),
(NULL, 23, null,'img/product/md/e2.jpg',null),
(NULL, 24, null,'img/product/md/e3.jpg',null);

/**用户信息**/
INSERT INTO xz_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1');

/**用户购物车信息**/
INSERT INTO xz_shoppingcart_item VALUES
(NULL,2,1,1,1),
(NULL,1,2,5,1),
(NULL,2,3,1,0),
(Null,1,4,3,0),
(NULL,1,1,6,1);
/*清空表的数据*/
DELETE FROM xz_shoppingcart_item;

