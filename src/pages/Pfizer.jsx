import { useState } from 'react'

export default function Pfizer() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 0' }}>

      {/* Blurred preview behind */}
      <div style={{
        position: 'absolute', inset: 0, filter: 'blur(4px)', opacity: 0.35, pointerEvents: 'none',
        display: 'flex', flexDirection: 'column', gap: 16, padding: '48px 0',
      }}>
        <div style={{ width: '100%', height: 240, background: 'linear-gradient(135deg, #e8e5df, #d6d2cb)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 48, color: 'rgba(26,26,26,0.1)' }}>Pfizer</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Timeline', 'Role', 'Team'].map(l => (
            <div key={l}>
              <p style={{ fontSize: 9, letterSpacing: '0.1em', color: '#ddd', textTransform: 'uppercase', marginBottom: 4 }}>{l}</p>
              <div style={{ width: 80, height: 10, background: '#eee', borderRadius: 2 }} />
            </div>
          ))}
        </div>
        {[100, 80, 55, 100, 75].map((w, i) => (
          <div key={i} style={{ width: `${w}%`, height: 10, background: '#f0ede8', borderRadius: 2 }} />
        ))}
      </div>

      {/* Modal */}
      {!submitted ? (
        <div style={{
          position: 'relative', zIndex: 10, background: '#fff', borderRadius: 6,
          width: 420, maxWidth: '92vw', padding: '36px 32px 32px',
        }}>
          <div style={{
            width: 36, height: 36, border: '1px solid #e8e5e0', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 118 0v4" />
            </svg>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, marginBottom: 8,
          }}>
            This case study is protected.
          </h2>
          <p style={{ fontSize: 11, color: '#999', lineHeight: 1.75, marginBottom: 28, fontFamily: 'var(--font-mono)' }}>
            Due to the sensitive nature of this work, access to the full Pfizer case study is available on request. Fill out the form below and I'll get back to you with a password.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <label style={{ display: 'block', fontSize: 9, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: 5 }}>Name</label>
                <input required placeholder="Your name" style={{
                  width: '100%', padding: '9px 11px', border: '1px solid #e8e5e0', borderRadius: 3,
                  background: '#fafaf8', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#1a1a1a', outline: 'none', marginBottom: 14,
                }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 9, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: 5 }}>Email</label>
                <input required type="email" placeholder="you@company.com" style={{
                  width: '100%', padding: '9px 11px', border: '1px solid #e8e5e0', borderRadius: 3,
                  background: '#fafaf8', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#1a1a1a', outline: 'none', marginBottom: 14,
                }} />
              </div>
            </div>

            <label style={{ display: 'block', fontSize: 9, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: 5 }}>Company / University</label>
            <input placeholder="Where you work or study" style={{
              width: '100%', padding: '9px 11px', border: '1px solid #e8e5e0', borderRadius: 3,
              background: '#fafaf8', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#1a1a1a', outline: 'none', marginBottom: 14,
            }} />

            <label style={{ display: 'block', fontSize: 9, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: 5 }}>Why would you like access?</label>
            <textarea placeholder="e.g. I'm a recruiter reviewing your portfolio..." style={{
              width: '100%', padding: '9px 11px', border: '1px solid #e8e5e0', borderRadius: 3,
              background: '#fafaf8', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#1a1a1a', outline: 'none',
              resize: 'vertical', minHeight: 72, marginBottom: 20,
            }} />

            <button type="submit" style={{
              width: '100%', padding: '11px 16px', background: '#1a1a1a', color: '#f5f2ed',
              border: 'none', borderRadius: 3, fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.08em', cursor: 'pointer',
            }}>
              request access
            </button>
          </form>

          <p style={{ fontSize: 9.5, color: '#ccc', textAlign: 'center', marginTop: 16, lineHeight: 1.65 }}>
            I typically respond within 24 hours.<br />
            You can also reach me at harshinijay@berkeley.edu
          </p>
        </div>
      ) : (
        <div style={{
          position: 'relative', zIndex: 10, background: '#fff', borderRadius: 6,
          width: 420, maxWidth: '92vw', padding: '48px 32px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 24, marginBottom: 16 }}>✓</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 400, marginBottom: 8,
          }}>
            Request sent!
          </h2>
          <p style={{ fontSize: 11, color: '#999', lineHeight: 1.75, fontFamily: 'var(--font-mono)' }}>
            Thanks for your interest. I'll get back to you within 24 hours with access details.
          </p>
        </div>
      )}
    </main>
  )
}
