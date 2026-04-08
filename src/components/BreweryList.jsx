function BreweryList({ breweries }) {
  return (
    <table>
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
            <td>{brewery.name}</td>
            <td>{brewery.brewery_type}</td>
            <td>{brewery.city}</td>
            <td>{brewery.state_province}</td>
            <td>{brewery.website_url || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BreweryList