# Host: localhost  (Version: 5.5.53)
# Date: 2021-05-15 12:58:42
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "cart"
#

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `phone` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `xinxi` varchar(255) DEFAULT NULL,
  `guige` varchar(255) DEFAULT NULL,
  `danjia` varchar(255) DEFAULT NULL,
  `shuliang` varchar(255) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "cart"
#

/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('18893810486','url(\"https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ABAR011-3/62154d0bf9a4fe7a34d532bd2b718b60b65ea4b017d333fc038d497f455e6fceb38624078f777ed3.jpg\")','【2021新品】音速IX 巴黎圣母院男子回弹中帮篮球专业比赛鞋ABAR011-6','40','100','1'),('13333333333','url(\"https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/AHSR333-1/f959447271f84e866711132fdd3a4db9b977e41702fb37a959dd4623550c3668b38624078f777ed3.jpg\")','星球大战联名系列男子短袖文化衫','40','190','1'),('18893810486','url(\"https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/AHSR617-1/10a4c0f5427c211a03b2858896486018e6ca5dbc654789979a5055b0747f09ff913794d2c03a8ab9.jpg\")','李宁CF牛掰男子宽松短袖文化衫','40','290','4'),('13333333333','url(\"https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ABAR011-3/62154d0bf9a4fe7a34d532bd2b718b60b65ea4b017d333fc038d497f455e6fceb38624078f777ed3.jpg\")','【2021新品】音速IX 巴黎圣母院男子回弹中帮篮球专业比赛鞋ABAR011-6','40','100','1');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `img` varchar(255) DEFAULT NULL,
  `xinxi` varchar(255) DEFAULT NULL,
  `guige` varchar(255) DEFAULT NULL,
  `danjia` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goods"
#

/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES ('https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ABAR011-3/62154d0bf9a4fe7a34d532bd2b718b60b65ea4b017d333fc038d497f455e6fceb38624078f777ed3.jpg','【2021新品】音速IX 巴黎圣母院男子回弹中帮篮球专业比赛鞋ABAR011-6','42','100'),('https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/AHSR333-1/f959447271f84e866711132fdd3a4db9b977e41702fb37a959dd4623550c3668b38624078f777ed3.jpg','星球大战联名系列男子短袖文化衫','42','190'),('https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/AHSR617-1/10a4c0f5427c211a03b2858896486018e6ca5dbc654789979a5055b0747f09ff913794d2c03a8ab9.jpg','李宁CF牛掰男子宽松短袖文化衫','42','290');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `phone` double DEFAULT NULL,
  `pwd` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (18893810486,'123456q'),(13344444444,'123456q'),(13333333333,'123456q'),(15022285555,'a123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
