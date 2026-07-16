export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-6">Webdesign für KMU</span>
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-gray-900 dark:text-white">
              Websites, die Kunden<br />
              <span className="text-pink-600">gewinnen</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
              Moderne, schnelle und vertrauenswürdige Websites für kleine und mittelständische Unternehmen. Von Konzept bis Launch – alles aus einer Hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-10 py-4 bg-pink-600 text-white font-black rounded-lg hover:bg-pink-700 transition"
              >
                Projekt besprechen
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-black rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                Services entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Moderne Technologie',
                desc: 'Next.js, Tailwind CSS, blitzschnell und SEO-optimiert.'
              },
              {
                title: 'Vollständig Responsive',
                desc: 'Perfekt auf Handy, Tablet und Desktop. Überall gleich gut.'
              },
              {
                title: 'Vertrauenswürdig',
                desc: '12+ Jahre Erfahrung, 250+ Projekte, viele zufriedene Kunden.'
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-4">Portfolio</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            Referenzen von echten Projekten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Elektroinstallation Wagner', industry: 'Handwerk', metrics: '+150% Anfragen' },
              { title: 'Restaurant Zur Post', industry: 'Gastronomie', metrics: '+200% Reservierungen' },
              { title: 'Steuerberatung Müller', industry: 'Dienstleistung', metrics: '+300% Traffic' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-pink-600 transition">
                <span className="text-pink-600 font-black text-xs">{item.industry}</span>
                <h3 className="text-xl font-black mt-4 mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-pink-600 font-black">{item.metrics}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-10 py-4 bg-pink-600 text-white font-black rounded-lg hover:bg-pink-700 transition"
            >
              Alle Projekte anschauen
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-4">So funktioniert's</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            Transparenter Prozess vom Start bis Launch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: '1', title: 'Erstgespräch', desc: 'Wir verstehen dein Business und deine Ziele.' },
              { number: '2', title: 'Konzept', desc: 'Modernes Design und klare Strategie.' },
              { number: '3', title: 'Launch', desc: 'Deine Website ist live und bringt Kunden.' }
            ].map((step, i) => (
              <div key={i}>
                <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center font-black text-2xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">
            Bereit, dein Projekt zu starten?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Kontaktiere mich für ein kostenloses Erstgespräch. Kein Risiko, keine versteckten Kosten.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-pink-600 text-white font-black rounded-lg hover:bg-pink-700 transition text-lg"
          >
            Kostenlose Beratung buchen
          </a>
        </div>
      </section>
    </>
  )
}
