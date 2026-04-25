import { Link } from 'react-router-dom'

const hobbies = [
  'Rating new restaurants on Beli',
  'Playing basketball',
  'Photosynthesizing at a park',
  'Thrifting',
  'Mixing polarizing tracks on my FLX4',
]

const photos = [
  { src: '/images/mexicoflea.png', tall: true },
  { src: '/images/scotland.png', tall: false },
  { src: '/images/sf.png', tall: false },
  { src: '/images/beachday.png', tall: false },
  { src: '/images/jazz.png', tall: false },
]

export default function About() {
  return (
    <main style={{ maxWidth: 780, margin: '0 auto' }}>
      <section style={{ display: 'flex', gap: 40, padding: '48px 0 64px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 600, marginBottom: 20,
          }}>
            Hi, I'm Harshini
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.65,
            color: '#2a2a2a', marginBottom: 16, maxWidth: 400,
          }}>
            I'm a senior at UC Berkeley majoring in Data Science (Business + Industrial Analytics Emphasis) based in the SF Bay Area.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 15, marginBottom: 28,
          }}>
            Learn about my experiences{' '}
            <Link to="/resume" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
              here↗
            </Link>
          </p>
          <p style={{
            fontSize: 13, color: '#666', marginBottom: 12,
            fontFamily: 'var(--font-mono)', lineHeight: 1.6,
          }}>
            When I'm not studying or building. I'm<br />probably...
          </p>
          <ul>
            {hobbies.map((h, i) => (
              <li key={i} style={{
                fontSize: 13, color: '#2a2a2a', padding: '4px 0',
                fontFamily: 'var(--font-mono)',
              }}>
                → {h}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img
            src="/images/grad.png"
            alt="Harshini"
            style={{ width: 340, height: 420, objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.background = '#d6d2cb'
            }}
          />
        </div>
      </section>

      <section style={{ paddingBottom: 48 }}>
        <p className="label" style={{ marginBottom: 24 }}>PEAK INTO MY LIFE</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '280px 200px 240px',
          gap: 8,
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                overflow: 'hidden',
                gridRow: photo.tall ? '1 / 3' : undefined,
                background: '#d6d2cb',
                borderRadius: 0,
              }}
            >
              <img
                src={photo.src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}