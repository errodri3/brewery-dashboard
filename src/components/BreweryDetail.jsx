import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function BreweryDetail() {
  const { id } = useParams()
  const [brewery, setBrewery] = useState(null)

  useEffect(() => {
    const fetchBrewery = async () => {
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      const data = await response.json()
      setBrewery(data)
    }
    fetchBrewery()
  }, [id])

  if (!brewery) return <p>Loading...</p>

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>

      <div className="detail-card">
        <div className="detail-header">
          <h2>{brewery.name}</h2>
          <span className={`type-badge ${brewery.brewery_type}`}>
            {brewery.brewery_type}
          </span>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">City</span>
            <span className="detail-value">{brewery.city || '—'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">State</span>
            <span className="detail-value">{brewery.state_province || '—'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Country</span>
            <span className="detail-value">{brewery.country || '—'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{brewery.phone || '—'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Address</span>
            <span className="detail-value">{brewery.street || '—'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Postal Code</span>
            <span className="detail-value">{brewery.postal_code || '—'}</span>
          </div>
        </div>

        {brewery.website_url && (
            <a 
            href={brewery.website_url}
            target="_blank"
            rel="noreferrer"
            className="detail-website"
            >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  )
}

export default BreweryDetail