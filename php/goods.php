<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(0);

    $phone = $_GET["phone"];
    $img = $_GET["img"];
    $xinxi = $_GET["xinxi"];
    $guige = $_GET["guige"];
    $danjia = $_GET["danjia"];
    $shuliang = $_GET["shuliang"];

    $conn = mysql_connect("localhost","root","root");
    
    mysql_select_db("lining");
    
    $result = mysql_query("select * from cart where phone = '$phone' and img = '$img' ",$conn);

    //判断结果集的行数
    if(mysql_num_rows($result)>0){
        echo 1;
    }else {
        $res = mysql_query("insert into cart values ('$phone', '$img','$xinxi','$guige','$danjia','$shuliang')");
        echo 0;
    }
    mysql_close($conn);
?>