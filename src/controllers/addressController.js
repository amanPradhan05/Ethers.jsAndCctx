const addressService = require("../services/addressService");

const isValidAddress = async (req, res) => {
  const { address } = req.body;
  const isValid = await addressService.isValidAddress(address);
  res.json({ isValid });
};

module.exports = {
  isValidAddress,
};
