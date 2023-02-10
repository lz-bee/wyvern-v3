const fs = require('fs')

const getConfig = () => {
  return JSON.parse(fs.readFileSync('config.json'))
}

const updateConfig = (func) => {
  const previous = getConfig()
  const updated = func(previous)
  fs.writeFileSync('config.json', JSON.stringify(updated, null, 2))
}

const setConfig = (path, val) => {
  path = path.split('.').reverse()
  updateConfig(config => {
    var ref = config
    while (path.length > 1) {
      const key = path.pop()
      if (!ref[key]) ref[key] = {}
      ref = ref[key]
    }
    ref[path.pop()] = val
    return config
  })
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const chainIds = {
  development: 50,
  coverage: 50,
  rinkeby: 4,
  mumbai: 80001,
  main: 1,
  goerli: 5,
  lania: 2022,
  bsc: 97
}

const personalSignPrefixes = {
  default: "\x19Ethereum Signed Message:\n",
  klaytn: "\x19Klaytn Signed Message:\n",
  baobab: "\x19Klaytn Signed Message:\n"
}

module.exports = {
  getConfig,
  setConfig,
  updateConfig,
  chainIds,
  personalSignPrefixes,
  ZERO_ADDRESS
}
