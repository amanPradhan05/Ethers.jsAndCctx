const walletService = require("../services/walletService");

const createWallet = async (req, res) => {
  const wallet = await walletService.createWallet();
  res.json({ wallet: wallet.address, privateKey: wallet.privateKey });
};

module.exports = {
  createWallet,
};
