import React from 'react'
import { Link } from 'react-router'
const Error = () => {
    return (
      <div data-theme="dim">
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', minHeight: '100vh', padding: '3rem 1.5rem',
    textAlign: 'center', fontFamily: 'sans-serif',
    background: 'oklch(var(--b1))',   // DaisyUI base color — respects dim theme
    color: 'oklch(var(--bc))',        // DaisyUI base content color
  }}>
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ marginBottom: '1.5rem' }}>
      <circle cx="36" cy="36" r="35" stroke="oklch(var(--bc) / 0.2)" strokeWidth="0.5" />
      <circle cx="36" cy="36" r="28" fill="oklch(var(--b2))" />
      <path d="M36 24v16" stroke="oklch(var(--bc))" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="47" r="2" fill="oklch(var(--bc))" />
    </svg>

    <p style={{ fontSize: '96px', fontWeight: 500, lineHeight: 1, letterSpacing: '-4px', margin: '0 0 0.5rem' }}>
      404
    </p>
    <h1 style={{ fontSize: '22px', fontWeight: 500, margin: '0 0 0.75rem' }}>
      Page not found
    </h1>
    <p style={{ fontSize: '16px', color: 'oklch(var(--bc) / 0.6)', maxWidth: '380px', lineHeight: 1.7, margin: '0 auto 2rem' }}>
      We couldn't find the page you were looking for. It may have been moved or deleted.
    </p>

    <Link
      to='/'
      style={{
        color: 'oklch(var(--bc))',
        border: '0.5px solid oklch(var(--bc) / 0.3)',
        borderRadius: '8px',
        padding: '10px 22px',
        fontSize: '15px',
        textDecoration: 'none',
      }}
    >
      Go to home
    </Link>

    <p style={{ marginTop: '2.5rem', fontSize: '13px', color: 'oklch(var(--bc) / 0.4)' }}>
      Error ID: <span style={{ background: 'oklch(var(--b2))', borderRadius: '6px', padding: '4px 10px', fontFamily: 'monospace' }}>
        ERR_404_7f3a9c
      </span>
    </p>
  </div>
</div>
    )
}

export default Error