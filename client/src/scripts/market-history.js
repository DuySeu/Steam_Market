window.web3 = new Web3(window.ethereum);
loadWeb3();

let historyEl;
let caseInstance;
let casesInfo = [];
async function loadCasesInfo() {
  const response = await fetch('http://localhost:8080/Steam_Market/client/src/api/case-api.php');
  casesInfo = await response.json();
  console.log(casesInfo);
}

async function loadWeb3() {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  console.log('Account: ', accounts[0]);
  historyEl = document.getElementById('case-data');

  $.getJSON(
    'http://localhost:8080/Steam_Market/build/contracts/CaseSale.json',
    async function (data) {
      const CaseArtifact = data;
      caseInstance = new web3.eth.Contract(CaseArtifact.abi, CaseArtifact.networks['5777'].address);
      displayTransactions();
    }
  );
}

async function displayTransactions() {
  await loadCasesInfo();
  const transactions = await caseInstance.methods.getTransactionHistory().call();

  // Clear the current list to display the new list
  historyEl.innerHTML = '';

  transactions.forEach((tx, index) => {
    const transactionEl = document.createElement('li');
    transactionEl.classList.add('case-display', 'container');

    const transactionDate = new Date(Number(tx.timestamp) * 1000);
    const day = transactionDate.getDate().toString().padStart(2, '0');
    const month = (transactionDate.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
    const year = transactionDate.getFullYear().toString().substr(0); // get last two digits
    const hours = transactionDate.getHours().toString().padStart(2, '0');
    const minutes = transactionDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    const newOwner = `${tx.buyer.substring(0, 6)}...${tx.buyer.substring(38)}`;
    const amountCC = web3.utils.fromWei(tx.amount, 'ether') * 10;

    // HTML structure of each transaction
    transactionEl.innerHTML = `
        <p>Transaction ${index + 1}</p>
        <p>Case ID: ${tx.caseId}</p>
        <hr style="width: 80%; margin: auto;">
        <div style="padding: 10px;">
          <p>Time: ${formattedDate}</p>
          <p>From: ${newOwner}</p>
          <p>Amount: ${amountCC}CC</p>
        </div>
      `;

    historyEl.appendChild(transactionEl);
  });
}
