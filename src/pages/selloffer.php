<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
 require('db.php');
 session_start();
$caseid = $_POST["caseid"];
$price = $_POST["price"];
$seller = $_SESSION['username'];
$query = "SELECT * FROM asignment.offer Where caseid ='$caseid'AND seller = '$seller'";
$result = mysqli_query($con, $query) ;
$rows = mysqli_num_rows($result);
if($rows == 0){
$query = "SELECT * FROM asignment.case Where id ='$caseid'AND owner = '$seller'";
$result = mysqli_query($con, $query) ;
$rows = mysqli_num_rows($result);
if($rows == 1){
    $query    = "INSERT into `offer` (caseid, price, seller)
                     VALUES ('$caseid', '$price', '$seller')";
        $result   = mysqli_query($con, $query);
        echo"Offer create successfuly.";
}
else{
    echo"You do not own the case";
}
}
else{
    echo"Offer has been made already";
}
?>
</body>
</html>
