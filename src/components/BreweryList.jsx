import { Link } from 'react-router-dom'

function BreweryList({ breweries }) {
  if (breweries.length === 0) {
    return (
      <div className="brewery-table-wrap">
        <p className="empty-state">No breweries match your search.</p>
      </div>
    )
  }

  return (
    <div className="brewery-table-wrap">
      <table className="brewery-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>City</th>
            <th>State</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {breweries.map((brewery) => (
            <tr key={brewery.id}>
              <td>
                <Link to={`/brewery/${brewery.id}`} className="brewery-name-link">
                  {brewery.name}
                </Link>
              </td>
              <td>
                <span className={`type-badge ${brewery.brewery_type}`}>
                  {brewery.brewery_type}
                </span>
              </td>
              <td>{brewery.city}</td>
              <td>{brewery.state_province}</td>
              <td>
                {brewery.website_url ? (
                  <a href={brewery.website_url} target="_blank" rel="noreferrer">
                    {brewery.website_url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BreweryList