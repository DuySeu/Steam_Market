<?php
 require('db.php');
 session_start();
 $username = $_POST['uname'];    // removes backslashes
        $username = mysqli_real_escape_string($con, $username);
        $password = $_POST['psw'];
        $password = mysqli_real_escape_string($con, $password);
        $query    = "SELECT * FROM `login` WHERE username='$username'
                     AND password='$password' ";
        $result = mysqli_query($con, $query) ;
        $rows = mysqli_num_rows($result);
        if ($rows == 1) {
            $_SESSION['username'] = $username;
            header("Location: profile.php");
        } else {
            echo "<div class='form'>
                  <h3>Incorrect Username/password.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                  </div>";
        }
        mysqli_close($con);
?>