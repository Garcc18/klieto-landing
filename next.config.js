/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevents the page from being embedded in iframes (clickjacking protection)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevents browsers from MIME-sniffing the content type
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Controls how much referrer info is included with requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Restricts access to browser features not used by this site
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  // Forces HTTPS for 1 year (enable once the site is fully on HTTPS)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
]

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
