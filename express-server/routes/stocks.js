var express = require('express')
const fetch = require('node-fetch')
var router = express.Router()

const url = 'http://www.alphavantage.co'
const apiKey = '0V2COKT7PG2LJXKY'

router.get('/list/:symbol', async function (req, res, next) {
  const { symbol } = req.params
  const func = 'SYMBOL_SEARCH'
  let stock = {}

  try {
    const response = await fetch(
      `${url}/query?function=${func}&keywords=${symbol}&apikey=${apiKey}`,
    )
    const data = await response.json()
    stock.list = data.bestMatches ? data.bestMatches : []
    console.log(stock)
    res.json(stock)
  } catch (e) {
    console.error(e)
  }
})

router.get('/data/:symbol', async function (req, res, next) {
  const { symbol } = req.params
  const func = 'GLOBAL_QUOTE'
  let stock = {}
  try {
    const response = await fetch(
      `${url}/query?function=${func}&symbol=${symbol}&apikey=${apiKey}`,
    )
    const data = await response.json()
    console.log(data)
    if (data['Global Quote']) {
      stock.price = data['Global Quote']['05. price']
      stock.volume = data['Global Quote']['06. volume']
      console.log(stock)
    } else {
      res.status(500).send('Missing stock')
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(stock))
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
