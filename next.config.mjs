/** @type {import("next").NextConfig} */
const nextConfig = {
  // The pages are files, not routes. beforeFiles runs ahead of Next's own
  // routing, so a request for /about is answered by the copy of /about
  // rather than by the placeholder page.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index.html"
        },
        {
          source: "/works",
          destination: "/works/index.html"
        },
        {
          source: "/works/",
          destination: "/works/index.html"
        },
        {
          source: "/services",
          destination: "/services/index.html"
        },
        {
          source: "/services/",
          destination: "/services/index.html"
        },
        {
          source: "/shots",
          destination: "/shots/index.html"
        },
        {
          source: "/shots/",
          destination: "/shots/index.html"
        },
        {
          source: "/about",
          destination: "/about/index.html"
        },
        {
          source: "/about/",
          destination: "/about/index.html"
        },
        {
          source: "/contact",
          destination: "/contact/index.html"
        },
        {
          source: "/contact/",
          destination: "/contact/index.html"
        },
        {
          source: "/careers",
          destination: "/careers/index.html"
        },
        {
          source: "/careers/",
          destination: "/careers/index.html"
        },
        {
          source: "/privacy",
          destination: "/privacy/index.html"
        },
        {
          source: "/privacy/",
          destination: "/privacy/index.html"
        },
        {
          source: "/terms",
          destination: "/terms/index.html"
        },
        {
          source: "/terms/",
          destination: "/terms/index.html"
        },
        {
          source: "/thank-you",
          destination: "/thank-you/index.html"
        },
        {
          source: "/thank-you/",
          destination: "/thank-you/index.html"
        },
        {
          source: "/404",
          destination: "/404/index.html"
        },
        {
          source: "/404/",
          destination: "/404/index.html"
        },
        {
          source: "/works/aeon-capital",
          destination: "/works/aeon-capital/index.html"
        },
        {
          source: "/works/aeon-capital/",
          destination: "/works/aeon-capital/index.html"
        },
        {
          source: "/works/mar-e",
          destination: "/works/mar-e/index.html"
        },
        {
          source: "/works/mar-e/",
          destination: "/works/mar-e/index.html"
        },
        {
          source: "/works/northbound",
          destination: "/works/northbound/index.html"
        },
        {
          source: "/works/northbound/",
          destination: "/works/northbound/index.html"
        },
        {
          source: "/works/studio-halst",
          destination: "/works/studio-halst/index.html"
        },
        {
          source: "/works/studio-halst/",
          destination: "/works/studio-halst/index.html"
        },
        {
          source: "/works/vector-type",
          destination: "/works/vector-type/index.html"
        },
        {
          source: "/works/vector-type/",
          destination: "/works/vector-type/index.html"
        },
        {
          source: "/works/cassio",
          destination: "/works/cassio/index.html"
        },
        {
          source: "/works/cassio/",
          destination: "/works/cassio/index.html"
        }
      ]
    }
  }
}

export default nextConfig
