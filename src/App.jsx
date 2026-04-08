import { useState, useEffect } from 'react'
import BreweryList from './components/BreweryList'

function App() {
  const [breweries, setBreweries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  const filteredBreweries = breweries.filter((brewery) =>
    brewery.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h1>Brewery Dashboard</h1>
      <p>Showing {filteredBreweries.length} breweries</p>
      <input
        type="text"
        placeholder="Search breweries..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <BreweryList breweries={filteredBreweries} />
    </div>
  )
}

export default App