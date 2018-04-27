var Ownable = artifacts.require("./Ownable.sol");
var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.deploy(Voting, 1000, web3.toWei('0.1', 'ether'), ['Rama', 'Nick', 'Jose']);
};