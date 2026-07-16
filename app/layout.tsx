import type { Metadata } from 'next'
import { Syne, Poppins } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Webdesign-Pfisterer | Hochwertige Websites für KMU',
  description: 'Wir entwickeln moderne, vertrauenswürdige Websites für kleine und mittelständische Unternehmen im Raum Heilbronn.',
  generator: 'Next.js',
  applicationName: 'Webdesign-Pfisterer',
  keywords: ['Webdesign', 'Website', 'Heilbronn', 'KMU', 'Relaunch', 'SEO'],
  authors: [{ name: 'Webdesign-Pfisterer', url: 'https://webdesign-pfisterer.de' }],
  creator: 'Webdesign-Pfisterer',
  metadataBase: new URL('https://webdesign-pfisterer.de'),
  alternates: {
    canonical: 'https://webdesign-pfisterer.de',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://webdesign-pfisterer.de',
    siteName: 'Webdesign-Pfisterer',
    title: 'Webdesign-Pfisterer | Hochwertige Websites für KMU',
    description: 'Wir entwickeln moderne, vertrauenswürdige Websites für kleine und mittelständische Unternehmen im Raum Heilbronn.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Webdesign-Pfisterer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign-Pfisterer',
    description: 'Hochwertige Websites für KMU',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${syne.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 font-poppins">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Webdesign-Pfisterer" className="h-10 md:h-12 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-900 hover:text-primary font-medium transition-colors">Home</a>
              <a href="/services" className="text-gray-900 hover:text-primary font-medium transition-colors">Services</a>
              <a href="/portfolio" className="text-gray-900 hover:text-primary font-medium transition-colors">Portfolio</a>
              <a href="/prozess" className="text-gray-900 hover:text-primary font-medium transition-colors">Prozess</a>
              <a href="/ueber-mich" className="text-gray-900 hover:text-primary font-medium transition-colors">Über mich</a>
              <a href="/kontakt" className="text-gray-900 hover:text-primary font-medium transition-colors">Kontakt</a>
            </div>
            <div className="hidden md:block">
              <a href="/kontakt" style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }} className="inline-flex px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-all">
                Projekt besprechen
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-16">
              {/* Left: Brand & CTA (2 cols) */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-3xl font-black mb-3 leading-tight">Webdesign-Pfisterer</h3>
                  <p className="text-gray-300 text-base leading-relaxed">Hochwertige, moderne Websites für KMU im Raum Heilbronn. Wir bauen nicht nur Websites – wir bauen dein Business auf.</p>
                </div>

                {/* Newsletter */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                  <h4 className="font-black text-white mb-2 text-base">Newsletter</h4>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">Tipps & Trends rund um Web, Design & Growth direkt in dein Postfach.</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="deine@email.de"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm"
                    />
                    <button style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }} className="px-5 py-2.5 rounded-lg font-black text-white hover:opacity-90 transition-all">
                      →
                    </button>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="font-black text-white mb-3 text-base">Follow us</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary border border-white/20 flex items-center justify-center font-black text-sm transition-all hover:border-primary">
                      f
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary border border-white/20 flex items-center justify-center font-black text-sm transition-all hover:border-primary">
                      in
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary border border-white/20 flex items-center justify-center font-black text-sm transition-all hover:border-primary">
                      IG
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Links Grid (3 cols) */}
              <div className="md:col-span-3 grid grid-cols-2 gap-8 md:gap-16">
                {/* Services */}
                <div>
                  <h4 className="font-black text-white mb-4 text-sm tracking-tight">Services</h4>
                  <ul className="space-y-2.5">
                    <li><a href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Webdesign</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Relaunch</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">SEO</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Wartung</a></li>
                  </ul>
                </div>

                {/* Navigation */}
                <div>
                  <h4 className="font-black text-white mb-4 text-sm tracking-tight">Entdecke</h4>
                  <ul className="space-y-2.5">
                    <li><a href="/" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Home</a></li>
                    <li><a href="/portfolio" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Portfolio</a></li>
                    <li><a href="/ueber-mich" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Über mich</a></li>
                    <li><a href="/kontakt" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block">Kontakt</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-12"></div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h4 className="font-black text-white mb-3">Kontakt</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p><a href="mailto:pfisti68@gmail.com" className="hover:text-primary transition-colors font-medium">pfisti68@gmail.com</a></p>
                  <p>Flein bei Heilbronn</p>
                  <p className="text-xs text-gray-400 mt-4">Erreichbar Mo-Fr 09:00-17:00</p>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="text-center">
                <a href="/kontakt" style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }} className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-black text-white hover:opacity-90 transition-all">
                  Projekt starten →
                </a>
              </div>

              {/* Legal */}
              <div className="text-right">
                <div className="flex flex-col md:flex-row gap-6 justify-end text-sm">
                  <a href="/impressum" className="hover:text-primary transition-colors">Impressum</a>
                  <a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
              <p>© 2026 Webdesign-Pfisterer. Alle Rechte vorbehalten. 🚀</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
