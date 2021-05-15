<?php
    header("Content-type:text/html;charset=utf-8");

    $img = $_REQUEST["img"];
    $phone = $_REQUEST["phone"];

    $conn = mysql_connect("localhost","root","root");
    
    mysql_select_db("lining");
    $result = mysql_query("delete  from cart where img = '$img' and phone ='$phone'",$conn);
    
    echo 1;
    mysql_close($conn);
?>