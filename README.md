
# ethereum-voting-demo

## Install geth and sync the blockchain

 1. sudo apt-get install software-properties-common
 2. sudo add-apt-repository -y ppa:ethereum/ethereum
 3. sudo apt-get update
 4. sudo apt-get install ethereum
 
## Install Solidity

 1. sudo add-apt-repository ppa:ethereum/ethereum
 2. sudo apt-get update
 3. sudo apt-get install solc
 
### npm / Node.js

npm install -g solc

### Command to run the testnet

> geth --rinkeby --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*"


## Install the Truffle Framework
npm install -g truffle

### Set up the voting contract
 1. npm install -g webpack
 2. truffle unbox webpack

## Deploy the contract to Rinkeby test network
Run below commands in directory where smart contract code is placed. 
 1. truffle console
 2. web3.personal.newAccount('verystrongpassword')
 3. web3.personal.unlockAccount('0x95a94979d86d9c32d1d2ab5ace2dcc8d1b446fa1', 'verystrongpassword', 15000) ***you  should provide your account address to unlock***
 4. Go to [this](https://faucet.rinkeby.io/) url and follow the instructions to generate fake ether for your account.
 5. truffle compile
 6. truffle migrate
 7. In ***truffle console*** run ***test*** for running test cases

## Test the contract in test network
Run `truffle console` and start testing your voting demo smart ccontract
Below are some sample commands to get you started

> Voting.deployed().then(function(contractInstance) {contractInstance.getTotalTokens().then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contractInstance) {contractInstance.allCandidates().then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contract) {contract.buy({value: web3.toWei('1', 'ether'), from: web3.eth.accounts[0]}).then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contract) {contract.tokensSold().then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contract) {contract.voteForCandidate('Rama', 5).then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contract) {contract.voteForCandidate('Rama', 5, {from: web3.eth.accounts[1]}).then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contractInstance) {contractInstance.totalVotesFor.call('Rama').then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contractInstance) {contractInstance.voterDetails(web3.eth.accounts[0]).then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contractInstance) {contractInstance.transferTo(web3.eth.accounts[0]).then(function(v) {console.log(v)})})

> Voting.deployed().then(function(contractInstance) {contractInstance.transferOwnership(web3.eth.accounts[1]).then(function(v) {console.log(v)})})

## Test from browser
If you are successfull in doing all above, then run below command to test the code on web browser

    npm run dev

## Some useful commands:
1. Get all accounts created
	> web3.eth.accounts
2. Get balance of your account
	> web3.eth.getBalance(web3.eth.accounts[0])

## Note:
1.  if already in ***truffle console*** then just run ***compile*** and ***migrate*** instead of ***truffle compile*** and ***truffle migrate***

2. if faced with 
	> authentication needed: password or unlock
	
	make sure that you are using the first account provided by geth and it is 					unlocked as well. Run web3.eth.accounts command and make sure you are using the first account.

3. if faced with 
	> UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Error: invalid address
	
	Make sure that default account is first account provided by geth. Run web3.eth.defaultAccount = web3.eth.accounts[0] command to do that.

6. If facing issues during redeployment of smart contract. Make a backup of ***build*** folder and delete the original ***build*** folder from smart contract directory. Then again run the ***compile*** and ***migrate*** command.
