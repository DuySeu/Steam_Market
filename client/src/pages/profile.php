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
      <a href="profile.php">PROFILE</a>
    </div>

    <!-- Main Navigation Bar -->
    <nav id="nav-bar">
      <a href="../../index.html" id="logo-link"><img src="../../public/logo_transparent.png" alt="Cr1pt0 Market logo" width="15%" id="header-logo" /></a>
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
            <h3>Username:
            </h3>
            <a href="" id="connectWalletButton">Connect Wallet</a>
            <p id="walletAddressDisplay" style="text-decoration: none;"></p>
          </div>
          <div class="user-wallet">
            <h3>
              <a href="exchange.html" class="profile-link">Wallet balance:</a>
              <p id="walletBalance">...CC</p>
            </h3>
          </div>
          <div class="user-wallet">
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
            <span>View Inventory</span>
          </button>
          <button onclick="displayText3()" href="" class="market-button">
            <span>Sell An Items</span>
          </button>
        </div>
        <div class="container">
          <ul id="my-active-listing" style="display: none">
          </ul>
          <ul id="market-history">
          </ul>
          <div id="sell-an-items" style="display: none">
            <div id="form-container">
              <form action="selloffer.php" method="post">

                <label for="caseid"><b>Container Series</b></label>
                <input type="text" name="caseid" class="sell-input" require />

                <label for="price"><b>Price</b></label>
                <input type="number" min="0" max="10000.0" step="0.1" require name="price" class="sell-input" />

                <div class="submit-form">
                  <a type="submit" class="sell-button">Create or update sell offer</a>
                </div>
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
      <a href="../../index.html" id="logo-link"><img src="../../public/logo_transparent.png" alt="Cr1pt0 Market logo" /></a>
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
<!-- Support JavaScript file -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web3/dist/web3.min.js"></script>
<!-- <script src="../scripts/market-history.js"></script> -->
<script src="../scripts/transition.js"></script>
<script src="../scripts/wallet-connection.js"></script>
<!-- <script src="../scripts/trade.js"></script> -->
<script>
  window.web3 = new Web3(window.ethereum);
  loadWeb3();
  let caseInstance;
  let accounts
  let casesOwned = document.getElementById('market-history');
  let casesSell = document.getElementById('my-active-listing');

  async function loadCasesInfo() {
    const response = await fetch('http://localhost:8080/Steam_Market/client/src/api/case-api.php');
    casesInfo = await response.json();
  }

  async function loadWeb3() {
    const web3 = window.web3;
    accounts = await web3.eth.getAccounts();
    console.log('Account: ', accounts[0]);

    $.getJSON('http://localhost:8080/Steam_Market/build/contracts/CaseSale.json', async function(data) {
      const CaseArtifact = data;
      caseInstance = new web3.eth.Contract(
        CaseArtifact.abi,
        CaseArtifact.networks['5777'].address
      );
      // console.log(caseInstance);
      await refreshCases();
    });
  }

  async function refreshCases() {
    await loadCasesInfo();
    casesOwned.innerHTML = ''; // Clear current list to refresh
    casesSell.innerHTML = ''; // Clear current list to refresh

    for (let i = 0; i < casesInfo.length; i++) {
      const caseItem = await caseInstance.methods.cases(i).call();
      // console.log(caseItem);

      const item = casesInfo[i];
      const caseEl = document.createElement('li');
      caseEl.className = 'case-display', 'container';
      if (caseItem.owner === accounts[0] && caseItem.isForSale === false) {
        caseEl.innerHTML = `
          <img src="../../${item.image}" alt="${item.name}" style="width:100%">
          <p style="color:white">${item.name}</p>
          <hr style="width: 80%; margin: auto;">
          <div>
            <p>Price: ${item.buy_price}CC</p>
            <button id="buyCase" onclick="sellCase(${i}, '${item.buy_price}')">Offer</button>
          </div>
        `;
        casesOwned.appendChild(caseEl);
      } else if (caseItem.owner === accounts[0] && caseItem.isForSale === true) {
        caseEl.innerHTML = `
          <img src="../../${item.image}" alt="${item.name}" style="width:100%">
          <p style="color:white">${item.name}</p>
          <hr style="width: 80%; margin: auto;">
          <div>
            <p>Price: ${item.buy_price}CC</p>
          </div>
        `;
        casesSell.appendChild(caseEl);
      }
    }
  }
  async function sellCase(caseId, buyPriceETH) {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log('Account: ', account[0]);

    // const priceWei = web3.utils.toWei((parseFloat(buyPriceETH) * 0.01).toString(), 'ether');
    try {
      await caseInstance.methods
        .offerCase(caseId)
        .send({
          from: account,
          gas: 500000
        });
      console.log(`Case ${caseId} has been successfully sell.`);
      await refreshCases();
    } catch (error) {
      console.error(`Error purchasing case: ${error.message}`);
    }
  }
</script>

</html>