export const STOCK_ORACLE_ADDRESS = '0x2b928800B2B2cbEf551cd353968eE7F9125508Ca'
export const STOCK_ORACLE_ABI = [
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'symbol',
        type: 'bytes4',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'volume',
        type: 'uint256',
      },
    ],
    name: 'setStock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'symbol',
        type: 'bytes4',
      },
    ],
    name: 'getStockPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'symbol',
        type: 'bytes4',
      },
    ],
    name: 'getStockVolume',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
