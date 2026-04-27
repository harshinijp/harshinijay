import { Link } from 'react-router-dom'

export default function Skip() {
  return (
    <main style={{ maxWidth: 780, margin: '0 auto' }}>
      <Link to="/" style={{ fontSize: 12, color: '#888', display: 'inline-block', margin: '16px 0' }}>
        ← back to work
      </Link>

      {/* Hero */}
      <div style={{ width: '100%', borderRadius: 3, overflow: 'hidden', marginBottom: 24 }}>
        <img src="/images/fullskipbanner.svg" alt="Project Stardust" style={{ width: '100%', display: 'block' }} />
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', padding: '20px 0 32px' }}>
        {[
          { label: 'TIMELINE', value: 'Fall 2025' },
          { label: 'ROLE', value: 'Product Innovation\nLead' },
          { label: 'TEAM', value: 'Roshni Arun\nAllison Yuh\nAdri Alacasabas\nLinda Lin\nLawrence Lo\nClaire Lin' },
          { label: 'TOOLS', value: 'Figma\nAutoCAD\nBlender\nNotion' },
        ].map((m, i) => (
          <div key={i} style={{ flex: 1 }}>
            <p className="label" style={{ marginBottom: 6 }}>{m.label}</p>
            <p style={{ fontSize: 12, color: '#1a1a1a', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{m.value}</p>
          </div>
        ))}
      </div>

      {/* Layout */}
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <nav style={{
          position: 'sticky', top: 24, width: 140, flexShrink: 0,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {['Context', 'Scope Overview', 'Research', 'Ideation', 'MVP Concept', 'Impact'].map(s => (
            <a key={s} href={`#${s.toLowerCase().replace(/ /g, '-')}`} style={{
              fontSize: 11, color: '#999', fontFamily: 'var(--font-mono)',
            }}>{s}</a>
          ))}
        </nav>

        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Context */}
          <section id="context" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>CONTEXT</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 20 }}>
              24,000 US stillbirths a year, and yet most go undetected.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 24 }}>
              Growth-related fetal risks are largely invisible between clinical appointments. Existing monitoring tools are either clinic-only or overly complex which leaves expectant mothers anxious and underserved.
            </p>
            <blockquote style={{ borderLeft: '2px solid #1a1a1a', padding: '12px 20px', margin: '20px 0' }}>
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic',
                lineHeight: 1.5, color: '#1a1a1a', marginBottom: 6,
              }}>
                "How might we identify unmet needs in maternal health monitoring and design a product that is valuable, trusted, and aligned with how mothers want to experience care?"
              </p>
              <cite style={{ fontSize: 10, letterSpacing: '0.1em', color: '#999', textTransform: 'uppercase', fontStyle: 'normal' }}>
                The Guiding Question
              </cite>
            </blockquote>
          </section>

          {/* Scope Overview */}
          <section id="scope-overview" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>SCOPE OVERVIEW</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a' }}>
              As the product manager on this contract initiative, I led a student team of 6 to conduct end-to-end discovery for a maternal health monitoring wearable (from problem framing through prototyping). The work culminated in MVP concept presented to Skip's board and a greenlit spinout: Project Stardust.
            </p>
          </section>

          {/* Research */}
          <section id="research" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>RESEARCH</p>

            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Research Methodology</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
              <div>
                <p style={{ fontSize: 11, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Research Flow</p>
                {['Literature review', 'Discovery Survey', 'Interviews', 'GO/NO-GO Validation', 'Concept Ideation', 'Expert feedback + Iteration'].map((s, i) => (
                  <p key={i} style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ {s}</p>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Targeted Groups</p>
                {['High-risk pregnancies', 'Second-time mothers', 'First-time mothers'].map((s, i) => (
                  <p key={i} style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ {s}</p>
                ))}
              </div>
            </div>

            {/* Affinity Map */}
            <div style={{ width: '100%', borderRadius: 3, overflow: 'hidden', marginBottom: 32 }}>
              <img src="/images/affinitymap.svg" alt="Affinity mapping" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Insights */}
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Research Insights</p>
            {[
              { num: '01', title: 'Abnormal vs. Normal Symptoms', body: 'Mothers feel most anxious between appointments and lack clarity on what is normal.', implication: 'Users need continuous insight to reduce anxiety.' },
              { num: '02', title: 'Overwhelming data', body: 'Data without context increases stress rather than reducing it.', implication: 'Raw numbers need plain-language translation.' },
              { num: '03', title: 'Doctors are the most trusted source', body: 'Mothers trust their doctors above all other sources.', implication: 'The product must support, not replace, care providers.' },
              { num: '04', title: 'Lightweight and comfortable', body: 'Bulky belts and handheld devices feel impractical or intimidating.', implication: 'Form factor must feel approachable and wearable daily.' },
              { num: '05', title: 'High(ish) willingness to pay', body: 'Expected price was low, but mothers ultimately valued peace of mind over cost.', implication: 'A premium product is viable if it earns trust.' },
            ].map(insight => (
              <div key={insight.num} style={{ padding: '16px 0' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#ccc', minWidth: 28 }}>{insight.num}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{insight.title}</p>
                    <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7, marginBottom: 6 }}>{insight.body}</p>
                    <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic' }}>→ {insight.implication}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Ideation */}
          <section id="ideation" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>CONCEPT IDEATION</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 24 }}>
              Initial ideation spanned belly bands, patch-based sensors, clip-on sensors, and a wildcard boxer-brief concept. We evaluated each against our five key insights, converging on a modular monitoring belt with a detachable sensor array and companion app.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/beltsketch.svg" alt="Belt sketch" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/boxerbriefs.svg" alt="Boxer briefs concept" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            <div style={{ borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <img src="/images/appsketch.svg" alt="App concept sketch" style={{ width: '100%', display: 'block' }} />
            </div>

            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Concept Finalization</p>
            <div style={{ borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <img src="/images/finalbeltconcept.svg" alt="Final belt concept" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <img src="/images/finalappconcept.svg" alt="Final app concept" style={{ width: '100%', display: 'block' }} />
            </div>
          </section>

          {/* MVP Concept */}
          <section id="mvp-concept" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>MVP CONCEPT</p>

            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Wearable MVP Mockups</p>

            {/* Full wearable */}
            <div style={{ borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <img src="/images/fullwearabe.svg" alt="Full wearable view" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Belt views */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/backviewbelt.svg" alt="Belt back view" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/frontviewbelt.svg" alt="Belt front view" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Battery */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/batteryonbelt.svg" alt="Battery on belt" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/fullviewbelt.svg" alt="Full belt view" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Companion App */}
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12, marginTop: 24 }}>Companion App Prototype</p>
            <div style={{
              width: '100%', borderRadius: 3, overflow: 'hidden', marginBottom: 16,
            }}>
              {/* Replace with Figma embed when ready */}
              <div style={{ width: '100%', height: 500, background: '#f0ede8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 11 }}>
                [ Figma prototype embed goes here ]
              </div>
            </div>
          </section>

          {/* Impact */}
          <section id="impact" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>IMPACT</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 24 }}>
              The project was presented to Skip's board and received approval as a standalone spinout, launched as Project Stardust, an independent venture outside Skip's recreational catalog.
            </p>

            <div style={{
              background: '#f5f2ed', borderRadius: 6, padding: 24,
              display: 'flex', gap: 24, alignItems: 'center',
            }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
                  Project Stardust
                </p>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.7 }}>
                  Pioneering research for healthier pregnancies. A team of clinicians, engineers, and AI scientists exploring continuous monitoring technologies.
                </p>
                <a href="https://project-stardust.org/" target="_blank" rel="noopener" style={{
                  fontSize: 11, color: '#1a1a1a', textDecoration: 'underline', textUnderlineOffset: 3, marginTop: 8, display: 'inline-block',
                }}>
                  project-stardust.org →
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}