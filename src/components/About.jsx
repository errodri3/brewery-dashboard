function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h2>About This Dashboard</h2>
        <p>
          The Brewery Dashboard pulls live data from the{' '}
          <a href="https://www.openbrewerydb.org/" target="_blank" rel="noreferrer">
            Open Brewery DB API
          </a>
          , a free and open-source dataset of breweries, cideries, brewpubs,
          and bottleshops around the world.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Browse 50 breweries fetched live from the API</li>
          <li>Search by brewery name in real time</li>
          <li>Filter by brewery type (micro, brewpub, large, etc.)</li>
          <li>Filter by state or province</li>
          <li>Summary statistics at a glance</li>
        </ul>

        <h3>Data Source</h3>
        <p>
          All data is provided by{' '}
          <a href="https://api.openbrewerydb.org/v1/breweries" target="_blank" rel="noreferrer">
            Open Brewery DB
          </a>. The dataset is community-maintained and freely available under an open license.
        </p>

        <h3>Built With</h3>
        <ul>
          <li>React + Vite</li>
          <li>Open Brewery DB API</li>
          <li>Custom CSS</li>
        </ul>
      </div>
    </div>
  )
}

export default About