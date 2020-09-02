const HDWalletProvider = require("truffle-hdwallet-provider");module.exports = {
  networks: {
    rinkeby: {
      provider: () => new 
 HDWalletProvider("jelly organ balance avoid object hedgehog shuffle often until vote trigger vocal","https://rinkeby.infura.io/v3/dcada03789ca40278ad986cc185e3b94"),
      network_id: 4,
      confirmation: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6600000,
      gasPrice: 10 * (10 ** 9),
     },
   },
   compilers: {
     solc: {
       version: "0.5.2",
       settings: {
         optimizer: {
           enabled: true,
           runs: 200,
         },
       },
     },
   },
 };