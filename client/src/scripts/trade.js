if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' })
  .then(() => {
      // Gọi loadWeb3 và các hàm khác sau khi web3 đã được khởi tạo và tài khoản đã được truy cập thành công
      loadWeb3();
  })
  .catch((error) => {
      console.error("User denied account access", error);
  });
} else {
  console.log('Please install MetaMask!');
}

// Định nghĩa địa chỉ Ethereum rỗng
const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

let ticketsEl;
let friendinstance;
let casesInfo = [];

  async function loadCasesInfo() {
      const response = await fetch('db.json'); 
      const data = await response.json();
      casesInfo = data.cases;
  }

  async function loadWeb3() {
    const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  console.log("Account: ", accounts[0]);
      ticketsEl = document.getElementById('case-data'); 

      $.getJSON("http://localhost/Steam_Market/build/contracts/TicketSales.json", async function(data) {
          const FriendArtifact = data;
          friendinstance = new web3.eth.Contract(FriendArtifact.abi, FriendArtifact.networks['5777'].address);
          await refreshTickets(); // Cập nhật để sử dụng async
      });
  }

  async function refreshTickets() {
  await loadCasesInfo(); 
  ticketsEl.innerHTML = '';
  for (let i = 0; i < casesInfo.length; i++) {
      const ticket = await friendinstance.methods.tickets(i).call();
      
      // Kiểm tra nếu vé chưa được mua (owner là địa chỉ 0)
      if (ticket.owner === EMPTY_ADDRESS) {
          const c = casesInfo[i];
          const ticketEl = document.createElement('div');
          ticketEl.classList.add('case-card');
          ticketEl.innerHTML = `
              <div>
                  <h3>${c.name}</h3>
                  <img src="${c.image}" alt="${c.name}" style="width: 100px; height: 100px;">
                  <p>Quantity: ${c.quantity}</p>
                  <p>Buy Price: ${c.buy_price} CC</p>
                  <p>Sale Price: ${c.sale_price} CC</p>
                  <p>Container Series: ${c.container_series}</p>
                  <button onclick="buyTicket(${i}, '${c.buy_price}')">Buy Case</button>
              </div>
          `;
          ticketsEl.appendChild(ticketEl);
      }
  }
}


  async function buyTicket(ticketId, buyPriceCC) {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  // Giả sử 1 CC tương đương với 0.01 Ether, bạn cần xác định tỷ giá này
  const etherValue = parseFloat(buyPriceCC) * 0.01; // Chuyển CC sang Ether dựa trên tỷ giá của bạn
  const priceWei = web3.utils.toWei(etherValue.toString(), 'ether');

  try {
      await friendinstance.methods.buyTicket(ticketId).send({ from: account, value: priceWei });
      console.log(`Ticket ${ticketId} has been successfully purchased.`);
      await refreshTickets();
  } catch (error) {
      console.error(`Error purchasing ticket: ${error.message}`);
  }
}

  loadWeb3();