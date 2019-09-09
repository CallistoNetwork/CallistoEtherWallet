import nodeList from '@/networks';
import darklist from '@/darklist/address-darklist.json';
import store from 'store';
if (store.get('notifications') === undefined) store.set('notifications', {});

const gettingStartedDone =
  store.get('skipTutorial') !== undefined ? store.get('skipTutorial') : false;
const storedNetwork = store.get('network');
let network = nodeList['CLO'][0];

if (storedNetwork !== undefined) {
  network = storedNetwork;
  if (storedNetwork.type.name !== 'CUS') {
    network.type = nodeList[storedNetwork.type.name][0].type;
  }
}

const notifications =
  store.get('notifications') !== undefined ? store.get('notifications') : {};
const gasPrice =
  store.get('gasPrice') !== undefined ? store.get('gasPrice') : 41;
const customPaths =
  store.get('customPaths') !== undefined ? store.get('customPaths') : {};
const state = {
  account: {
    balance: 0,
    address: null,
    isHardware: false,
    identifier: '',
    staked: '0',
    reward: '0',
    round: '0'
  },
  customPaths: customPaths,
  ens: null,
  Errors: {},
  ethDonationAddress: '0x74682fc32007af0b6118f259cbe7bccc21641600',
  gasPrice: gasPrice,
  Networks: nodeList,
  network: network,
  notifications: notifications,
  path: '',
  online: true,
  transactions: {},
  wallet: null,
  web3: {},
  sidemenuOpen: false,
  darklist: darklist,
  gettingStartedDone: gettingStartedDone,
  blockNumber: 0,
  linkQuery: {}
};

export default state;
