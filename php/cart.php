<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(0);

    $phone = $_GET["phone"];

    $conn = mysql_connect("localhost","root","root");
    
    mysql_select_db("lining");
    $result = mysql_query("select * from cart where phone = '$phone'",$conn);

    //判断结果集的行数
    if(mysql_num_rows($result)>0){
        //将结果集放到数组$rows
        while($rows = mysql_fetch_assoc($result)){
            echo $rows["Id"]." ! ".$rows["phone"]." ! ".$rows["img"]." ! ".$rows["xinxi"]." ! ".$rows["guige"]." ! ".$rows["danjia"]." ! ".$rows["shuliang"]." !  ";
        }
    }
    mysql_close($conn);
?>