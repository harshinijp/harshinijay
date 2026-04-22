const education = [
    { title: 'UC Berkeley', sub: 'B.A. Data Science', date: '2024–2026' },
    { title: 'Ohlone College', sub: 'A.S. Natural Science: Math and Technology Emphasis', date: '2022–2024' },
  ]
  
  const work = [
    { title: 'Pfizer', sub: 'Data Science Intern', date: 'Jun 2025 - Aug 2025' },
    { title: 'Undergraduate Research Apprentice', sub: 'University of California, San Francisco', date: 'Sep 2024 - May 2025' },
    { title: 'Research Assistant', sub: 'San Jose State University, College of Engineering', date: 'Jun 2024 - Aug 2024' },
    { title: 'Ohlone College Tutoring Center', sub: 'Computer Science Embedded & Lab Tutor', date: 'Aug 2023 - May 2024' },
    { title: 'Software Development Intern', sub: 'Santa Clara University, Frugal Innovation Hub', date: 'Jun 2023 - Aug 2022' },
  ]
  
  const contracts = [
    { title: 'Urban Conga', sub: 'Product Design Advisor · Contract', date: 'Spring 2026' },
    { title: 'Skip', sub: 'Product Innovation Lead · Contract', date: 'Fall 2025' },
    { title: 'Urban Outfitters', sub: 'Strategy Consultant · Contract', date: 'Spring 2025' },
    { title: 'Noora Health', sub: 'Data Consultant · Contract', date: 'Spring 2025' },
    { title: 'Café 15', sub: 'Customer Experience Consultant · Contract', date: 'Spring 2025' },
    { title: 'Cengage', sub: 'Product Design Consultant · Contract', date: 'Fall 2024' },
  ]
  
  function Section({ label, items }) {
    return (
      <section style={{ padding: '36px 0' }}>
        <p className="label" style={{ marginBottom: 24 }}>{label}</p>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            padding: '12px 0',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 600, marginBottom: 3,
              }}>{item.title}</p>
              <p style={{ fontSize: 12, color: '#888', fontFamily: 'var(--font-mono)' }}>{item.sub}</p>
            </div>
            <p style={{
              fontSize: 11, color: '#888', letterSpacing: '0.1em',
              whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', textTransform: 'uppercase',
            }}>{item.date}</p>
          </div>
        ))}
      </section>
    )
  }
  
  export default function Resume() {
    return (
      <main>
        <section style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          padding: '48px 0 20px', gap: 32,
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 600, marginBottom: 14,
            }}>
              Harshini Jayaprakash
            </h1>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.65,
              color: '#2a2a2a', marginBottom: 20, maxWidth: 480,
            }}>
              Senior at UC Berkeley majoring in Data Science (Business + Industrial Analytics Emphasis), with an affinity for building user-centric products.
            </p>
            <p style={{ fontSize: 12, color: '#888', marginBottom: 12, fontFamily: 'var(--font-mono)' }}>
              Interested in contacting me? Say hello via
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="mailto:harshinijay@berkeley.edu" className="btn-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
                email
              </a>
              <a href="https://www.linkedin.com/in/harshinijayaprakash/" target="_blank" rel="noopener" className="btn-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <path d="M7 10v7M7 7v.5" strokeLinecap="round" />
                  <path d="M11 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4M11 10v7" strokeLinecap="round" />
                </svg>
                linkedin
              </a>
            </div>
          </div>
          <div style={{ paddingTop: 48, flexShrink: 0 }}>
            <a href="/Harshini_Jayaprakash_Resume.pdf" download className="btn-dark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v13M7 11l5 5 5-5" />
                <path d="M4 20h16" />
              </svg>
              DOWNLOAD RESUME
            </a>
          </div>
        </section>
  
        <Section label="EDUCATION" items={education} />
        <Section label="WORK EXPERIENCE" items={work} />
        <Section label="CONTRACT WORK" items={contracts} />
      </main>
    )
  }