function NavBar({ currentPage, setCurrentPage }) {
  const links = [
    { id: 'dashboard', label: 'Dashboard', emoji: '🏠' },
    { id: 'about',     label: 'About',     emoji: 'ℹ️'  },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="emoji">🍺</span>
        <span className="navbar-title">Brewery Dashboard</span>
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id}>
            <button
              className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(link.id)}
            >
              <span>{link.emoji}</span> {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar