// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CaseSale {
    struct Case {
        uint price;
        address owner;
    }

    struct Transaction {
    address buyer;
    uint256 caseId;
    uint256 timestamp;
    string transactionType; // "buy" or "sell"
    uint256 amount; //buy or sell price
    }
    Transaction[] public transactions;

    Case[10] public cases;
    address public owner;

    event Buy(address indexed buyer, uint indexed caseId);
    event Sell(address indexed buyer, uint indexed caseId);

    constructor() {
        owner = msg.sender;
        // Khởi tạo tất cả 10 vé với giá là 1 ETH
        for (uint i = 0; i < 10; i++) {
            cases[i].price = 0.01 ether;
            cases[i].owner = address(0x0);
        }
    }

    function buyCase(uint caseId) external payable {
        require(caseId >= 0 && caseId < 10, "Invalid Case ID");
        require(cases[caseId].owner == address(0x0), "Case already owned");
        require(msg.value >= cases[caseId].price, "Incorrect Ether sent");

        cases[caseId].owner = msg.sender;
        transactions.push(Transaction(msg.sender, caseId, block.timestamp, "buy", msg.value));
        emit Buy(msg.sender, caseId);
    }

    function sellCase(uint caseId) external {
        require(caseId >= 0 && caseId < 10, "Invalid Case ID");
        require(cases[caseId].owner == msg.sender, "Not the Case owner");

        cases[caseId].owner = address(0x0);
        payable(msg.sender).transfer(cases[caseId].price);
        transactions.push(Transaction(msg.sender, caseId, block.timestamp, "sell", cases[caseId].price));
        emit Sell(msg.sender, caseId);
    }

    // function getCaseInfo(uint caseId) external view returns (uint price, address owner) {
    //     require(caseId >= 0 && caseId < 10, "Invalid Case ID");
    //     return (cases[caseId].price, cases[caseId].owner);
    // }
    function getTransactionHistory() external view returns (Transaction[] memory) {
        return transactions;
    }
}
