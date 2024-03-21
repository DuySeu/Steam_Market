window.web3 = new Web3(window.ethereum);
loadWeb3();
const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
let casesEl;
let caseInstance;
let accounts;

async function loadCasesInfo() {
  const response = await fetch('http://localhost:8080/Steam_Market/client/db.json');
  const data = await response.json();
  casesInfo = data.cases;
  console.log(casesInfo);
}

async function loadWeb3() {
  const web3 = window.web3;
  accounts = await web3.eth.getAccounts();
  console.log('Account: ', accounts[0]);
  casesEl = document.getElementById('case-data');

  $.getJSON(
    ' http://localhost:8080/Steam_Market/build/contracts/CaseSale.json',
    async function (data) {
      const CaseArtifact = data;
      caseInstance = new web3.eth.Contract(CaseArtifact.abi, CaseArtifact.networks['5777'].address);
      // console.log(caseInstance);
      await refreshCases();
      // console.log(caseInstance);
    }
  );
}

async function refreshCases() {
  await loadCasesInfo();
  casesEl.innerHTML = ''; // Clear current list to refresh

  for (let i = 0; i < casesInfo.length; i++) {
    const caseItem = await caseInstance.methods.cases(i).call();
    // console.log(caseItem);

    if (caseItem.owner === EMPTY_ADDRESS) {
      const item = casesInfo[i];
      const caseEl = document.createElement('li');
      caseEl.className = 'case-display';
      caseEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100%">
      <p>${item.name}</p>
      <hr style="width: 80%; margin: auto;">
      <div>
        <p>Price: ${item.buy_price}</p>
        <button id="buyCase" onclick="checkAndBuyCase(${i}, '${item.buy_price}')">Buy Case</button>
      </div>
    `;
      casesEl.appendChild(caseEl);
    }
  }
}

async function checkAndBuyCase(caseId, buyPriceETH) {
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    await window.ethereum.enable();
  }
  await buyCase(caseId, buyPriceETH);
}

async function buyCase(caseId, buyPriceETH) {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  // console.log('Account: ', account[0]);

  const priceWei = web3.utils.toWei((parseFloat(buyPriceETH) * 0.01).toString(), 'ether');
  try {
    await caseInstance.methods
      .buyCase(caseId)
      .send({ from: account, value: priceWei, gas: 500000 });
    console.log(`Case ${caseId} has been successfully purchased.`);
    await refreshCases();
  } catch (error) {
    console.error(`Error purchasing case: ${error.message}`);
  }
}
