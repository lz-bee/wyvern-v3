/* global artifacts:false */

const WyvernAtomicizer = artifacts.require('./WyvernAtomicizer.sol')
const WyvernStatic = artifacts.require('./WyvernStatic.sol')
const TestERC20 = artifacts.require('./TestERC20.sol')
const TestERC721 = artifacts.require('./TestERC721.sol')

const { setConfig } = require('./config.js')

module.exports = (deployer, network) => {
  return deployer.deploy(WyvernAtomicizer).then(() => {
    if (network !== 'development') setConfig('deployed.' + network + '.WyvernAtomicizer', WyvernAtomicizer.address)
    return deployer.deploy(WyvernStatic, WyvernAtomicizer.address).then(() => {
      if (network !== 'development') setConfig('deployed.' + network + '.WyvernStatic', WyvernStatic.address)
      return deployer.deploy(TestERC20).then(() => {
        if (network !== 'development') setConfig('deployed.' + network + '.TestERC20', TestERC20.address)
        return deployer.deploy(TestERC721).then(() => {
          if (network !== 'development') setConfig('deployed.' + network + '.TestERC721', TestERC721.address)
        })
      })
    })
  })
}