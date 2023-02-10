/* global artifacts:false */

const WyvernRegistry = artifacts.require('./WyvernRegistry.sol')
const WyvernExchange = artifacts.require('./WyvernExchange.sol')
const {
  setConfig,
  chainIds,
  personalSignPrefixes,
  ZERO_ADDRESS
} = require('./config.js')

module.exports = async (deployer, network) => {
  const personalSignPrefix = personalSignPrefixes[network] || personalSignPrefixes['default']
  await deployer.deploy(WyvernRegistry)
  await deployer.deploy(WyvernExchange, chainIds[network], [WyvernRegistry.address, ZERO_ADDRESS], Buffer.from(personalSignPrefix,'binary'))
  if (network !== 'development') {
    setConfig('deployed.' + network + '.WyvernRegistry', WyvernRegistry.address)
    setConfig('deployed.' + network + '.WyvernExchange', WyvernExchange.address)
  }
  const registry = await WyvernRegistry.deployed()
  await registry.grantInitialAuthentication(WyvernExchange.address)
}
