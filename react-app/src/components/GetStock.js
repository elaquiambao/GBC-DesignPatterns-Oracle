import React from 'react'
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap'
import { StockVolume, StockPrice } from '../blockchain/contractSetup'

const GetStock = () => {
  const styles = {
    h1: { fontFamily: 'Arial' },
    formControl: {
      backgroundColor: '#F0F2F5',
      border: 0,
      caretColor: '#007bff',
    },
  }

  const [symbol, setSymbol] = React.useState('')
  const [result, setResult] = React.useState([])

  const getPriceAndVolume = async () => {
    const price = await StockPrice(symbol)
    const volume = await StockVolume(symbol)
    setResult([price, volume])
  }
  return (
    <div>
      <h1 style={styles.h1}>Get Stock</h1>
      <InputGroup size="lg" className="mb-3">
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          style={styles.formControl}
          placeholder="Enter Your Symbol"
          className="customInput"
          onChange={(e) => setSymbol(e.target.value)}
          autoFocus
        />
      </InputGroup>
      <Button
        type="button"
        onClick={getPriceAndVolume}
        variant="primary"
        style={{ marginRight: '10px' }}
        className="mb-3"
      >
        {'Price & Volume'}
      </Button>
      <Card>
        <Card.Body style={{ backgroundColor: '#F0F2F5' }}>
          <div>PRICE: {result[0]}</div>
          <div>VOLUME: {result[1]}</div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GetStock
