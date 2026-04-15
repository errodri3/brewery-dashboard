import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts'

const TYPE_COLORS = {
  micro:       '#e8a87c',
  brewpub:     '#85c1ae',
  large:       '#a29bcc',
  regional:    '#f7c59f',
  closed:      '#c0b9b9',
  proprietor:  '#f4a4a4',
  contract:    '#aed6dc',
}

function BreweryCharts({ breweries }) {
  // Chart 1: brewery type counts
  const typeCounts = {}
  breweries.forEach((b) => {
    typeCounts[b.brewery_type] = (typeCounts[b.brewery_type] || 0) + 1
  })
  const typeData = Object.entries(typeCounts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count)

  // Chart 2: top 8 states by brewery count
  const stateCounts = {}
  breweries.forEach((b) => {
    if (b.state_province) {
      stateCounts[b.state_province] = (stateCounts[b.state_province] || 0) + 1
    }
  })
  const stateData = Object.entries(stateCounts)
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8)

  return (
    <div className="charts-grid">
      <div className="chart-card">
        <h3 className="chart-title">Breweries by Type</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={typeData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="type" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {typeData.map((entry) => (
                <Cell
                  key={entry.type}
                  fill={TYPE_COLORS[entry.type] || '#c8b89a'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Top States by Brewery Count</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={stateData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="state" tick={{ fontSize: 11 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="count" fill="#e8a87c" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BreweryCharts