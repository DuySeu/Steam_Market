// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketSales {
    address public owner;
    uint256 public constant TOTAL_TICKETS = 10;
    mapping(uint256 => Ticket) public tickets;
    mapping(address => uint256[]) public customerTickets;

    struct Ticket {
        uint256 price;
        address owner;
    }

    struct Transaction {
        address buyer;
        uint256 ticketId;
        uint256 timestamp;
        string transactionType; // "buy" or "return"
    }

    Transaction[] public transactions;

    event TicketPurchased(address buyer, uint256 ticketId);
    event TicketReturned(address buyer, uint256 ticketId);

    constructor() {
        owner = msg.sender;
        // Initialize each ticket with a different price
        for (uint256 i = 0; i < TOTAL_TICKETS; i++) {
            tickets[i] = Ticket((i + 1) * 0.01 ether, address(0));
        }
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action.");
        _;
    }

    function buyTicket(uint256 ticketId) external payable {
        require(ticketId < TOTAL_TICKETS, "Invalid ticket ID.");
        Ticket storage ticket = tickets[ticketId];
        require(ticket.owner == address(0), "Ticket already sold.");
        require(msg.value >= ticket.price, "Insufficient Ether sent.");

        ticket.owner = msg.sender;
        customerTickets[msg.sender].push(ticketId);

        transactions.push(Transaction(msg.sender, ticketId, block.timestamp, "buy"));

        emit TicketPurchased(msg.sender, ticketId);
    }

    function returnTicket(uint256 ticketId) external {
        require(ticketId < TOTAL_TICKETS, "Invalid ticket ID.");
        require(tickets[ticketId].owner == msg.sender, "You do not own this ticket.");

        tickets[ticketId].owner = address(0);
        removeTicketFromCustomer(msg.sender, ticketId);

        payable(msg.sender).transfer(tickets[ticketId].price);

        transactions.push(Transaction(msg.sender, ticketId, block.timestamp, "return"));

        emit TicketReturned(msg.sender, ticketId);
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }

    function removeTicketFromCustomer(address customer, uint256 ticketId) private {
        uint256[] storage ownedTickets = customerTickets[customer];
        for (uint256 i = 0; i < ownedTickets.length; i++) {
            if (ownedTickets[i] == ticketId) {
                ownedTickets[i] = ownedTickets[ownedTickets.length - 1];
                ownedTickets.pop();
                break;
            }
        }
    }
}