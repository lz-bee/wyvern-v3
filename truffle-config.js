require('dotenv').config()

var HDWalletProvider = require('truffle-hdwallet-provider')
var KlaytnHDWalletProvider = require('truffle-hdwallet-provider-klaytn')
var Caver = require('caver-js')

var rinkebyMnemonic = process.env.RINKEBY_MNEMONIC || ''
var mumbaiMnemonic = process.env.MUMBAI_MNEMONIC || ''
var mainnetMnemonic = process.env.MAINNET_MNEMONIC || ''
var klaytnPrivateKey = process.env.KLAYTN_PRIVATE_KEY || ''
var baobabPrivateKey = process.env.BAOBAB_PRIVATE_KEY || ''
var infuraKey = process.env.INFURA_KEY || '';

var kasAccessKeyId = process.env.KAS_ACCESS_KEY_ID || ''
var kasSecretAccessKey = process.env.KAS_SECRET_KEY || ''

var privateKey = '1a42f4b7f1a5bdf9272cba7923211018517c4d6248a865692c28d6c7b1c51a9b'

module.exports = {
  mocha: {
    enableTimeouts: false
  },
  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mainnetMnemonic, 'https://mainnet.infura.io')
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
        return new HDWalletProvider(privateKey, 'https://rpc.lania.io')
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
    mumbai: {
      provider: function () {
        return new HDWalletProvider(mumbaiMnemonic, 'https://rpc-mumbai.matic.today')
      },
      from: '',
      network_id: '80001'
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