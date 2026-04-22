import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ marginTop: 100, paddingBottom: 48 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
      }}>
        <a href="mailto:harshinijay@berkeley.edu" style={{
          fontSize: 13, fontStyle: 'italic', color: '#aaa',
        }}>
          Let's talk! harshinijay@berkeley.edu
        </a>
        <div style={{
          display: 'flex', gap: 32,
          fontSize: 11, letterSpacing: '0.2em',
          color: '#aaa',
        }}>
          <a href="https://www.linkedin.com/in/harshinijayaprakash/" target="_blank" rel="noopener" style={{ color: '#aaa' }}>LINKEDIN</a>
          <a href="mailto:harshinijay@berkeley.edu" style={{ color: '#aaa' }}>EMAIL</a>
          <Link to="/resume" style={{ color: '#aaa' }}>RESUME</Link>
        </div>
      </div>
      <p style={{
        textAlign: 'center', fontSize: 12, color: '#bbb', lineHeight: 1.8,
        fontFamily: 'var(--font-mono)',
      }}>
        built with 💚 & lots of coffee · 2026<br />
        thanks for visiting :)
      </p>
    </footer>
  )
}