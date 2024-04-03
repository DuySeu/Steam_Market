// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Full.sol";

contract CaseSale is ERC721Full {
    struct Case {
        address owner;
        bool isForSale;
    }

    struct Transaction {
        address buyer;
        uint256 caseId;
        uint256 timestamp;
        uint256 amount;
    }
    Transaction[] public transactions;

    Case[] public cases;
    address public owner;

    event Buy(address indexed buyer, uint indexed caseId);
    event Offer(address indexed buyer, uint indexed caseId);

    constructor() ERC721Full("CaseSale", "CASESALE") public {
    }
   
    function mint(string memory _case) public {
      require(!_caseExists[_case]);
      uint _id = cases.push(_case);
      _mint(msg.sender, _id);
      _caseExists[_case] = true;
    }

    function burn(uint _tokenId) public {
      require(_isApprovedOrOwner(msg.sender, _tokenId));
      _burn(ownerOf(_tokenId), _tokenId); 
    }

    function buyCase(uint caseId) external payable {
        require(caseId < cases.length, "Invalid Case ID");
        require(cases[caseId].isForSale, "Case not for sale");

        address previousOwner = cases[caseId].owner;
        cases[caseId].owner = msg.sender;
        cases[caseId].isForSale = false;

        payable(previousOwner).transfer(msg.value);
        transactions.push(
            Transaction(msg.sender, caseId, block.timestamp, msg.value)
        );
        emit Buy(msg.sender, caseId);
    }

    function offerCase(uint caseId) external {
        require(caseId < cases.length, "Invalid Case ID");
        cases[caseId].isForSale = true;
        emit Offer(msg.sender, caseId);
    }

    function getTransactionHistory()
        external
        view
        returns (Transaction[] memory)
    {
        return transactions;
    }
}
