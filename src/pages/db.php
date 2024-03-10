<?php
   
    $con = mysqli_connect("localhost","root");
    @mysqli_select_db($con,"asignment")
or die('Database not available');
?>