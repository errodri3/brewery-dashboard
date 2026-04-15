import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import BreweryList from './components/BreweryList'
import SummaryStats from './components/SummaryStats'
import NavBar from './components/NavBar'
import About from './components/About'
import './App.css'

function App() {
  const [breweries, setBreweries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [stateFilter, setStateFilter] = useState('')

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  const filteredBreweries = breweries
    .filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((b) => filterType === 'all' ? true : b.brewery_type === filterType)
    .filter((b) => stateFilter === '' ? true : b.state_province.toLowerCase().includes(stateFilter.toLowerCase()))

  return (
    <div className="app-layout">
      <NavBar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={
            <>
              <SummaryStats breweries={filteredBreweries} />
              <p className="showing-count">Showing {filteredBreweries.length} breweries</p>
              <div className="controls">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search breweries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                  className="filter-select"
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
                <input
                  className="state-input"
                  type="text"
                  placeholder="Filter by state..."
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                />
              </div>
              <BreweryList breweries={filteredBreweries} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App