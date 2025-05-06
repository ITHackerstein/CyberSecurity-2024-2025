import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import type { Metadata } from 'next'
import './globals.css'
import BootstrapClient from '@/components/BootstrapClient.js'

export const metadata: Metadata = {
  title: 'CyberSecurity 2024/2025 - CVE-2025-29927 in Next.JS',
  description: 'A demo showing off the exploit of the CVE-2025-29927 vulnerability in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <main>
          <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">CVE-2025-29927</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                  </ul>
                  <a className="nav-link" type="button" href="/login">
                    <i className="bi bi-person-circle me-2"></i>
                    Login
                  </a>
                </div>
              </div>
            </nav>
          </header>
          {children}
          <BootstrapClient />
        </main>
      </body>
    </html>
  )
}
