export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-6">Über mich</span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-gray-900 dark:text-white">
            Hochwertige Websites<br />
            ist meine Leidenschaft
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Ich bin Michael Pfisterer, Webdesigner und Entwickler aus Heilbronn. Seit 12+ Jahren helfe ich KMU, ihre Ziele durch Websites zu erreichen.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-4">Die Geschichte</span>
          <h2 className="text-5xl font-black mb-12 text-gray-900 dark:text-white">
            Wie ich Webdesigner wurde
          </h2>

          <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Alles begann 2014, als ich meine erste Website für einen lokalen Handwerksbetrieb baute. Der Unternehmer war begeistert – innerhalb von drei Monaten bekam er die erste Anfrage über Google. Das war der Moment, in dem ich wusste: Das ist meine Berufung.
            </p>

            <p>
              Seitdem habe ich über 250 Projekte für kleine und mittelständische Unternehmen umgesetzt. Jedes Projekt hat mir beigebracht, dass eine gute Website nicht nur schön aussehen muss – sie muss Ergebnisse liefern.
            </p>

            <p>
              Meine Mission ist einfach: Ich helfe Unternehmen im Raum Heilbronn, online sichtbar zu sein und mehr Kunden zu gewinnen. Dafür arbeite ich mit modernen Technologien, bewährten Strategien und viel Liebe zum Detail.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-4">Meine Werte</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            Das ist mir wichtig
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualität vor Schnelligkeit',
                desc: 'Ich mache keine Billig-Websites. Jedes Projekt bekommt die Zeit und Aufmerksamkeit, die es verdient.'
              },
              {
                title: 'Transparenz & Vertrauen',
                desc: 'Keine versteckten Kosten, klare Kommunikation und ehrliche Einschätzungen – immer.'
              },
              {
                title: 'Ergebnisse statt Versprechen',
                desc: 'Am Ende zählen die Ergebnisse: mehr Kunden, bessere Rankings, höherer Umsatz.'
              },
              {
                title: 'Kontinuierliches Lernen',
                desc: 'Die Web-Technologie ändert sich ständig. Ich bleibe auf dem neuesten Stand.'
              },
              {
                title: 'Kundenerfolg ist mein Erfolg',
                desc: 'Dein Erfolg ist mein Erfolg. Ich stelle sicher, dass du wirklich profitierst.'
              },
              {
                title: 'Technische Exzellenz',
                desc: 'Modernes Code, Performance, SEO, Sicherheit – alles auf höchstem Level.'
              }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-4">Expertise</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            Womit ich arbeite
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-white">Technologien</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Next.js & React
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Node.js & API-Development
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-white">Services</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Webdesign & Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Website-Relaunch
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  SEO-Optimierung
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Website-Wartung & Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">
            Lass uns zusammenarbeiten
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Ich freue mich auf eine Zusammenarbeit mit dir!
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-pink-600 text-white font-black rounded-lg hover:bg-pink-700 transition text-lg"
          >
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </>
  )
}
