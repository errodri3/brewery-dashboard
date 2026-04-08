function SummaryStats({ breweries }) {
  const totalCount = breweries.length

  const withWebsite = breweries.filter((b) => b.website_url).length

  const typeCounts = {}
  breweries.forEach((b) => {
    typeCounts[b.brewery_type] = (typeCounts[b.brewery_type] || 0) + 1
  })
  const mostCommonType = Object.keys(typeCounts).sort(
    (a, b) => typeCounts[b] - typeCounts[a]
  )[0]

  return (
    <div>
      <div>
        <h3>Total Breweries</h3>
        <p>{totalCount}</p>
      </div>
      <div>
        <h3>Most Common Type</h3>
        <p>{mostCommonType}</p>
      </div>
      <div>
        <h3>Have a Website</h3>
        <p>{withWebsite}</p>
      </div>
    </div>
  )
}

export default SummaryStats