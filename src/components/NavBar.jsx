import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation()

  const links = [
    { path: '/',       label: 'Dashboard', emoji: '🏠' },
    { path: '/about',  label: 'About',     emoji: 'ℹ️' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="emoji">🍺</span>
        <span className="navbar-title">Brewery Dashboard</span>
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span>{link.emoji}</span> {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar