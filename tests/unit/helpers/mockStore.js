import nodeList from '@/networks';
import Web3 from 'web3';
const network = nodeList['ETH'][0];
const newWeb3 = new Web3();
const state = {
  account: {
    balance: 0,
    address: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    identifier: 'keystore',
    isHardware: false
  },
  customTokens: [
    { name: 'ETH', balance: 200 },
    { name: 'BTH', balance: 300 },
    { name: 'ETC', balance: 400 }
  ],

  customPaths: {},
  ens: true,
  Errors: {},
  ethDonationAddress: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
  gasPrice: 41,
  Networks: nodeList,
  network: network,
  notifications: {},
  online: true,
  Transactions: {},
  wallet: {
    getAddressString: jest.fn()
  },
  web3: newWeb3,
  linkQuery: {}
};

const getters = {
  account: () => {
    return state.account;
  },
  customPaths: () => {},
  ens: () => {},
  Errors: () => {},
  ethDonationAddress: () => '',
  gasPrice: () => 41,
  Networks: () => {
    return nodeList;
  },
  network: () => {
    return {
      auth: false,
      password: '',
      port: 443,
      service: 'infura.io',
      type: {
        blockExplorerAddr: 'https://etherscan.io/address/[[address]]',
        blockExplorerTX: 'https://etherscan.io/tx/[[txHash]]',
        chainID: 1,
        contracts: [],
        ensResolver: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        homePage: 'https://ethereum.org',
        name: 'ETH',
        name_long: 'Ethereum',
        tokens: [],
        ens: {
          registry: '0x123456789',
          registrarTLD: 'eth',
          registrarType: 'auction'
        },
        currencyName: 'ETH'
      },
      url: 'https://mainnet.infura.io/mew'
    };
  },
  notifications: () => [],
  online: () => true,
  sidemenuOpen: () => {
    return false;
  },

  customTokens: () => [
    { name: 'ETH', balance: 200 },
    { name: 'BTH', balance: 300 },
    { name: 'ETC', balance: 400 }
  ],

  Transactions: () => {},
  wallet: () => {
    return {
      getChecksumAddressString: () =>
        '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'
    };
  },
  web3: () => {
    return newWeb3;
  },
  path: () => {},
  linkQuery: () => {}
};

export { state, getters };
