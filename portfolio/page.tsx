export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-6">Portfolio</span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-gray-900 dark:text-white">
            Referenzen von<br />
            echten Projekten
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Keine Template-Websites. Echte Projekte mit echten Ergebnissen für kleine und mittelständische Unternehmen.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Elektroinstallation Wagner',
                industry: 'Handwerk',
                desc: 'Website-Relaunch mit modernem Design und klarer Kundenführung.',
                metrics: '+150% Kundenanfragen'
              },
              {
                title: 'Restaurant Zur Post',
                industry: 'Gastronomie',
                desc: 'Webseite mit Online-Reservierungssystem und digitaler Speisekarte.',
                metrics: '+200% Reservierungen'
              },
              {
                title: 'Steuerberatung Müller',
                industry: 'Dienstleistung',
                desc: 'Website-Relaunch mit SEO-Optimierung für lokale Keywords.',
                metrics: '+300% organischer Traffic'
              },
              {
                title: 'Zahnarzt Dr. Schmidt',
                industry: 'Medizin',
                desc: 'Moderne Praxiswebsite mit Online-Terminbuchung.',
                metrics: '+180% neue Patienten'
              },
              {
                title: 'Fashion Shop TREND',
                industry: 'Einzelhandel',
                desc: 'E-Commerce-Plattform mit Click&Collect und lokaler SEO.',
                metrics: '+250% Online-Umsatz'
              },
              {
                title: 'Sportverein TG Heilbronn',
                industry: 'Non-Profit',
                desc: 'Community-Website mit Terminkalender und Mitgliederverwaltung.',
                metrics: '+120% neue Mitglieder'
              }
            ].map((project, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-pink-600 hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-pink-100 to-pink-50 dark:from-gray-700 dark:to-gray-800"></div>
                <div className="p-8">
                  <span className="text-pink-600 font-black text-xs">{project.industry}</span>
                  <h3 className="text-xl font-black mt-4 mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{project.desc}</p>
                  <p className="text-pink-600 font-black">{project.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-black text-pink-600 mb-4">250+</div>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">Projekte realisiert</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-pink-600 mb-4">12+</div>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-pink-600 mb-4">95%</div>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">Empfehlungsquote</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">
            Dein Projekt könnte das nächste sein
          </h2>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-pink-600 text-white font-black rounded-lg hover:bg-pink-700 transition text-lg"
          >
            Unverbindliche Beratung buchen
          </a>
        </div>
      </section>
    </>
  )
}
