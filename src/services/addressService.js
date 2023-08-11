const ethersUtils = require("../utils/ethersUtils");

const isValidAddress = async (address) => {
  return ethersUtils.isValidAddress(address);
};

module.exports = {
  isValidAddress,
};
