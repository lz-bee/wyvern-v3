require('dotenv').config()

var HDWalletProvider = require('truffle-hdwallet-provider')
var KlaytnHDWalletProvider = require('truffle-hdwallet-provider-klaytn')
var Caver = require('caver-js')

var testPrivateKey = process.env.TEST_PRIVATE_KEY || ''

module.exports = {
  mocha: {
    enableTimeouts: false
  },
  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(testPrivateKey, 'https://mainnet.infura.io')
      },
      from: '',
      port: 8545,
      network_id: '1',
      gasPrice: 4310000000,
      confirmations: 2
    },
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '5777',
      gas: 6700000
    },
    lania: {
      provider: function () {
        return new HDWalletProvider(testPrivateKey, 'https://rpc.lania.io')
      },
      network_id: '2022',
      gasPrice: 30000000000,
      from: '0x9758494f8a43D5F732c195c98d62584eC2b13310',
      networkCheckTimeout: 10000,
      skipDryRun: true
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(privateKey, 'https://goerli.infura.io/v3/1399dbdb1895420fada84e71498e66b8')
      },
      from: '0x9758494f8a43D5F732c195c98d62584eC2b13310',
      network_id: '5',
      gas: 30000000,
      networkCheckTimeout: 10000,
      gasPrice: 1500000000,
      confirmations: 2,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.7.5',
      settings: {
        optimizer: {
          enabled: true,
          runs: 750
        }
      }
    }
  }
}