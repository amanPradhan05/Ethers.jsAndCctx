const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/ddf22c970140470d9b6a3f583721ffee"
);

const getLatestTransactions = async () => {
  const latestBlockNumber = await provider.getBlockNumber();
  const startBlockNumber = latestBlockNumber - 1000;

  const transactions = [];

  for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
    const block = await provider.getBlock(i);

    if (block && block.transactions) {
      for (const txHash of block.transactions) {
        const tx = await provider.getTransaction(txHash);

        transactions.push({
          hash: tx.hash,
          sender: tx.from,
          receiver: tx.to,
          amount: ethers.formatEther(tx.value),
          blockNumber: tx.blockNumber,
        });
      }
    }
  }

  const sortedTransactions = transactions.sort((a, b) => b.amount - a.amount);
  return sortedTransactions;
};

module.exports = {
  getLatestTransactions,
};
