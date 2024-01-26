<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata for character set and responsive design -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Stylesheets and favicon -->
    <link rel="stylesheet" href="../styles/interface_style.css" />
    <link rel="stylesheet" href="../styles/style.css" />
    <link rel="icon" href="../../public/logo_transparent.png" />

    <!-- Title of the page -->
    <title>Cr1pt0 Market Profile</title>
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
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="../../index.html" class="nav-links">STORE</a>
        <a href="about.html" class="nav-links">ABOUT</a>
        <a href="support.html" class="nav-links">SUPPORT</a>
        <a href="exchange.html" class="nav-links">EXCHANGE</a>
        <a href="profile.html" class="nav-links">PROFILE</a>
      </div>

      <!-- External JavaScript file for Side Navigation Bar functionality -->
      <script src="../scripts/navbar.js"></script>

      <!-- Main Navigation Bar -->
      <nav id="nav-bar">
        <a href="../../index.html" id="logo-link"
          ><img
            src="../../public/logo_transparent.png"
            alt="Group 1.7 logo"
            width="15%"
            id="header-logo"
        /></a>
        <ul id="menu">
          <li><a href="../../index.html" class="nav-links">Store</a></li>
          <li><a href="about.html" class="nav-links">About</a></li>
          <li><a href="support.html" class="nav-links">Support</a></li>
          <li><a href="exchange.html" class="nav-links">Exchange</a></li>
          <li><a href="profile.html" class="nav-links">Profile</a></li>
        </ul>
      </nav>
    </div>

    <div class="main-profile-bg">
      <div class="profile-bg">
        <div class="profile-header">
          <img src="../../public/logo.png" alt="user logo" width="15%" />
          <div class="user-info">
            <h2>Group 1.7</h2>
            <p>Ha Noi, Viet Nam</p>
          </div>
          <div class="user-wallet">
            <h2>
              <a href="exchange.html" class="profile-link">Wallet balance:</a>
              <p>0CC</p>
            </h2>
          </div>
          <div class="user-wallet">
            <h2>
              <a href="#" class="profile-link">View Inventory</a>
            </h2>
            <h2>
              <a href="#" class="profile-link">Edit profile</a>
            </h2>
          </div>
        </div>
        <hr />
        <div class="market-tab-container">
          <div style="background: #171a21">
            <button onclick="displayText1()" href="" class="marketBtn">
              <span>My Active Listings</span>
            </button>
            <button onclick="displayText2()" href="" class="marketBtn">
              <span>My Market History</span>
            </button>
            <button onclick="displayText3()" href="" class="marketBtn">
              <span>Sell An Items</span>
            </button>
          </div>
          <div class="container">
            <div id="my-active-listing">
              <h4>My sell listings (0)</h4>
              <p class="market-tab">
                You are not selling any items on the Community Market. Sell items from your
                inventory, or click the "Sell an item" button above.
              </p>
              <h4>My buy orders (0)</h4>
              <p class="market-tab">You do not have any buy orders.</p>
            </div>
            <div id="my-market-history" style="display: none">
            <?php
              $name = array("Dreams & Nightmares Case",
                            "Fracture Case" );
              $date = array("25 Jan",
                            "27 Jan");
              $buyer = array("摄魂天狼",
                            "Двухсотый Opera");              
              $price = array("1.697CC",
                              "1.178CC");   
              $img = array("/Steam_Market/src/assets/images/case/case1.png",
                          "/Steam_Market/src/assets/images/case/case2.png"); 
              $length = count($name);
              

              if($name == null) {  ?>
               <p class = "history-note">You don't have any history on the Community Market.</p>
              <?php }  
              else {?>
               
                
                 <div class="history-head-container">
                  <img src="src/assets/images/case/case2.png" alt="">
            <div class="history-head"  style="width:40% !important; text-align: left !important;">NAME</div>
            <div class="history-head" >ACTED ON</div>
            <div class="history-head" >WITH</div>
            <div class="history-head" >PRICE</div>
            </div>
            <div class="clear"></div>
            <?php
            $i=0;
                while($i < $length) {
                  ?>
                
                <div class="history-deal">
                
                <div class="history-body" style=" width:40% !important  ; text-align: left !important;">
                <img class="history-img" src="<?php echo $img[$i]?>" alt="">
                <p style="font-size:9px;"><?php echo $name[$i]?></p></div>
                <div  class="history-body"><?php echo $date[$i]?></div>
                <div  class="history-body"><?php echo $buyer[$i]?></div>
                <div  class="history-body"><?php echo $price[$i]?></div>
              
              
                </div>
                <div class="clear"></div>

             <?php
              $i++;
             };
            };
            ?>

          
          
            </div>
            <div id="sellAnItems" style="display: none">
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <div id="footer">
      <div class="logo">
        <a href="../../index.html" id="logo-link"
          ><img src="../../public/logo_transparent.png" alt="Group logo"
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
          <a href="src/cr1pt0market.org">Cr1pt0market.org</a>.
        </p>

        <!-- Navigation links for privacy policy, legal, subscriber agreement, and cookies -->
        <nav>
          <ul>
            <li><a href="src/privacy_agreement.html">Privacy Policy</a></li>
            <li><a href="src/legal.html">Legal</a></li>
            <li><a href="src/subscriber_agreement.html">Cr1pt0 Market Subscriber Agreement</a></li>
            <li><a href="src/cookie_preferences.html">Cookies</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Support JavaScript file -->
    <script src="../scripts/case-api.js"></script>
  </body>
</html>