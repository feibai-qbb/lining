<?php
    header("Content-type:text/html;charset=utf-8");

    $phone = $_REQUEST["phone"];
    $pwd = $_REQUEST["pwd"];

    $conn = mysql_connect("localhost","root","root");
    
    mysql_select_db("lining");
    $res = mysql_query("select * from user where phone = '$phone'",$conn);
    $row = mysql_num_rows($res);
    if($row == 0){
        $result = mysql_query("insert into user values('$phone','$pwd')",$conn);
        echo $result;
    }else{
        echo 2;
    }
    mysql_close($conn);
?>
