import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webdesign-Pfisterer | Hochwertige Websites für KMU',
  description: 'Wir entwickeln moderne, vertrauenswürdige Websites für kleine und mittelständische Unternehmen im Raum Heilbronn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-6 flex justify-between items-center">
            <a href="/" className="text-2xl font-black">
              WDP
            </a>
            <div className="flex gap-8 items-center">
              <a href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Home</a>
              <a href="/services" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Services</a>
              <a href="/portfolio" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Portfolio</a>
              <a href="/kontakt" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Kontakt</a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div>
                <h3 className="font-black text-lg mb-4">Webdesign-Pfisterer</h3>
                <p className="text-gray-600 dark:text-gray-400">Websites, die Kunden gewinnen.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-4">Navigation</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li><a href="/services" className="hover:text-gray-900 dark:hover:text-white">Services</a></li>
                  <li><a href="/portfolio" className="hover:text-gray-900 dark:hover:text-white">Portfolio</a></li>
                  <li><a href="/kontakt" className="hover:text-gray-900 dark:hover:text-white">Kontakt</a></li>
                  <li><a href="/ueber-mich" className="hover:text-gray-900 dark:hover:text-white">Über mich</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-black text-lg mb-4">Kontakt</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Email: kontakt@webdesign-pfisterer.de<br/>
                  Telefon: +49 7131 123456
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2026 Webdesign-Pfisterer. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
