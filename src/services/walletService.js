const ethers = require("ethers");

const createWallet = async () => {
  const wallet = ethers.Wallet.createRandom();
  return wallet;
};

module.exports = {
  createWallet,
};
