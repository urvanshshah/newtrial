  if (!window.process) {
      window.process = {
          env: {}
      }
  }

  import {
      EthereumClient,
      w3mConnectors,
      w3mProvider,
      WagmiCore,
      WagmiCoreChains,
      WagmiCoreConnectors
  } from 'https://unpkg.com/@web3modal/ethereum@2.7.1'


  const tokenAddress = '0xeD00Fc7D48B57B81FE65D1cE71c0985e4CF442CB';
  const vestingContract = '0x1e5843b3B57a64DDA0EaaB0737669F6F3E2aC4CC';
  const revo = ["0xfa9e6f48e6b4deabccebbcdc546c7f9668c77f7e", "0xac2B4F8445615965A27C3850C0913835955B3564", "0x1E003F211a58D69E4D7F0F8D007A4D896f50C000", "0xe3b781e395ede9ce3c3808ff00825012698a0fdd", "0x2052b8bcfd9f5742a02b5a1bda0b7bcbf9adada1", "0x31f56427f8055560642d0d389ad3c1f3c98bf8c8"];
  const tokenSymbol = 'CHRP';
  const tokenDecimals = 18;
  const tokenImage = 'https://chirpley.ai/Chirpley-Logo_200x200.png';
  const tokenAbi = [{
      "constant": false,
      "inputs": [],
      "name": "disregardProposeOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [{
          "name": "",
          "type": "string"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_spender",
          "type": "address"
      }, {
          "name": "_value",
          "type": "uint256"
      }],
      "name": "approve",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "assetProtectionRole",
      "outputs": [{
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{
          "name": "",
          "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "r",
          "type": "bytes32[]"
      }, {
          "name": "s",
          "type": "bytes32[]"
      }, {
          "name": "v",
          "type": "uint8[]"
      }, {
          "name": "to",
          "type": "address[]"
      }, {
          "name": "value",
          "type": "uint256[]"
      }, {
          "name": "fee",
          "type": "uint256[]"
      }, {
          "name": "seq",
          "type": "uint256[]"
      }, {
          "name": "deadline",
          "type": "uint256[]"
      }],
      "name": "betaDelegatedTransferBatch",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "sig",
          "type": "bytes"
      }, {
          "name": "to",
          "type": "address"
      }, {
          "name": "value",
          "type": "uint256"
      }, {
          "name": "fee",
          "type": "uint256"
      }, {
          "name": "seq",
          "type": "uint256"
      }, {
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "betaDelegatedTransfer",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_from",
          "type": "address"
      }, {
          "name": "_to",
          "type": "address"
      }, {
          "name": "_value",
          "type": "uint256"
      }],
      "name": "transferFrom",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [],
      "name": "initializeDomainSeparator",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [{
          "name": "",
          "type": "uint8"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "unfreeze",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [],
      "name": "claimOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_newSupplyController",
          "type": "address"
      }],
      "name": "setSupplyController",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "balanceOf",
      "outputs": [{
          "name": "",
          "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "getOwner",
      "outputs": [{
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "name": "target",
          "type": "address"
      }],
      "name": "nextSeqOf",
      "outputs": [{
          "name": "",
          "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_newAssetProtectionRole",
          "type": "address"
      }],
      "name": "setAssetProtectionRole",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "freeze",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [{
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [{
          "name": "",
          "type": "string"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_newWhitelister",
          "type": "address"
      }],
      "name": "setBetaDelegateWhitelister",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_value",
          "type": "uint256"
      }],
      "name": "decreaseSupply",
      "outputs": [{
          "name": "success",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "isWhitelistedBetaDelegate",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_to",
          "type": "address"
      }, {
          "name": "_value",
          "type": "uint256"
      }],
      "name": "transfer",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "whitelistBetaDelegate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_proposedOwner",
          "type": "address"
      }],
      "name": "proposeOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_value",
          "type": "uint256"
      }],
      "name": "increaseSupply",
      "outputs": [{
          "name": "success",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "betaDelegateWhitelister",
      "outputs": [{
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "proposedOwner",
      "outputs": [{
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "unwhitelistBetaDelegate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "name": "_owner",
          "type": "address"
      }, {
          "name": "_spender",
          "type": "address"
      }],
      "name": "allowance",
      "outputs": [{
          "name": "",
          "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "wipeFrozenAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "EIP712_DOMAIN_HASH",
      "outputs": [{
          "name": "",
          "type": "bytes32"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "name": "_addr",
          "type": "address"
      }],
      "name": "isFrozen",
      "outputs": [{
          "name": "",
          "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "supplyController",
      "outputs": [{
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [],
      "name": "reclaimBUSD",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "from",
          "type": "address"
      }, {
          "indexed": true,
          "name": "to",
          "type": "address"
      }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
      }],
      "name": "Transfer",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "owner",
          "type": "address"
      }, {
          "indexed": true,
          "name": "spender",
          "type": "address"
      }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
      }],
      "name": "Approval",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "currentOwner",
          "type": "address"
      }, {
          "indexed": true,
          "name": "proposedOwner",
          "type": "address"
      }],
      "name": "OwnershipTransferProposed",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "oldProposedOwner",
          "type": "address"
      }],
      "name": "OwnershipTransferDisregarded",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "oldOwner",
          "type": "address"
      }, {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
      }],
      "name": "OwnershipTransferred",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "addr",
          "type": "address"
      }],
      "name": "AddressFrozen",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "addr",
          "type": "address"
      }],
      "name": "AddressUnfrozen",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "addr",
          "type": "address"
      }],
      "name": "FrozenAddressWiped",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "oldAssetProtectionRole",
          "type": "address"
      }, {
          "indexed": true,
          "name": "newAssetProtectionRole",
          "type": "address"
      }],
      "name": "AssetProtectionRoleSet",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "to",
          "type": "address"
      }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
      }],
      "name": "SupplyIncreased",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "from",
          "type": "address"
      }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
      }],
      "name": "SupplyDecreased",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "oldSupplyController",
          "type": "address"
      }, {
          "indexed": true,
          "name": "newSupplyController",
          "type": "address"
      }],
      "name": "SupplyControllerSet",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "from",
          "type": "address"
      }, {
          "indexed": true,
          "name": "to",
          "type": "address"
      }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
      }, {
          "indexed": false,
          "name": "seq",
          "type": "uint256"
      }, {
          "indexed": false,
          "name": "fee",
          "type": "uint256"
      }],
      "name": "BetaDelegatedTransfer",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "oldWhitelister",
          "type": "address"
      }, {
          "indexed": true,
          "name": "newWhitelister",
          "type": "address"
      }],
      "name": "BetaDelegateWhitelisterSet",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "newDelegate",
          "type": "address"
      }],
      "name": "BetaDelegateWhitelisted",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "name": "oldDelegate",
          "type": "address"
      }],
      "name": "BetaDelegateUnwhitelisted",
      "type": "event"
  }];
  const routerAbi = [{
      "inputs": [{
          "internalType": "address",
          "name": "_factory",
          "type": "address"
      }, {
          "internalType": "address",
          "name": "_WETH",
          "type": "address"
      }],
      "stateMutability": "nonpayable",
      "type": "constructor"
  }, {
      "inputs": [],
      "name": "WETH",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
      }, {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "amountADesired",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountBDesired",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "addLiquidity",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "token",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "amountTokenDesired",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "addLiquidityETH",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }],
      "stateMutability": "payable",
      "type": "function"
  }, {
      "inputs": [],
      "name": "factory",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
      }],
      "name": "getAmountIn",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }],
      "stateMutability": "pure",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
      }],
      "name": "getAmountOut",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
      }],
      "stateMutability": "pure",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }],
      "name": "getAmountsIn",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }],
      "name": "getAmountsOut",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "reserveA",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "reserveB",
          "type": "uint256"
      }],
      "name": "quote",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
      }],
      "stateMutability": "pure",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
      }, {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "removeLiquidity",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "token",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "removeLiquidityETH",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "token",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "token",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }, {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
      }, {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
      }, {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
      }, {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
      }],
      "name": "removeLiquidityETHWithPermit",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "token",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }, {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
      }, {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
      }, {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
      }, {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
      }],
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
      }, {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }, {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
      }, {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
      }, {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
      }, {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
      }],
      "name": "removeLiquidityWithPermit",
      "outputs": [{
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapETHForExactTokens",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "payable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapExactETHForTokens",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "payable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapExactTokensForETH",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapExactTokensForTokens",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapTokensForExactETH",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
      }, {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
      }, {
          "internalType": "address",
          "name": "to",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
      }],
      "name": "swapTokensForExactTokens",
      "outputs": [{
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "stateMutability": "payable",
      "type": "receive"
  }];
  const factoryAbi = [{
      "inputs": [{
          "internalType": "address",
          "name": "_feeToSetter",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "token0",
          "type": "address"
      }, {
          "indexed": true,
          "internalType": "address",
          "name": "token1",
          "type": "address"
      }, {
          "indexed": false,
          "internalType": "address",
          "name": "pair",
          "type": "address"
      }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "name": "PairCreated",
      "type": "event"
  }, {
      "constant": true,
      "inputs": [],
      "name": "INIT_CODE_PAIR_HASH",
      "outputs": [{
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "name": "allPairs",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "allPairsLength",
      "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
      }, {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
      }],
      "name": "createPair",
      "outputs": [{
          "internalType": "address",
          "name": "pair",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "feeTo",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [],
      "name": "feeToSetter",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": true,
      "inputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }, {
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "name": "getPair",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "internalType": "address",
          "name": "_feeTo",
          "type": "address"
      }],
      "name": "setFeeTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "constant": false,
      "inputs": [{
          "internalType": "address",
          "name": "_feeToSetter",
          "type": "address"
      }],
      "name": "setFeeToSetter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }];
  const vestingAbi = [{
      "inputs": [{
          "internalType": "address",
          "name": "token_",
          "type": "address"
      }],
      "stateMutability": "nonpayable",
      "type": "constructor"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
      }, {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }],
      "name": "OwnershipTransferred",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
      }],
      "name": "Released",
      "type": "event"
  }, {
      "anonymous": false,
      "inputs": [],
      "name": "Revoked",
      "type": "event"
  }, {
      "stateMutability": "payable",
      "type": "fallback"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "holder",
          "type": "address"
      }],
      "name": "computeNextVestingScheduleIdForHolder",
      "outputs": [{
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "bytes32",
          "name": "vestingScheduleId",
          "type": "bytes32"
      }],
      "name": "computeReleasableAmount",
      "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "holder",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
      }],
      "name": "computeVestingScheduleIdForAddressAndIndex",
      "outputs": [{
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
      }],
      "stateMutability": "pure",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_cliff",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_slicePeriodSeconds",
          "type": "uint256"
      }, {
          "internalType": "bool",
          "name": "_revocable",
          "type": "bool"
      }, {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_tgePercentage",
          "type": "uint256"
      }],
      "name": "createVestingSchedule",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address[]",
          "name": "_beneficiary",
          "type": "address[]"
      }, {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_cliff",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
      }, {
          "internalType": "uint256",
          "name": "_slicePeriodSeconds",
          "type": "uint256"
      }, {
          "internalType": "bool",
          "name": "_revocable",
          "type": "bool"
      }, {
          "internalType": "uint256[]",
          "name": "_amount",
          "type": "uint256[]"
      }, {
          "internalType": "uint256",
          "name": "_tgePercentage",
          "type": "uint256"
      }],
      "name": "createVestingScheduleMultiple",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "holder",
          "type": "address"
      }],
      "name": "getLastVestingScheduleForHolder",
      "outputs": [{
          "components": [{
              "internalType": "bool",
              "name": "initialized",
              "type": "bool"
          }, {
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          }, {
              "internalType": "uint256",
              "name": "cliff",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "slicePeriodSeconds",
              "type": "uint256"
          }, {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
          }, {
              "internalType": "uint256",
              "name": "amountTotal",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "tgePercentage",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "released",
              "type": "uint256"
          }, {
              "internalType": "bool",
              "name": "revoked",
              "type": "bool"
          }],
          "internalType": "struct ChirpleyVesting.VestingSchedule",
          "name": "",
          "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [],
      "name": "getToken",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
      }],
      "name": "getVestingIdAtIndex",
      "outputs": [{
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "bytes32",
          "name": "vestingScheduleId",
          "type": "bytes32"
      }],
      "name": "getVestingSchedule",
      "outputs": [{
          "components": [{
              "internalType": "bool",
              "name": "initialized",
              "type": "bool"
          }, {
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          }, {
              "internalType": "uint256",
              "name": "cliff",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "slicePeriodSeconds",
              "type": "uint256"
          }, {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
          }, {
              "internalType": "uint256",
              "name": "amountTotal",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "tgePercentage",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "released",
              "type": "uint256"
          }, {
              "internalType": "bool",
              "name": "revoked",
              "type": "bool"
          }],
          "internalType": "struct ChirpleyVesting.VestingSchedule",
          "name": "",
          "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "holder",
          "type": "address"
      }, {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
      }],
      "name": "getVestingScheduleByAddressAndIndex",
      "outputs": [{
          "components": [{
              "internalType": "bool",
              "name": "initialized",
              "type": "bool"
          }, {
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          }, {
              "internalType": "uint256",
              "name": "cliff",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "slicePeriodSeconds",
              "type": "uint256"
          }, {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
          }, {
              "internalType": "uint256",
              "name": "amountTotal",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "tgePercentage",
              "type": "uint256"
          }, {
              "internalType": "uint256",
              "name": "released",
              "type": "uint256"
          }, {
              "internalType": "bool",
              "name": "revoked",
              "type": "bool"
          }],
          "internalType": "struct ChirpleyVesting.VestingSchedule",
          "name": "",
          "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [],
      "name": "getVestingSchedulesCount",
      "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
      }],
      "name": "getVestingSchedulesCountByBeneficiary",
      "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [],
      "name": "getVestingSchedulesTotalAmount",
      "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [],
      "name": "getWithdrawableAmount",
      "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [],
      "name": "owner",
      "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "bytes32",
          "name": "vestingScheduleId",
          "type": "bytes32"
      }, {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
      }],
      "name": "release",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "bytes32",
          "name": "vestingScheduleId",
          "type": "bytes32"
      }],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "inputs": [{
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
      }],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }, {
      "stateMutability": "payable",
      "type": "receive"
  }];
  const pancakeSwapRouterAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
  const pancakeSwapFactoryAddress = "0xBCfCcbde45cE874adCB698cC183deBcF17952812";
  const ApeRouterAddress = "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7";
  const ApeFactoryAddress = "0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6";
  const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  const BUSDTokenAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
  const web3 = new Web3();

  import {
      Web3Modal
  } from 'https://unpkg.com/@web3modal/html@2.7.1'
  const {
      configureChains,
      createConfig,
      getNetwork,
      disconnect,
      getAccount,
      watchNetwork,
      watchAccount,
      readContract
  } = WagmiCore;
  const {
      bsc
  } = WagmiCoreChains
  const {
      CoinbaseWalletConnector
  } = WagmiCoreConnectors
  const chains = [bsc]
  const projectId = '1b67e572673efc9259879e970065923d'
  const {
      publicClient
  } = configureChains(chains, [w3mProvider({
      projectId
  })])
  const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: w3mConnectors({
          projectId,
          version: 2,
          chains
      }),
      publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)
  const web3modal = new Web3Modal({
      projectId
  }, ethereumClient)

  web3modal.setTheme({
      themeMode: 'dark',
      themeVariables: {
          '--w3m-font-family': 'Roboto, sans-serif',
          '--w3m-accent-color': '#f24139',
          '--w3m-accent-fill-color': '#ffffff',
          '--w3m-background-color': '#ffdda6',
          '--w3m-logo-image-url': 'https://chirpley.ai/chirpley-icon.svg',
          '--w3m-color-bg-1': '#ffdda6',
          '--w3m-color-fg-1': '#f24139',
          '--w3m-z-index': '999999',
          // ...
      }
  })

  function onConnect(e) {
      e.stopImmediatePropagation();
      web3modal.openModal()
  }

  async function onDisconnect() {
      let account = null;
      const {
          disconnect,
          getAccount,
          watchAccount
      } = WagmiCore;
      account = getAccount();
      if (account.isConnected) {
          try {
              await disconnect();
              console.log("disconnected");
              console.log(account);
              $.notify("Succesfully disconnected from wallet", "success");
              $(".connectWallet").show();
              $(".connectedWallet").hide();
              $("#btn-connect").prop("disabled", false);
              $("#inputFrom").val('');
              account = null;
              clearPanel();
              closeAccount();
              localStorage.clear();
          } catch (e) {
              $.notify("Could not connect to Wallet: " + e, "error");
              console.log("Could not get a wallet connection", e);
              return;
          }
      }
  }

  // Get Data from blockchain and print in accountpanel
  async function fetchAccount() {
      const template = document.querySelector("#template-balance");
      const network = await getNetwork();
      if (network.chain) {
          const account = await getAccount();
          document.querySelector("#network-name").textContent = network.chain.name;

          const panelButton = '<button class="c-btn item" id="btn-openaccount" onclick="openAccount();">' + truncate(account.address, 10) + '</button>';
          document.querySelector("#selected-account").textContent = account.address;
          $(".connectWallet").hide();
          $(".connectedWallet").show();
          $(".connectedWallet").html(panelButton);

          async function rowResolvers() {

              const {
                  fetchBalance,
                  fetchToken,
                  readContract,
                  getNetwork
              } = WagmiCore;
              const balance = await fetchBalance({
                  address: account.address,
                  formatUnits: 'gwei',
              })

              const clone = template.content.cloneNode(true);
              clone.querySelector(".assetName").textContent = 'BNB';
              const bn = new BigNumber(balance.value + "e-" + 18);
              clone.querySelector(".balance").textContent = bn;
              accountContainer.appendChild(clone);

              if (BUSDTokenAddress != '') {
                  const busdtoken = await fetchToken({
                      address: BUSDTokenAddress,
                  })
                  const busdbalance = await fetchBalance({
                      address: account.address,
                      token: BUSDTokenAddress
                  })
                  const cloneToken = template.content.cloneNode(true);
                  cloneToken.querySelector(".assetName").textContent = busdtoken.symbol;
                  var tokenBal = cloneToken.querySelector(".balance");
                  const bn = new BigNumber(busdbalance.formatted + "e-" + busdbalance.decimals);
                  tokenBal.textContent = bn.toString();
                  accountContainer.appendChild(cloneToken);
              }

              if (tokenAddress != '') {
                  const token = await fetchToken({
                      address: tokenAddress,
                  })
                  const balance = await fetchBalance({
                      address: account.address,
                      token: tokenAddress

                  })
                  const cloneToken = template.content.cloneNode(true);
                  cloneToken.querySelector(".assetName").textContent = token.symbol;
                  var tokenBal = cloneToken.querySelector(".balance");
                  tokenBal.textContent = balance.formatted;
                  accountContainer.appendChild(cloneToken);
              }
          };

          await rowResolvers();

          //////////////////////// GETVESTING /////////////////////////////
          const vestingTemplate = document.querySelector("#template-vesting");
          const vestingContainer = document.querySelector("#vesting");

          var getScheduleCount = 0;
          if (!revo.includes(account.address)) {
              var getScheduleCount = await readContract({
                  address: vestingContract,
                  abi: vestingAbi,
                  functionName: 'getVestingSchedulesCountByBeneficiary',
                  args: [account.address],
              });
          }
          getScheduleCount = Number(getScheduleCount)
          if (getScheduleCount == 0) {
              $(".tokenClaim").css({
                  "display": "none"
              });
          } else {
              $(".tokenClaim").css({
                  "display": "block"
              });
          }

          let i = 0;
          while (i < getScheduleCount) {
              try {
                  const getSchedule = await readContract({
                      address: vestingContract,
                      abi: vestingAbi,
                      functionName: 'getVestingScheduleByAddressAndIndex',
                      args: [account.address, i],
                  });
                  const getScheduleId = await readContract({
                      address: vestingContract,
                      abi: vestingAbi,
                      functionName: 'computeVestingScheduleIdForAddressAndIndex',
                      args: [account.address, i],
                  });

                  var startDate = new Date(Number(getSchedule.start) * 1000);
                  var dateDays = startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate() + ' ' + startDate.getHours() + '.' + startDate.getMinutes() + ' UTC';
                  var cliffDate = new Date(Number(getSchedule.cliff) * 1000);
                  var currentDate = new Date();
                  var curTime = Math.floor(currentDate.getTime() / 1000);
                  if (Number(getSchedule.cliff) - Number(getSchedule.start) == 0) {
                      var cliffTime = "none";
                      var cliffRemaining = "na";
                  } else {
                      var cliffTime = secondsToDhms(Number(getSchedule.cliff) - Number(getSchedule.start));
                      var cliffRemaining = secondsToDhms(Number(getSchedule.cliff) - curTime);
                  }
                  const sliceTime = secondsToD(Number(getSchedule.slicePeriodSeconds));
                  var totalAmount = getSchedule.amountTotal;
                  var totalAmountDec = new BigNumber(totalAmount + "e-" + tokenDecimals);
                  totalAmountDec = Number(totalAmountDec);
                  var releasedAmount = Number(getSchedule[9]);
                  var releasedAmountDec = new BigNumber(getSchedule.released + "e-" + tokenDecimals);
                  var cliffEpoch = Number(getSchedule.cliff) - Number(getSchedule.start);
                  if (cliffEpoch != 0) {
                      var startTime = Number(getSchedule.cliff);
                  } else {
                      var startTime = Number(getSchedule.start);
                  }
                  var diffTime = curTime - startTime;
                  var totalSlices = Number(getSchedule.duration) / Number(getSchedule.slicePeriodSeconds);
                  var tgePercentage = Number(getSchedule.tgePercentage);
                  var tgeAmount = web3.utils.toWei((totalAmountDec / 100 * tgePercentage).toString(), 'ether');
                  var tgeAmountDec = new BigNumber((totalAmountDec / 100 * tgePercentage) + "e-" + tokenDecimals);
                  var tgeAmountDec = web3.utils.fromWei(tgeAmount, 'ether');
                  var vestingAmountDec = totalAmountDec - tgeAmountDec;
                  var vestingAmountWei = web3.utils.toWei(vestingAmountDec.toString(), 'ether');
                  if (diffTime < Number(getSchedule.duration)) {
                      var pastSlices = Math.floor(diffTime / Number(getSchedule.slicePeriodSeconds));
                      var remainSlicesTime = Number(getSchedule.slicePeriodSeconds) - (diffTime - (pastSlices * Number(getSchedule.slicePeriodSeconds)));
                      var nextRelease = secondsToDhms(remainSlicesTime);
                      var slices = Number(getSchedule.duration) / Number(getSchedule.slicePeriodSeconds);
                      var sliceAmountDec = vestingAmountDec / slices;
                      var vestedAmountDec = (tgeAmountDec * 1) + (pastSlices * sliceAmountDec);
                      var releasableAmountDec = vestedAmountDec - releasedAmountDec;
                  } else {
                      var releasableAmountDec = totalAmountDec - releasedAmountDec;
                      var nextRelease = 'none';
                  }

                  if (releasableAmountDec < 0) {
                      releasableAmountDec = 0;
                  }
                  var disabled = "";
                  if (releasableAmountDec < 1) {
                      var disabled = "disabled";
                  }
                  const vestingContent = "<ul class='vestingSchedule'><li><div><b>VestingID:</b> <span class='scheduleID'>" + truncate(getScheduleId, 30) +
                      "</span></div></li><li><div><b>Start:</b> " + dateDays.toLocaleString() +
                      "</div></li><li><div><b>Duration:</b> " + secondsToD(Number(getSchedule.duration)) +
                      "</div></li><li><div><b>Cliff:</b> " + cliffTime +
                      "</div></li><li><div><b>Cliff Remaining:</b> " + cliffRemaining +
                      "</div></li><li><div><b>Slice:</b> " + sliceTime +
                      "</div></li><li><div class='cell1'><b>Amount:</b> " + totalAmountDec +
                      "</div></li><li><div><b>Release TGE:</b> " + tgePercentage +
                      "%</div></li><li><div><b>Next Release:</b> " + nextRelease +
                      "</div></li><li><div><b>Releasable:</b> " + releasableAmountDec +
                      "</div></li><li><div><b>Released:</b> " + releasedAmountDec +
                      "</div></li><li><div class='releasediv'><input class='input-release' value='" + releasableAmountDec + "' type='number' name='releaseAmount' min='1' max='" + releasableAmountDec + "'><input class='input-release' value='" + getScheduleId + "' type='hidden' name='scheduleID'><button class='c-btn item btn-release' " + disabled + " >Release</button></div></li></ul>";
                  const cloneVesting = vestingTemplate.content.cloneNode(true);
                  cloneVesting.querySelector(".vestingValue").innerHTML = vestingContent;



                  vestingContainer.appendChild(cloneVesting);
              } catch (error) {
                  console.log(error)
              }
              i++;
          }
          $(".btn-release").click(releaseVesting);
      }
  }



  /////////////////////////////// Init dApp //////////////////////////////// 
  async function init() {
      let account = null;
      console.log("Initializing Chirpley\'s Nest");
      if (location.protocol !== 'https:') {
          const alert = document.querySelector("#alert-error-https");
          alert.style.display = "block";
          document.querySelector(".btn-connect").setAttribute("disabled", "disabled")
          return;
      }

      const {
          getAccount,
          watchAccount,
          watchNetwork,
          getNetwork,
          switchNetwork
      } = WagmiCore;
      account = await getAccount()
      const network = await getNetwork();
      console.log(account);
      if (account.isConnected && account.connector) {
          try {
              clearPanel();
              fetchAccount();
          } catch (e) {
              console.log("Could not get a wallet connection", e);
              return;
          }
      } else {
          $(".connectedWallet").hide();
          $("#btn-connect").prop("disabled", false);
          console.log("waiting for login request");
      }

      watchAccount(({
          address
      }) => {
          if (address) {
              clearPanel();
              fetchAccount();
          }
      });

      watchNetwork(({
          chain
      }) => {
          clearPanel();
          if (chain) {
              if (chain.id != 56) {
                  switchNetwork({
                      chainId: 56
                  });
                  $.notify("Switch the chain in your wallet to Smart Chain", "info");
                  watchNetwork(({
                      chain
                  }) => {
                      if (chain.id = 56) {
                          fetchAccount();
                      }
                  });

              } else {
                  console.log("BSC selected");
              }
          }
      });

      // refresh accountpanel
      setInterval(function() {
          const account = getAccount()
          if (account.isConnected) {
              try {
                  clearPanel();
                  fetchAccount();
              } catch (e) {
                  console.log("Could not get a wallet connection", e);
                  return;
              }
          }
      }, 30000);
  }

  async function releaseVesting() {
      var releaseAmount = $(this).closest("div.releasediv").find("input[name='releaseAmount']").val();
      var releasingAmount = web3.utils.toWei(releaseAmount, 'ether');
      const scheduleID = $(this).closest("div.releasediv").find("input[name='scheduleID']").val();

      if (scheduleID && releaseAmount != 0) {
          const {
              writeContract,
              waitForTransaction
          } = WagmiCore;
          releaseAmount = releaseAmount.toString();
          $.notify(releaseAmount + " CHRP release pending.", "info");
          console.log("Scheduleid:", scheduleID);
          try {
              const {
                  hash
              } = await writeContract({
                  address: vestingContract,
                  abi: vestingAbi,
                  functionName: 'release',
                  args: [scheduleID, releasingAmount]
              });
              console.log("transactionhash:", hash);
              const data = await waitForTransaction({
                  hash: hash,
              })
              if (data) {
                  $.notify(releaseAmount + " CHRP Succesfully released", "success");
                  clearPanel();
                  fetchAccount();
                  console.log(data);
              }
          } catch (error) {
              console.log(error)
              $.notify("Releasing tokens gave an error", "error");
          }
      }
  }

  // Listen To events
  window.addEventListener('load', async () => {
      init();
      $('button[data-name="Connect"]').click(onConnect);
      $("#btn-disconnect").click(onDisconnect);
      $(".btn-addtoken").click(addToken);
      $(".closebtn").click(closeAccount);
      $("#container").click(closeAccount);
      $(".main-menu .first").click(closeAccount);
      //$("#swapmax").click(swapMax);
  });

  async function addToken() {
      if (window.ethereum) {
          const wasAdded = await window.ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                  type: 'ERC20', // Initially only supports ERC20, but eventually more!
                  options: {
                      address: tokenAddress, // The address that the token is at.
                      symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                      decimals: tokenDecimals, // The number of decimals in the token
                      image: tokenImage, // A string url of the token logo
                  },
              },
          });

          if (wasAdded) {
              console.log('Thanks for your interest!');
              $.notify("CHRP has been added to your wallet", "success");
          } else {
              console.log(error);
              $.notify("CHRP could not be added", "error");
          }
      }
  }