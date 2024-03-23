document.addEventListener('DOMContentLoaded', function() {
    const walletAddressDisplay = document.getElementById('walletAddressDisplay');
    const connectWalletButton = document.getElementById('connectWalletButton');

    connectWalletButton.addEventListener('click', connectWallet);

    // Function to connect to MetaMask
    function connectWallet() {
        if (window.ethereum && window.ethereum.isMetaMask) {
            // Request account access
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    // If accounts are returned, display the first one
                    if (accounts.length > 0) {
                        setWalletAddress(accounts[0]);
                        // Optionally, hide the connect button after a successful connection
                        connectWalletButton.style.display = 'none';
                    }
                })
                .catch(err => {
                    console.error('An error occurred:', err);
                });
        } else {
            alert('MetaMask is not installed!');
        }
    }

    // Function to set the wallet address display
    function setWalletAddress(address) {
        walletAddressDisplay.textContent = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    }

    // Automatically connect if MetaMask accounts are accessible
    if (window.ethereum && window.ethereum.isMetaMask) {
        window.ethereum.request({ method: 'eth_accounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    // Optionally, hide the connect button if already connected
                    connectWalletButton.style.display = 'none';
                }
            })
            .catch(err => {
                console.error('An error occurred:', err);
            });
    }

    // Listen for account changes
    window.ethereum.on('accountsChanged', function(accounts) {
        if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
        } else {
            // Reset wallet address display if no accounts are connected
            walletAddressDisplay.textContent = 'Not connected';
            connectWalletButton.style.display = 'block';
        }
    });
});
