 /*========================================================= kewgreenhotel数据库*/

/*================================= 建立表空间及对应dba*/
 -- create user
 GRANT USAGE ON *.* TO 'kewgreenhotel'@'localhost' IDENTIFIED BY 'kewgreenhotel' WITH GRANT OPTION;
 -- create database
 CREATE DATABASE kewgreenhotel CHARACTER SET  utf8  COLLATE utf8_general_ci;
 -- grant user 权限1,权限2,select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限
 GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,LOCK TABLES ON kewgreenhotel.*  TO 'kewgreenhotel'@'localhost' IDENTIFIED BY 'kewgreenhotel';

 /*================================= 建立表、表主外键、多表关联等T-SQL*/
 -- 改变当前数据库
 USE kewgreenhotel;

/*
用户表
*/
create table user (
id INT NOT NULL auto_increment COMMENT 'ID标识',
name VARCHAR(128) NOT NULL COMMENT '姓名',
age VARCHAR(128) NOT NULL COMMENT '年龄',
phone CHAR(11) NOT NULL COMMENT '电话号码',
occupation VARCHAR(128) NOT NULL COMMENT '职业',
score INT(3) NOT NULL COMMENT '分数',
adate VARCHAR(19) NOT NULL COMMENT '提交信息时间',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

