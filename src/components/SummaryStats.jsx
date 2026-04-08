function SummaryStats({ breweries }) {
  const totalCount = breweries.length

  const withWebsite = breweries.filter((b) => b.website_url).length

  const typeCounts = {}
  breweries.forEach((b) => {
    typeCounts[b.brewery_type] = (typeCounts[b.brewery_type] || 0) + 1
  })
  const mostCommonType = Object.keys(typeCounts).sort(
    (a, b) => typeCounts[b] - typeCounts[a]
  )[0] || '—'

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-label">Total Breweries</div>
        <div className="stat-value">{totalCount}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Most Common Type</div>
        <div className="stat-value">{mostCommonType}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Have a Website</div>
        <div className="stat-value">{withWebsite}</div>
      </div>
    </div>
  )
}

export default SummaryStats