import Web3 from 'web3'
import { STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS } from './contract.js'

const web3 = new Web3('http://localhost:7545')
const contract = new web3.eth.Contract(STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS)
let accounts = []
web3.eth
  .getAccounts()
  .then((res) => (accounts = res))
  .catch((e) => console.log(e))

export const storingStocks = async (symbol, price, volume) => {
  const symbolInBytes = web3.utils.fromAscii(symbol)
  const receipt = await contract.methods
    .setStock(symbolInBytes, price, volume)
    .send({ from: accounts[0] })
  console.log(receipt)
}

export const StockPrice = async (symbol) => {
  const symbolInBytes = web3.utils.fromAscii(symbol)
  const receipt = await contract.methods
    .getStockPrice(symbolInBytes)
    .call({ from: accounts[0] })
  console.log(receipt)
  return receipt
}
export const StockVolume = async (symbol) => {
  const symbolInBytes = web3.utils.fromAscii(symbol)
  console.log(symbolInBytes)
  const receipt = await contract.methods
    .getStockVolume(symbolInBytes)
    .call({ from: accounts[0] })
  console.log(receipt)
  return receipt
}
