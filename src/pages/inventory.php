<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>My inventory</h1>
    <?php

require('db.php');

session_start();

$username = $_SESSION['username'];
$sql = "SELECT `id`, `name`FROM `case` WHERE owner='$username'";
$queryResult = mysqli_query($con, $sql);
echo "<table width='100%'>";
echo "<tr><th>Case id</th><th>Type</th>
</tr>";
$row = mysqli_fetch_row($queryResult);
while ($row) {
echo "<tr><td>{$row[0]}</td>";
echo "<td>{$row[1]}</td>";


$row = mysqli_fetch_row($queryResult);
}
echo "</table>";
mysqli_free_result($queryResult);
mysqli_close($con);

    ?>
</body>
</html>