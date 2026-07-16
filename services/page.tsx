export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-6">Services</span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-gray-900 dark:text-white">
            Leistungen für dein<br />
            Website-Projekt
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Von der Idee bis zur erfolgreichen Website – ich begleite dich durch jeden Schritt.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                number: '01',
                title: 'Webdesign & Development',
                desc: 'Moderne Websites von Grund auf. Responsive, schnell, SEO-optimiert.'
              },
              {
                number: '02',
                title: 'Website-Relaunch',
                desc: 'Deine Website ist älter? Ich modernisiere sie technisch und optisch.'
              },
              {
                number: '03',
                title: 'SEO-Optimierung',
                desc: 'Bessere Rankings bei Google. Mehr organischen Traffic. Langfristig kostengünstig.'
              },
              {
                number: '04',
                title: 'Website-Wartung',
                desc: 'Regelmäßige Updates, Backups und Support. So läuft deine Website sicher.'
              }
            ].map((service, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-10 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-600 transition">
                <span className="text-pink-600 font-black text-2xl">{service.number}</span>
                <h3 className="text-2xl font-black mt-6 mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-4">Ablauf</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            So arbeite ich mit dir
          </h2>

          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Erstgespräch',
                desc: 'Kostenlos und unverbindlich. Ich verstehe dein Business, deine Ziele und Herausforderungen.'
              },
              {
                step: '2',
                title: 'Konzept',
                desc: 'Auf Basis deiner Anforderungen erstelle ich ein maßgeschneidertes Konzept mit Design und Strategie.'
              },
              {
                step: '3',
                title: 'Entwicklung',
                desc: 'Ich baue deine Website mit modernen Technologien, schnell und zuverlässig.'
              },
              {
                step: '4',
                title: 'Testing',
                desc: 'Umfassende Tests auf allen Geräten und Browsern – alles muss perfekt funktionieren.'
              },
              {
                step: '5',
                title: 'Launch',
                desc: 'Deine Website ist live! Wir überwachen alles und optimieren nach Bedarf.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center font-black text-xl">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">
            Bereit für dein Projekt?
          </h2>
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
