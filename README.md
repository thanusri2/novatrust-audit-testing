# novatrust-audit-testing

Audit dashboard, Hardhat end-to-end tests, and Sepolia deployment checks for the NovaTrust project (SIH26125, Team CRYPTX).

## Project Overview

This repo contains:
- `dashboard/` — React audit-trail view
- `test/` — Hardhat end-to-end tests
- `deployment/` — Sepolia deployment checks

## Usage

### Running Tests

To run all the tests in the project, execute:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `node:test` tests:

```shell
npx hardhat test solidity
npx hardhat test nodejs
```

### Deploying to Sepolia

This project includes an example Ignition module to deploy contracts. To deploy locally:

```shell
npx hardhat ignition deploy ignition/modules/Counter.ts
```

To deploy to Sepolia, set your private key using `hardhat-keystore`:

```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

Then run:

```shell
npx hardhat ignition deploy --network sepolia ignition/modules/Counter.ts
```