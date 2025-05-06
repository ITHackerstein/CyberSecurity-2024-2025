import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simulating an authentication state - in a real app this would check session/tokens
const isAuthenticated = false

// Standard middleware that checks for authentication
export function middleware(request: NextRequest) {
  // Log request info
  console.log('Middleware executing for path:', request.nextUrl.pathname)
  console.log('Headers:')
  const headerEntries = Array.from(request.headers.entries())
  headerEntries.forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`)
  })

  // Check specifically for the exploit header
  const hasExploitHeader = request.headers.has('x-middleware-subrequest')
  const exploitValue = request.headers.get('x-middleware-subrequest')
  console.log('x-middleware-subrequest present:', hasExploitHeader)
  console.log('x-middleware-subrequest value:', exploitValue)

  // Check if the request is for the protected route
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check if user is authenticated
    if (!isAuthenticated) {
      console.log('Auth failed - redirecting to /')
      // Redirect to the home page if not authenticated
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

// Configure middleware to run on specific paths
export const config = {
  matcher: ['/dashboard/:path*'],
}
