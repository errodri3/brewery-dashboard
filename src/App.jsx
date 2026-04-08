import { useState, useEffect } from 'react'
import BreweryList from './components/BreweryList'

function App() {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  return (
    <div>
      <h1>Brewery Dashboard</h1>
      <p>Loaded {breweries.length} breweries</p>
      <BreweryList breweries={breweries} />
    </div>
  )
}

export default App