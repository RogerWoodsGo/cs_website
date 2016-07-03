CREATE DATABASE spiderdb DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE TABLE `36kr` (

        `linkmd5id` char(32) NOT NULL COMMENT 'url md5编码id',
        `title` text COMMENT '标题',
        `description` text COMMENT '描述',
        `link` text  COMMENT 'url链接',
        `listUrl` text  COMMENT '分页url链接',
        `updated` datetime DEFAULT NULL  COMMENT '最后更新时间',
        PRIMARY KEY (`linkmd5id`)
        ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

create table 36kr
(
 id int unsigned not null auto_increment primary key,
 hash_title char(64),
 description_text text,
 news_url text,
 created_at datetime DEFAULT NULL,
 is_top boolean default false,
 column_id int,
 news_url_type text DEFAULT ‘原文链接’
 )ENGINE=MyISAM DEFAULT CHARSET=utf8;
;

create table cyb 
(   
 id int unsigned not null auto_increment primary key,
 hash_title char(64),
 description_text text,
 news_url text,
 created_at datetime DEFAULT NULL,
 is_top boolean default false,
 column_id int,
 news_url_type text 
 )ENGINE=MyISAM DEFAULT CHARSET=utf8;
;
