Wyvern v3.1
-----------

![Project Wyvern Logo](https://media.githubusercontent.com/media/ProjectWyvern/wyvern-branding/master/logo/logo-square-red-transparent-200x200.png?raw=true "Project Wyvern Logo")

[![https://img.shields.io/github/license/wyvernprotocol/wyvern-v3.svg](https://img.shields.io/github/license/wyvernprotocol/wyvern-v3.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/wyvernprotocol/wyvern-v3.svg?branch=master)](https://travis-ci.org/wyvernprotocol/wyvern-v3) [![Coverage Status](https://coveralls.io/repos/github/wyvernprotocol/wyvern-v3/badge.svg?branch=master)](https://coveralls.io/github/wyvernprotocol/wyvern-v3?branch=master)

This is version 3.1 of the Wyvern decentralized exchange protocol, designed to maximize the ease of positive-utility-sum multiparty transactions on a distributed ledger.

Check out documentation [here](https://wyvernprotocol.com/docs).

Deployed contract addresses can be found in [config.json](config.json).

### Development

#### Setup

Install dependencies with [Yarn](https://yarnpkg.com/en/):

```bash
yarn
```

#### Testing

Run testrpc (ganache-cli) to provide a simulated EVM:

```bash
yarn testrpc
```

In a separate terminal, run the testuite:

```bash
yarn test
```

#### Linting

Lint all Solidity files with:

```bash
yarn lint
```

#### Static Analysis

Run static analysis tooling with:

```bash
yarn analyze
```

#### Deployment

Edit [truffle-config.js](truffle-config.js) according to your deployment plans, then run:

```bash
yarn run truffle deploy --network [network]
```

```bash
truffle migrate --reset --network lania
truffle migrate --reset --compile-none --network goerli
truffle migrate --reset --compile-none --network bsc
```

用第三方rpc节点（eth, bsc）需要注意，因为第三方有速率限制，需要把以下的timeout时间调大点：

1、./node_modules/eth-block-tracker/src/polling.js
第11行，const pollingInterval = opts.pollingInterval || 20 * sec  改为  const pollingInterval = 600 * sec

2、./node_modules/@truffle/hdwallet-provider/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js
第34行，timeout: 20000  改成  timeout: 1800000

3、