export default function Dashboard() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f33',
      color: 'white',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Protected Content</h1>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          If you see this page, the middleware bypass exploit worked!
        </p>
        <p style={{ fontSize: '1.25rem' }}>
          This page should only be accessible to authenticated users, but the exploit header allowed
          bypassing the authentication check in middleware.
        </p>
      </div>
    </div>
  )
}
