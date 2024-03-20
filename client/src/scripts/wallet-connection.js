document.addEventListener('DOMContentLoaded', function() {
    const walletAddressDisplay = document.getElementById('walletAddressDisplay');
    const connectWalletButton = document.getElementById('connectWalletButton');

    connectWalletButton.addEventListener('click', connectWallet);

    function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    setWalletAddress(accounts[0]);
                })
                .catch(err => {
                    console.error(err);
                    alert('An error occurred!');
                });
        } else {
            alert('Please install MetaMask!');
        }
    }

    function setWalletAddress(address) {
        walletAddressDisplay.textContent = `${address.substring(0, 6)}...${address.substring(38)}`;
        connectWalletButton.style.display = 'none';
    }

    // Optional: Automatically try to connect when the page loads
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_accounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function (accounts) {
            setWalletAddress(accounts[0]);
        });
    }
});