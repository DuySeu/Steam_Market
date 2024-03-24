<?php
$con = mysqli_connect("localhost", "root", "", "assignment");
$response = array();
if ($con) {
  $sql = "select * from cases";
  $result = mysqli_query($con, $sql);
  if ($result) {
    header("Content-Type: JSON");
    $i=0;
    while ($row = mysqli_fetch_assoc($result)) {
      $response[$i]['id'] = $row['id'];
      $response[$i]['name'] = $row['name'];
      $response[$i]['image'] = $row['image'];
      $response[$i]['buy_price'] = $row['buy_price'];
      $i++;
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
  }
}
else {
  echo "Database connection false";
}
