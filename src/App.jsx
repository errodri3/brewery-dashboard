import { useState, useEffect } from 'react'

function App() {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      console.log(data)
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  return (
    <div>
      <h1>Brewery Dashboard</h1>
      <p>Loaded {breweries.length} breweries</p>
    </div>
  )
}

export default App