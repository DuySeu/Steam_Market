<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata for character set and responsive design -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Stylesheets and favicon -->
    <link rel="stylesheet" href="../styles/interface-style.css" />
    <link rel="stylesheet" href="../styles/style.css" />
    <link rel="stylesheet" href="../styles/subpages-responsive.css" />
    <link rel="icon" href="../../public/logo_transparent.png" />

    <!-- Title of the page -->
    <title>Cr1pt0 Market Profile</title>
  </head>

  <body>
    <?php
    include("session.php");
    ?>
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
        <a href="profile.html">PROFILE</a>
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
          <li><a href="profile.html" class="main-nav-links">Profile</a></li>
        </ul>
      </nav>
    </div>

    <div class="main-profile-bg">
      <div class="profile-bg">
        <div class="profile-header">
          <img src="../../public/logo.png" alt="user logo" class="user-ava" />
          <div class="user-info">
            <div class="user-wallet">
              <h3>Group 1.7</h3>
              <p>Username: <?php $username = $_SESSION['username'];
                                  echo $username;
            ?></p>
            </div>
            <div class="user-wallet">
              <h3>
                <a href="exchange.html" class="profile-link">Wallet balance:</a>
                <p>0CC</p>
              </h3>
            </div>
            <div class="user-wallet">
              <h3>
                <a href="inventory.php" class="profile-link">View Inventory</a>
              </h3>
                <a href="#" class="profile-link">Edit profile</a>
              </h3>
              <h3>
                <a href="logout.php" class="profile-link">Log out</a>
              </h3>
            </div>
          </div>
        </div>
        <hr />
        <div class="market-tab-container">
          <div style="background: #171a21">
            <button onclick="displayText1()" href="" class="market-button">
              <span>My Selling Listings</span>
            </button>
            <button onclick="displayText2()" href="" class="market-button">
              <span>My Market History</span>
            </button>
            <button onclick="displayText3()" href="" class="market-button">
              <span>Sell An Items</span>
            </button>
          </div>
          <div class="container" >
            <div id="my-active-listing">
             
              
                <?php
                require("db.php");
                $sql = "SELECT `caseid`, `price`FROM `offer` WHERE seller='$username' and buyer IS NULL";
                $queryResult = mysqli_query($con, $sql);
                echo "<table class='market-tab'>";
                echo "<tr><th>Case id</th><th>Price</th></tr>";
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
            
              
            </div>
            <div id="market-history" style="display: none">
              <table style="width: 100%">
                <tr id="my-history">
                  <th class="history-head">NAME</th>
                  <th class="history-head">ACTED ON</th>
                  <th class="history-head">WITH</th>
                  <th class="history-head">PRICE</th>
                </tr>
              </table>
            </div>
            <div id="sell-an-items" style="display: none">
              
                <div id="form-container">
                  <form action="selloffer.php" method="post">

                  <label for="caseid"><b>Container Series</b></label>
                  <input type="text" name="caseid" class="sell-input" require />

                  <label for="price"><b>Price</b></label>
                  <input type="number" min="0" max="10000.0" step="0.1" require name="price" class="sell-input" />

                  <div class="submit-form">
                    <button type="submit"  class="sell-button">Create or update sell offer</a>
                    
              </form>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
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

    <!-- Support JavaScript file -->
    <script src="../scripts/market-history.js"></script>
    <script src="../scripts/transition.js"></script>
  </body>
</html>
