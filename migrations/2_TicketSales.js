const TicketSales = artifacts.require("TicketSales");

module.exports = function (deployer) {
  deployer.deploy(TicketSales);
};
