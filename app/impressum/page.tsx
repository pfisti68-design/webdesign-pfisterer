import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Webdesign-Pfisterer',
  description: 'Impressum und rechtliche Informationen von Webdesign-Pfisterer',
  robots: 'index, follow',
}

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white tracking-tight">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 space-y-12">
          {/* Betreiber */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              Angaben gemäß § 5 TMG
            </h2>

            <h3 className="text-lg font-black text-black dark:text-white mb-4 tracking-tight">
              Verantwortlich für den Inhalt:
            </h3>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 space-y-3 text-gray-700 dark:text-gray-300">
              <p className="font-black text-black dark:text-white">
                Michael Pfisterer
              </p>
              <p>
                Flein<br />
                74223 Flein<br />
                Deutschland
              </p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-black text-black dark:text-white mb-4 tracking-tight">
              Kontaktangaben:
            </h3>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-black text-black dark:text-white">E-Mail:</span>{' '}
                <a href="mailto:pfisti68@gmail.com" className="text-primary hover:opacity-80 font-black">
                  pfisti68@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Geschäftsform */}
          <div>
            <h3 className="text-lg font-black text-black dark:text-white mb-4 tracking-tight">
              Geschäftsform:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Freiberufler – Webdesigner und Webentwickler
            </p>
          </div>

          {/* Berufsbezeichnung */}
          <div>
            <h3 className="text-lg font-black text-black dark:text-white mb-4 tracking-tight">
              Berufsbezeichnung:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Webdesigner und Webentwickler
            </p>
          </div>

          {/* Haftung */}
          <div className="pt-8 border-t-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              Haftung für Inhalte
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              Haftung für Links
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              Urheberrecht
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Schöpfers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
