document.addEventListener('DOMContentLoaded', function () {
  const logoutButton = document.getElementById('logoutButton');

  logoutButton.addEventListener('click', logoutWallet);
  async function logoutWallet() {
    await window.ethereum.request({
        method: "wallet_revokePermissions",
        params: [
            {
                eth_accounts: {},
            },
        ],
    });
  }
  
});
