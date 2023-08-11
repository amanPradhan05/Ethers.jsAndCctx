const transactionService = require("../services/transactionService");

const getLatestTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getLatestTransactions();
    res.json({ transactions });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
};

module.exports = {
  getLatestTransactions,
};
