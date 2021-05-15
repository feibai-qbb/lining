<?php
    header("Content-type:text/html;charset=utf-8");

    $phone = $_REQUEST["phone"];
    $pwd = $_REQUEST["pwd"];

    $conn = mysql_connect("localhost","root","root");
    
    mysql_select_db("lining");
    $result = mysql_query("select * from user where phone = '$phone' and pwd = '$pwd'",$conn);
    $row = mysql_num_rows($result);
    
    if($row == 1){
        echo 1;
    }else{
        echo $row;
    }
    mysql_close($conn);
?>