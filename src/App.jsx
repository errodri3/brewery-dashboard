import { useState, useEffect } from 'react'
import BreweryList from './components/BreweryList'

function App() {
  const [breweries, setBreweries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  const filteredBreweries = breweries
    .filter((brewery) =>
      brewery.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((brewery) =>
      filterType === 'all' ? true : brewery.brewery_type === filterType
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

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All Types</option>
        <option value="micro">Micro</option>
        <option value="brewpub">Brewpub</option>
        <option value="large">Large</option>
        <option value="regional">Regional</option>
        <option value="closed">Closed</option>
        <option value="proprietor">Proprietor</option>
      </select>

      <BreweryList breweries={filteredBreweries} />
    </div>
  )
}

export default App