import type { ReactNode } from "react"

export const metadata = { title: "Proiectum — Brand, Motion & Interface Studio" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style
          id="f2c-strip-template-badge"
          dangerouslySetInnerHTML={{
            __html: `[data-framer-name="Remix"],[name="Remix"],[data-framer-name="Team"],[name="Team"],[data-framer-name="Member"],[data-framer-name="Portrait"]{display:none!important}[data-framer-name*="delete me" i],[name*="delete me" i],[data-framer-name*="remove me" i],[name*="remove me" i],[data-framer-name*="remix button" i],[name*="remix button" i],[data-framer-name*="use for free" i],[name*="use for free" i],[data-framer-name*="buy template" i],[name*="buy template" i],[data-framer-name*="template badge" i],[name*="template badge" i],[data-framer-name*="template" i],a[href*="framer.link"],*:has(> a[href*="framer.link"]),a[href*="framer.com/templates"],*:has(> a[href*="framer.com/templates"]){display:none!important}a[href*="linkedin.com"],a[href*="x.com"],a[href*="dribbble.com"],*:has(> a[href*="linkedin.com"]),*:has(> a[href*="x.com"]),*:has(> a[href*="dribbble.com"]),*:has(> * > a[href*="linkedin.com"]),*:has(> * > a[href*="x.com"]),*:has(> * > a[href*="dribbble.com"]),.framer-1i2qss9,.framer-4zceq1,.framer-1rle27k,.framer-18i3fz8,[data-framer-name="Linkedin"],[data-framer-name="Twitter"],[data-framer-name="Dribbble"],[data-framer-name="X"]{display:none!important}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
