
# ethereum-voting-demo

This is a voting application to vote 3 candidates. Any user can vote these (*Rama, Nick, Jose*) 3 candidates a number of times but total number of votes that a user can cast is dependent on tokens bought. And user can buy tokens using Etherium coin (*if using testnet then fake ether*). Price for one token is .1 ether.

Only the owner of contract can then transfer the smart contract ether (*used to buy tokens*) to his/her own account or anyone else's as well. The owner can transfer the ownership of smart contract to someone else as well.
 
This application can be accessed from both **web user interface** and **command line interface**

This application is an implementation of blog posts [part1](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2), [part2](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f) and [part3](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-3-331c2712c9df), with a few enhancements on top.

Enhancements include:
 - Modified [Ownable](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol) smart contract to enforce the ownership of smart contract.
 - Balance Transfer restriction. Only owner can transfer balance.
 - Ownership transfer. Owner can transfer ownership to someone else.
 - Minor UI updates to better portray the remaining tokens.
 - Added textfields to take the account of voter instead of using default account.

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

> npm install -g solc

### Command to run the testnet

> geth --rinkeby --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*"


## Install the Truffle Framework
> npm install -g truffle

### Set up the voting contract
 1. npm install -g webpack
 2. truffle unbox webpack

## Deploy the contract to Rinkeby test network
Run below commands in directory where smart contract code is placed. 
 1. View truffle console
 	> truffle console
 2. Command to create a new account in **truffle console**
    > web3.personal.newAccount('verystrongpassword')
 3. By defualt, accounts are locked. To use the account you have to unlock it first y running below command in **truffle console**.
 	> web3.personal.unlockAccount('0x95a94979d86d9c32d1d2ab5ace2dcc8d1b446fa1', 'verystrongpassword', 15000) 
 4. Go to [this](https://faucet.rinkeby.io/) url and follow the instructions to generate fake ether for your account.
 5. Command to compile the smart contract
 	> truffle compile
 6. Command to deploy the smart contract
 	> truffle migrate
 7. In **truffle console** run below command for running test cases
	> test

## Test the contract in test network
Run `truffle console` and start testing your voting demo smart ccontract
Below are some sample commands to get you started

Command to see total tokens available for sale
> Voting.deployed().then(function(contractInstance) {contractInstance.getTotalTokens().then(function(v) {console.log(v)})})

Command to see all candidates
> Voting.deployed().then(function(contractInstance) {contractInstance.allCandidates().then(function(v) {console.log(v)})})

Command to buy tokens worth 1 ether (eg. 10 tokens)
> Voting.deployed().then(function(contract) {contract.buy({value: web3.toWei('1', 'ether'), from: web3.eth.accounts[0]}).then(function(v) {console.log(v)})})

Command to see how many tokens has been sold
> Voting.deployed().then(function(contract) {contract.tokensSold().then(function(v) {console.log(v)})})

Command to cast 5 votes for candidate 'Rama'
> Voting.deployed().then(function(contract) {contract.voteForCandidate('Rama', 5).then(function(v) {console.log(v)})})

Command to cast 5 votes for candidate 'Rama' from account other then default account
> Voting.deployed().then(function(contract) {contract.voteForCandidate('Rama', 5, {from: web3.eth.accounts[1]}).then(function(v) {console.log(v)})})

Command to see total votes for candidate 'Rama'
> Voting.deployed().then(function(contractInstance) {contractInstance.totalVotesFor.call('Rama').then(function(v) {console.log(v)})})

Command to see voter details
> Voting.deployed().then(function(contractInstance) {contractInstance.voterDetails(web3.eth.accounts[0]).then(function(v) {console.log(v)})})

Command to transfer voter contracts balance to owner
> Voting.deployed().then(function(contractInstance) {contractInstance.transferTo(web3.eth.accounts[0]).then(function(v) {console.log(v)})})

Command to transfer ownership of contract to some one else
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
