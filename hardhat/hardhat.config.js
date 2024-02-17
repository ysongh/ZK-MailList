require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    // npx hardhat run scripts/deploy.js --network scrollSepolia
    "scrollSepolia": {
      url: "https://sepolia-rpc.scroll.io",
      accounts: [process.env.PRIVATEKEY],
      chainId: 534351
    },
  },
  paths: {
    artifacts: '../reactjs/src/artifacts',
    cache: '../reactjs/src/cache',
  }
};
