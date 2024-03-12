<?php
    $con = mysqli_connect("localhost","root");
    @mysqli_select_db($con,"assignment")
or die('Database not available');
?>