import { useState, useEffect } from 'react'
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
  const [currentPage, setCurrentPage] = useState('dashboard')

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
    .filter((brewery) =>
      stateFilter === '' ? true : brewery.state_province.toLowerCase().includes(stateFilter.toLowerCase())
    )

  return (
    <div className="app-layout">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="app-main">
        {currentPage === 'dashboard' && (
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
        )}

        {currentPage === 'about' && <About />}
      </main>
    </div>
  )
}

export default App