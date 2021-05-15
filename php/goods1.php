<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(0);

    $img = $_GET["img"];
   
    $conn = mysql_connect("localhost","root","root");
    
    mysql_select_db("lining");
    
    $result = mysql_query("select * from goods where img = '$img'",$conn);

    $rows = mysql_fetch_assoc($result);
    
    echo $rows["img"]." ! ".$rows["xinxi"]." ! ".$rows["guige"]." ! ".$rows["danjia"];
    mysql_close($conn);
?>