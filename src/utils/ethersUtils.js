const ethers = require("ethers");

const isValidAddress = (address) => {
  return ethers.isAddress(address);
};

module.exports = {
  isValidAddress,
};
