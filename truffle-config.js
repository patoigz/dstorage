require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const providerUrl = process.env.PROVIDER_URL || '';
const privateKeys = process.env.PRIVATE_KEYS || '';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: 5157
    },
    ropsten: {
      provider: () => new HDWalletProvider(privateKeys.split('@'), providerUrl),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 5557
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};