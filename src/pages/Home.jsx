import { Link } from 'react-router-dom'

const projects = [
  {
    slug: 'skip',
    title: 'Skip',
    desc: 'Led product innovation for a maternal-health monitoring wearable from discovery to MVP concept. The work led to the spin-out of Project Stardust.',
    org: 'GOOGLE X SPINOFF · FALL 2025',
    tags: [{ label: 'Product Innovation', filled: true }, { label: '0 to 1 MVP', filled: false }],
    image: '/images/stardust.svg',
  },
  {
    slug: 'pfizer',
    title: 'Pfizer',
    desc: 'Surfaced hidden anomalies in healthcare payment data across 50+ countries, giving data stewards early visibility for the first time.',
    org: 'R&D MEDICAL SOLUTIONS · SUMMER 2025',
    tags: [{ label: 'ML/DATA', filled: true }, { label: 'Proof of Concept', filled: false }],
    image: '/images/pfizercard.svg',
  },
  {
    slug: 'sprout',
    title: 'Sprout',
    desc: 'Designed an AI study companion that increases collaboration in Goodnotes Classroom by helping students learn alongside their "past self".',
    org: 'GOODNOTES X INVENTION CORPS · 2ND PLACE',
    tags: [{ label: 'Product Design', filled: true }, { label: 'Designathon', filled: false }],
    image: '/images/sproutcard.svg',
  },
  {
    slug: 'studio-sessions',
    title: 'Studio Sessions',
    desc: 'Designed a live listening feature connecting artists and fans through hosted sessions and real-time interaction.',
    org: 'AMAZON MUSIC X DESIGN @ BERKELEY · 3RD PLACE',
    tags: [{ label: 'Product Design', filled: true }, { label: 'Designathon', filled: false }],
    image: '/images/studiosessions.svg',
  },
]

export default function Home() {
  return (
    <main>
      <section style={{ padding: '72px 0 96px' }}>
        <p style={{ fontSize: 13, color: '#555', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>
          harshini jayaprakash
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 38,
          fontWeight: 400,
          lineHeight: 1.25,
          maxWidth: 540,
          marginBottom: 20,
          color: '#1a1a1a',
        }}>
          I like to build products rooted in data, usability, and <em style={{ fontWeight: 600 }}>empathy.</em>
        </h1>
        <p style={{ fontSize: 13, color: '#2a2a2a', fontFamily: 'var(--font-mono)' }}>
          data science @ uc berkeley
        </p>
      </section>

      <section style={{ paddingBottom: 60 }}>
        <p className="label" style={{ marginBottom: 32 }}>SELECTED WORK</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px 24px',
        }}>
          {projects.map(p => (
            <Link
              to={`/${p.slug}`}
              key={p.slug}
              style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                width: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                marginBottom: 14,
                background: '#f0ede8',
              }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                {p.tags.map((t, i) => (
                  <span key={i} className={`tag ${t.filled ? 'tag--filled' : 'tag--outline'}`}>{t.label}</span>
                ))}
              </div>
              <p style={{
                fontSize: 10, letterSpacing: '0.15em', color: '#888',
                fontFamily: 'var(--font-mono)', marginBottom: 8,
              }}>
                {p.org}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, marginBottom: 8,
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: '#888', fontFamily: 'var(--font-mono)' }}>
                {p.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}