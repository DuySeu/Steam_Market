<?php
require('db.php');
        $username =$_POST['username'];
        $username = mysqli_real_escape_string($con, $username);
        $email    = $_POST['email'];
        $email    = mysqli_real_escape_string($con, $email);
        $password = $_POST['password'];
        $password = mysqli_real_escape_string($con, $password);
        $query    = "INSERT into `users` (username, password, email)
                     VALUES ('$username', '$password', '$email')";
        $result   = mysqli_query($con, $query);
        if ($result) {
            echo "<div class='form'>
                  <h3>You are registered successfully.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                  <h3>Required fields are missing.</h3><br/>
                  <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>
                  </div>";
        }
    ?>