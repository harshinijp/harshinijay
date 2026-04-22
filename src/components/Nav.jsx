import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '28px 0',
    }}>
      <NavLink to="/">
        <img
          src="/images/harshinilogo.svg"
          alt="Harshini Logo"
          style={{ width: 60, height: 60 }}
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </NavLink>
      <div style={{ display: 'flex', gap: 32 }}>
        {[
          { to: '/', label: 'WORK' },
          { to: '/about', label: 'ABOUT' },
          { to: '/resume', label: 'RESUME' },
        ].map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            style={({ isActive }) => ({
              fontSize: 12,
              letterSpacing: '0.2em',
              color: isActive ? '#1a1a1a' : '#aaa',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              paddingBottom: 4,
              borderBottom: isActive ? '1px solid #1a1a1a' : '1px solid transparent',
              display: 'inline-block',
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}