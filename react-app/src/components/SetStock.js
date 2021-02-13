import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, CardColumns, Card } from 'react-bootstrap'

import { storingStocks } from '../blockchain/contractSetup'

const SetStock = () => {
  const styles = {
    h1: { fontFamily: 'Arial' },
    formControl: {
      backgroundColor: '#F0F2F5',
      border: 0,
      caretColor: '#007bff',
    },
  }

  const [search, setSearch] = useState('BA')
  const [searchList, setSearchList] = useState([])

  useEffect(async () => {
    console.log(search)
    const response = await fetch(`http://localhost:8000/stocks/list/${search}`)
    const stock = await response.json()
    if (stock.list) {
      setSearchList(stock.list.slice(0, 3))
    } else {
      setSearchList([])
    }
  }, [search])

  const addToBlockchain = async (symbol) => {
    if (symbol) {
      try {
        const response = await fetch(
          `http://localhost:8000/stocks/data/${symbol}`,
        )
        const stock = await response.json()
        storingStocks(symbol, parseInt(stock.price), parseInt(stock.volume))
        alert(`Stock ${symbol} is added.`)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div>
      <h1 style={styles.h1}> Set Stock</h1>
      <InputGroup size="lg" className="mb-3">
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          style={styles.formControl}
          placeholder="Search Your Stock"
          className="customInput"
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </InputGroup>
      <CardColumns>
        {searchList.length > 0 &&
          searchList.map((result) => (
            <StockCard
              key={result['1. symbol']}
              result={result}
              func={addToBlockchain}
            />
          ))}
      </CardColumns>
    </div>
  )
}

const StockCard = ({ result, func }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{result['2. name']}</Card.Title>
        <Card.Text>
          <button
            className="btn btn-primary"
            style={{ fontSize: '18px' }}
            onClick={() => func(result['1. symbol'])}
          >
            Add stock
          </button>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{result['1. symbol']}</small>
      </Card.Footer>
    </Card>
  )
}

export default SetStock
