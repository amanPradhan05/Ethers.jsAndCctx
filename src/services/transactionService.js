const ethersUtils = require("../utils/ethersUtils");
const transactionRepository = require("../repositories/transactionRepository");

const getLatestTransactions = async () => {
  const transactions = await transactionRepository.getLatestTransactions();
  return transactions;
};

module.exports = {
  getLatestTransactions,
};
