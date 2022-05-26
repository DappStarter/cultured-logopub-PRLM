require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember mistake guess knee bubble service'; 
let testAccounts = [
"0xa9d58dea3f1112e0bfe096b2494e6c06f0d4e87f85024dc1cd0b79f4eec21e0e",
"0x90762d1881fd2a7411f59cac60ce6cf655f77c43355e5710087d5bac54bfb2a1",
"0x888250c826c79e0f0518d8e71a199a16d3c0b2f0bf9df37759d6a4595246a76d",
"0x13c222ddcb55a111e8766e916becd0bccf424fa5c17498d8930b3e07ce3ddc97",
"0xec3754f3abcbc4c1465ccf5d47931e3e750d922a4e0d3bb35012b8f070ad6f8e",
"0x1549f92d960cf6dad9ad5c6a1d5f0995125be660ede2a71e037560f4f99292b8",
"0xe9e8f773aecb6018a445543b13bf0854d24066ba24f58a11ad05f413f12fad70",
"0xa3e81c7ad202569adc4ed242e449aba410c8502639d37f353f9688eb280ae000",
"0x886f4132d1a66bb1db498bdd1ee6efd54823d679ea3f1c8d6b321270b7bc7941",
"0x020ff14b91344e8c9c2ef4ab364c044650fe112db4b9391e4d8ad61efda7b769"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


