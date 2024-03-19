

let account;
const accountEl = document.getElementById('account');

const TOTAL_TICKETS = 10;
const EMPTY_ADDRESS =
  '0x0000000000000000000000000000000000000000';

const buyTicket = async (ticket) => {
  await contract.methods
    .buyTicket(ticket.id)
    .send({ from: account, value: ticket.price });
};


const ticketsEl = document.getElementById('case-data');
const refreshTickets = async () => {
  ticketsEl.innerHTML = '';
  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const ticket = await contract.methods.tickets(i).call();
    ticket.id = i;
    if (ticket.owner === EMPTY_ADDRESS) {
      const ticketEl = createElementFromString(
        ` <li class="case-display"> 
        <a href="src/pages/case-detail.html?id=${caseId}" class="container">
          <img src="${item.image}" alt="${item.name}" style="width:100%">
          <p>${item.name}</p>
          <hr style="width: 80%; margin: auto;">
          <div>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ${item.buy_price}</p>
            <p><button>Buy</button></p>
          </div>
        </a>
      </li>
    `
      );
      ticketEl.onclick = buyTicket.bind(null, ticket);
      ticketsEl.appendChild(ticketEl);
    }
  }
};

const main = async () => {
  const accounts = await web3.eth.requestAccounts();
  account = accounts[0];
  accountEl.innerText = account;
  await refreshTickets();
};

main();
