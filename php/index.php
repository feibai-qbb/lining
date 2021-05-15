<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(0);
    $conn = mysql_connect("localhost","root","root");
    mysql_select_db("lining");
    $result = mysql_query("select * from goods",$conn);

    //判断结果集的行数
    if(mysql_num_rows($result)>0){
        //将结果集放到数组$rows
        while($rows = mysql_fetch_assoc($result)){
            echo $rows["img"]." ! ".$rows["xinxi"]." ! ".$rows["guige"]." ! ".$rows["danjia"]." !  ";
        }
    }
    mysql_close($conn);
?>