require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stumble cruise shift protect inflict phone orange gift'; 
let testAccounts = [
"0xe2cc5c836da71ba57f5417afbc5d8a86aa7dbc99fbcc5b230d36c43be8e6b0d9",
"0x575dcdb0bfc8a215650852c94c7ca465f0367ac9e60c50c0797a350d2428a965",
"0x073aa628a4c706d7c7a1da4a4c3a1ee13f44084d5769a2683fca6d1f8dae3872",
"0x1a13b87254a43b00220f1cac641d1eb5669f6db114b97b0a780a9d0bb8fc5012",
"0x616f1a333ea93737bd7e2cad5846da7643ccc1722506f0a9ff0cd64ff13d0e54",
"0x61711bd693f1cb33a2d1db157bafcd0f6b26cb66f84bdd3f2b70cbf3027097ff",
"0xd1f644d82e0221c6ab2d1b454e1e70dbd37e3990ecbd929e86e191818560fc89",
"0x801d7b6a1bbca7ddb2b1e89eaef4f9c8c5a73795f0c6fbbdfd3dcb20abdc2aeb",
"0xa63e33daa35db47386409950bec17d2155462a6170ad973e6d946590ab029ab8",
"0x3ed9be10c3a01b83ca429179703378a8fbb47d30288232f78e05922a398a45d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

