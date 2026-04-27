import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const sectionList = ['Context', 'Scope Overview', 'Research', 'Ideation', 'MVP Concept', 'Impact']

export default function Skip() {
  const [activeSection, setActiveSection] = useState('context')

  useEffect(function() {
    function handleScroll() {
      for (var i = 0; i < sectionList.length; i++) {
        var id = sectionList[i].toLowerCase().replace(/ /g, '-')
        var el = document.getElementById(id)
        if (el) {
          var rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(id)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return function() { window.removeEventListener('scroll', handleScroll) }
  }, [])

  function renderNav() {
    return sectionList.map(function(s) {
      var id = s.toLowerCase().replace(/ /g, '-')
      return (
        <a
        key={s}
          href={'#' + id}
          onClick={function(e) {
            e.preventDefault()
            var target = document.getElementById(id)
            if (target) target.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            fontSize: 11,
            fontFamily: 'var(--font-mono)',
            color: activeSection === id ? '#1a1a1a' : '#bbb',
            fontWeight: activeSection === id ? 500 : 400,
            transition: 'color 0.2s',
          }}
        >
          {s}
        </a>
      )
    })
  }

  return (
    <main style={{ maxWidth: 780, margin: '0 auto' }}>
      <Link to="/" style={{ fontSize: 12, color: '#888', display: 'inline-block', margin: '16px 0' }}>
        ← back to work
      </Link>

      <div style={{ width: '100%', borderRadius: 3, overflow: 'hidden', marginBottom: 24 }}>
        <img src="/images/fullskipbanner.svg" alt="Project Stardust" style={{ width: '100%', display: 'block' }} />
      </div>

      <div style={{ display: 'flex', padding: '20px 0 32px' }}>
        <div style={{ flex: 1 }}>
          <p className="label" style={{ marginBottom: 6 }}>TIMELINE</p>
          <p style={{ fontSize: 12, color: '#1a1a1a', lineHeight: 1.6 }}>Fall 2025</p>
        </div>
        <div style={{ flex: 1 }}>
          <p className="label" style={{ marginBottom: 6 }}>ROLE</p>
          <p style={{ fontSize: 12, color: '#1a1a1a', lineHeight: 1.6 }}>Product Innovation<br />Lead</p>
        </div>
        <div style={{ flex: 1 }}>
          <p className="label" style={{ marginBottom: 6 }}>TEAM</p>
          <p style={{ fontSize: 12, color: '#1a1a1a', lineHeight: 1.6 }}>Roshni Arun<br />Allison Yuh<br />Adri Alacasabas<br />Linda Lin<br />Lawrence Lo<br />Claire Lin</p>
        </div>
        <div style={{ flex: 1 }}>
          <p className="label" style={{ marginBottom: 6 }}>TOOLS</p>
          <p style={{ fontSize: 12, color: '#1a1a1a', lineHeight: 1.6 }}>Figma<br />AutoCAD<br />Blender</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <nav style={{
          position: 'sticky', top: 24, width: 140, flexShrink: 0,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {renderNav()}
        </nav>

        <div style={{ flex: 1, minWidth: 0 }}>

          <section id="context" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>CONTEXT</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 20 }}>
              24,000 US stillbirths a year, and yet most go undetected.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 24 }}>
              Growth-related fetal risks are largely invisible between clinical appointments. Existing monitoring tools are either clinic-only or overly complex which leaves expectant mothers anxious and underserved.
            </p>
            <blockquote style={{ borderLeft: '2px solid #e8748a', padding: '12px 20px', margin: '20px 0' }}>
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic',
                lineHeight: 1.5, color: '#e8748a', marginBottom: 6,
              }}>
                "How might we identify unmet needs in maternal health monitoring and design a product that is valuable, trusted, and aligned with how mothers want to experience care?"
              </p>
              <cite style={{ fontSize: 10, letterSpacing: '0.1em', color: '#999', textTransform: 'uppercase', fontStyle: 'normal' }}>
                The Guiding Question
              </cite>
            </blockquote>
          </section>

          <section id="scope-overview" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>SCOPE OVERVIEW</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a' }}>
              As the product manager on this contract initiative, I led a student team of 6 to conduct end-to-end discovery for a maternal health monitoring wearable (from problem framing through prototyping). The work culminated in MVP concept presented to Skip's board and a greenlit spinout: Project Stardust.
            </p>
          </section>

          <section id="research" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>RESEARCH</p>
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Research Methodology</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
              <div>
                <p style={{ fontSize: 11, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Research Flow</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ Literature review</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ Discovery Survey</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ Interviews</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ GO/NO-GO Validation</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ Concept Ideation</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ Expert feedback + Iteration</p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Targeted Groups</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ High-risk pregnancies</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ Second-time mothers</p>
                <p style={{ fontSize: 12, color: '#2a2a2a', padding: '3px 0' }}>→ First-time mothers</p>
              </div>
            </div>

            <div style={{ width: '100%', borderRadius: 3, overflow: 'hidden', marginBottom: 32 }}>
              <img src="/images/affinitymap.svg" alt="Affinity mapping" style={{ width: '100%', display: 'block' }} />
            </div>

            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Research Insights</p>

            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#ccc', minWidth: 28 }}>01</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Abnormal vs. Normal Symptoms</p>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7, marginBottom: 6 }}>Mothers feel most anxious between appointments and lack clarity on what is normal.</p>
                  <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic' }}>→ Users need continuous insight to reduce anxiety.</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#ccc', minWidth: 28 }}>02</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Overwhelming data</p>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7, marginBottom: 6 }}>Data without context increases stress rather than reducing it.</p>
                  <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic' }}>→ Raw numbers need plain-language translation.</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#ccc', minWidth: 28 }}>03</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Doctors are the most trusted source</p>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7, marginBottom: 6 }}>Mothers trust their doctors above all other sources.</p>
                  <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic' }}>→ The product must support, not replace, care providers.</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#ccc', minWidth: 28 }}>04</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Lightweight and comfortable</p>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7, marginBottom: 6 }}>Bulky belts and handheld devices feel impractical or intimidating.</p>
                  <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic' }}>→ Form factor must feel approachable and wearable daily.</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#ccc', minWidth: 28 }}>05</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>High(ish) willingness to pay</p>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7, marginBottom: 6 }}>Expected price was low, but mothers ultimately valued peace of mind over cost.</p>
                  <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic' }}>→ A premium product is viable if it earns trust.</p>
                </div>
              </div>
            </div>
          </section>

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

          <section id="mvp-concept" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>MVP CONCEPT</p>
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Wearable MVP Mockups</p>
            <div style={{ borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <img src="/images/fullwearabe.svg" alt="Full wearable view" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/backviewbelt.svg" alt="Belt back view" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/frontviewbelt.svg" alt="Belt front view" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/batteryonbelt.svg" alt="Battery on belt" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 3, overflow: 'hidden' }}>
                <img src="/images/fullviewbelt.svg" alt="Full belt view" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12, marginTop: 24 }}>Companion App Prototype</p>
            <div style={{ width: '100%', borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <iframe
                title="Stardust Companion App"
                style={{ width: '100%', height: 600, border: 'none', borderRadius: 3 }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOfJ9SAuqQIXxsuXYN0eobk%2FSkip-Design-Workspace%3Fnode-id%3D312-824%26p%3Df%26viewport%3D-42%252C-153%252C0.11%26t%3DzxrUnWHjdixsIFlI-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D312%253A824%26show-proto-sidebar%3D1%26page-id%3D251%253A328"
                allowFullScreen
              />
            </div>
          </section>

          <section id="impact" style={{ paddingBottom: 40 }}>
            <p className="label" style={{ marginBottom: 16 }}>IMPACT</p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: '#2a2a2a', marginBottom: 24 }}>
              The project was presented to Skip's board and received approval as a standalone spinout, launched as Project Stardust, an independent venture outside Skip's recreational catalog.
            </p>
            <div style={{
              background: '#f5f2ed', borderRadius: 6, padding: 24, marginBottom: 24,
              display: 'flex', gap: 24, alignItems: 'center',
            }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#e8748a' }}>
                  Project Stardust
                </p>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.7 }}>
                  Pioneering research for healthier pregnancies. A team of clinicians, engineers, and AI scientists exploring continuous monitoring technologies.
                </p>
                <a href="https://project-stardust.org/" target="_blank" rel="noopener" style={{
                  fontSize: 11, color: '#e8748a', textDecoration: 'underline', textUnderlineOffset: 3, marginTop: 8, display: 'inline-block',
                }}>
                  project-stardust.org →
                </a>
              </div>
              <div style={{ flexShrink: 0, width: 280, borderRadius: 4, overflow: 'hidden' }}>
                <img src="/images/projectstardustwebsite.svg" alt="Project Stardust website" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
