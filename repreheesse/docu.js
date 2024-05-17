const Web3 = require('web3');

// Initialize web3 with the provider URL
const web3 = new Web3('https://www.example.com The leaderboard contract address should be a string
const leaderboardAddress = '0xe7b3d2b862cf5935526d8d39c04d5f5803f70070704ba7ddaddd6cb4ab61ef28';

// Define the ABI for the contract
const leaderboardABI = [
  {
    "inputs": [],
    "name": "getTop10",
    "outputs": [
      {
        "internalType": "address[10]",
        "name": "",
        "type": "address[10]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Create a contract instance
const leaderboardContract = new web3.eth.Contract(leaderboardABI, leaderboardAddress);

// Call the getTop10 method and handle the result
leaderboardContract.methods.getTop10().call()
  .then(result => console.log(result))
  .catch(err => console.error(err));
