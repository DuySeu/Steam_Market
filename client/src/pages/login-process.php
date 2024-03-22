<?php
 require('db.php');

 $err ="";
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
            $err = "
                  <h4 style='color:red'>Incorrect Username/password.</h4>
                    ";
        }


        mysqli_close($con);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata for character set and responsive design -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Stylesheets and favicon -->
    <link rel="stylesheet" href="../styles/interface-style.css" />
    <link rel="stylesheet" href="../styles/subpages.css" />
    <link rel="stylesheet" href="../styles/subpages-responsive.css" />
    <link rel="icon" href="../../public/logo_transparent.png" />

    <!-- Title of the page -->
    <title>Cr1pt0 Market Login</title>
  </head>

  <body>
  
    <!-- Header Section -->
    <div id="header">
      <!-- Toggleable menu icon -->
      <div id="togglable-menu">
        <input type="checkbox" id="toggle" />
        <label for="toggle" id="toggle-button" onclick="openNav()">&#9776;</label>
      </div>

      <!-- Side Navigation Bar -->
      <div id="side-nav">
        <a href="javascript:void(0)" id="close-button" onclick="closeNav()">&times;</a>
        <a href="../../index.html">STORE</a>
        <a href="about.html">ABOUT</a>
        <a href="support.html">SUPPORT</a>
        <a href="exchange.html">EXCHANGE</a>
        <a href="register.html">RESGISTER</a>
      </div>

      <!-- Main Navigation Bar -->
      <nav id="nav-bar">
        <a href="../../index.html" id="logo-link"
          ><img
            src="../../public/logo_transparent.png"
            alt="Cr1pt0 Market logo"
            width="15%"
            id="header-logo"
        /></a>
        <ul id="menu">
          <li><a href="../../index.html" class="main-nav-links">Store</a></li>
          <li><a href="about.html" class="main-nav-links">About</a></li>
          <li><a href="support.html" class="main-nav-links">Support</a></li>
          <li><a href="exchange.html" class="main-nav-links">Exchange</a></li>
          <li><a href="register.html" class="main-nav-links">Register</a></li>
        </ul>
      </nav>
    </div>

    <!-- Body Section -->
    <div id="login-section">
      <h1 id="login-h1">Log in</h1>

      <!-- Login form -->
      <form action="login-process.php" method="post" id="loginnresgiter-form">
        <div id="form-container">
          <label for="uname" id="uname-label"><b>LOG IN WITH ACCOUNT NAME</b></label>
          <input
            type="text"
            name="uname"
            pattern="[A-Za-z0-9]{1,30}"
            class="login-input"
            required
          />

          <label for="psw" class="pwd-and-remember-label">Password</label>
          <input
            type="password"
            name="psw"
            
            class="login-input"
            required
          />

          <!-- Remember me checkbox -->
          <label class="pwd-and-remember-label">
            <input
              type="checkbox"
              name="remember"
              id="remember-box"
              class="pwd-and-remember-label"
            />
            Remember me
          </label>

          <?php echo $err; ?>

          <!-- Buttons for login and forgot password -->
          <div id="btn-container">
            <button type="submit" class="login-and-forget-pwd">Login</button>
            <a href="profile.html" class="login-and-forget-pwd">Forgot Password?</a>
          </div>

          <!-- Link to register if not registered -->
          <p id="register-or-login-link"><a href="register.html">New here? Register now!</a></p>
        </div>
      </form>
    </div>

    <!-- Footer Section -->
    <div id="footer">
      <div id="logo">
        <a href="../../index.html" id="logo-link"
          ><img src="../../public/logo_transparent.png" alt="Cr1pt0 Market logo"
        /></a>
      </div>

      <!-- Copyright and additional information -->
      <div>
        <p>
          &copy; Cr1pt0 Market. All rights reserved. All trademarks are property of their respective
          owners in Vietnam and other countries.
        </p>
        <p>
          Some geospatial data on this website is provided by
          <a href="../../index.html">Cr1pt0market.org</a>.
        </p>

        <!-- Navigation links for privacy policy, legal, subscriber agreement, and cookies -->
        <nav>
          <ul>
            <li><a href="src/pages/support.html">Privacy Policy</a></li>
            <li><a href="src/pages/support.html">Legal</a></li>
            <li><a href="src/pages/support.html">Cr1pt0 Market Subscriber Agreement</a></li>
            <li><a href="src/pages/about.html">Cookies</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </body>
  <!-- External JavaScript file for Side Navigation Bar functionality -->
  <script src="../scripts/transition.js"></script>
</html>

