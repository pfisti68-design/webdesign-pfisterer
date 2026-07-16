import type { Metadata } from 'next'

export const metadata = {
  title: 'Über mich | Webdesign-Pfisterer',
  description: 'Wer ich bin, warum ich Websites baue und was mich antreibt. Persönliche & zuverlässige Webdesign-Beratung im Raum Heilbronn.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="text-primary font-black text-xs tracking-widest uppercase">Über mich</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Hochwertige Websites</span>
            <br />
            <span className="text-primary">ist meine Leidenschaft</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Ich bin Michael Pfisterer, Webdesigner und Entwickler aus der Region Heilbronn. Seit mehr als 12 Jahren helfe ich KMU und Einzelunternehmern, ihre Ziele durch Websites zu erreichen.
          </p>

          {/* CTA */}
          <a
            href="/kontakt"
            style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90"
          >
            Lass mich dein Projekt kennenlernen
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Die Geschichte</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
            <span className="text-black dark:text-white">Wie ich Webdesigner wurde</span>
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

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Meine Werte</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            <span className="text-black dark:text-white">Das ist mir wichtig</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualität vor Schnelligkeit',
                desc: 'Ich mache keine Billig-Websites. Jedes Projekt bekommt die Zeit und Aufmerksamkeit, die es verdient.'
              },
              {
                title: 'Verständnis statt Jargon',
                desc: 'Ich erkläre alles verständlich, ohne Technik-Jargon. Du sollst verstehen, was ich mache.'
              },
              {
                title: 'Partnerschaft statt Agentur',
                desc: 'Ich bin dein Partner, nicht deine Agentur. Dein Erfolg ist mein Erfolg.'
              },
              {
                title: 'Ergebnisse statt Theorie',
                desc: 'Schöne Websites gibt es viele. Ich baue Websites, die dein Business voranbringen.'
              },
              {
                title: 'Lokal & verlässlich',
                desc: 'Ich bin nicht irgendwo, sondern hier – im Raum Heilbronn. Du kannst mich treffen und anrufen.'
              },
              {
                title: 'Kontinuierliche Verbesserung',
                desc: 'Ich lerne ständig dazu und setze neueste Best Practices um, damit deine Website immer aktuell bleibt.'
              },
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-black text-black dark:text-white mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Erfahrung</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            <span className="text-black dark:text-white">Was ich kann</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-black dark:text-white mb-8 tracking-tight">Services</h3>
              <ul className="space-y-4">
                {[
                  'Webdesign & Development',
                  'Website Relaunch & Modernisierung',
                  'SEO-Optimierung & Local SEO',
                  'Website-Wartung & Support',
                  'Performance-Optimierung',
                  'Responsive Design',
                  'CMS-Integration',
                  'Kontaktformulare & Funktionen',
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary mt-1"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black dark:text-white mb-8 tracking-tight">Tech Stack</h3>
              <ul className="space-y-4">
                {[
                  'Next.js & React',
                  'Tailwind CSS',
                  'TypeScript',
                  'Node.js',
                  'PostgreSQL & Databases',
                  'Webdesign & Figma',
                  'SEO & Analytics',
                  'Hosting & Deployment',
                ].map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary mt-1"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: '12+', label: 'Jahre Erfahrung' },
              { number: '250+', label: 'Projekte realisiert' },
              { number: '85+', label: 'Zufriedene Kunden' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl md:text-7xl font-black text-primary mb-3">
                  {stat.number}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center space-y-8">
          <span className="text-primary font-black text-xs tracking-widest uppercase block">Lass uns arbeiten</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-black dark:text-white">Bereit für dein nächstes Projekt?</span>
          </h2>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Kontaktiere mich für ein unverbindliches Erstgespräch. Ich freue mich, von deinem Projekt zu hören.
          </p>

          <a
            href="/kontakt"
            style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white transition-all duration-300 shadow-lg hover:shadow-lg hover:opacity-90"
          >
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </>
  )
}
