export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-6">Prozess</span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-gray-900 dark:text-white">
            So geht's zu deinem<br />
            Website-Projekt
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Mein bewährter Prozess führt dein Projekt von der Idee zur erfolgreichen Umsetzung. Transparenz und dein Erfolg stehen dabei an erster Stelle.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-20">
            {[
              {
                number: '1',
                title: 'ERSTGESPRÄCH',
                desc: 'Im kostenlosen Erstgespräch analysiere ich deine Ziele, Herausforderungen und Wünsche. Du erhältst eine klare Einschätzung, welche Maßnahmen im Webdesign wirklich Sinn machen.'
              },
              {
                number: '2',
                title: 'KONZEPTIONIERUNG',
                desc: 'Auf Basis deiner Anforderungen entwickle ich ein maßgeschneidertes Konzept, das Design, Nutzerführung und technische Umsetzung vereint. So entsteht eine klare Roadmap, die den Erfolg deines Projekts von Anfang an messbar macht.'
              },
              {
                number: '3',
                title: 'PROJEKTSTART',
                desc: 'Im Projektstart setze ich das Konzept zielgerichtet in die Praxis um. Durch transparente Kommunikation, feste Meilensteine und enge Abstimmung stelle ich sicher, dass dein Webprojekt reibungslos umgesetzt wird und du schnell erste Ergebnisse siehst.'
              },
              {
                number: '4',
                title: 'TESTING & LAUNCH',
                desc: 'Umfassende Tests auf allen Geräten und Browsern – alles muss perfekt funktionieren. Dann geht deine Website live und wird von Google indexiert.'
              },
              {
                number: '5',
                title: 'SUPPORT & WARTUNG',
                desc: 'Nach dem Launch begleite ich dich 3 Monate kostenlos. Danach kannst du ein flexibles Wartungspaket buchen. So bleibt deine Website sicher und aktuell.'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-pink-600 text-white rounded-full flex items-center justify-center font-black text-2xl">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-2">SCHRITT {step.number}</span>
                  <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Graphic */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-4">Zeitrahmen</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            Typischer Ablauf
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { phase: 'Erstgespräch', duration: '1 Woche', status: 'Planung' },
              { phase: 'Konzept & Design', duration: '2-3 Wochen', status: 'Design' },
              { phase: 'Entwicklung', duration: '4-8 Wochen', status: 'Entwicklung' },
              { phase: 'Testing', duration: '1-2 Wochen', status: 'QA' },
              { phase: 'Launch & Optimierung', duration: '1 Woche', status: 'Live' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-lg border border-pink-200 dark:border-gray-700 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.status}</p>
                  <p className="font-black text-pink-600 text-lg">{item.duration}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">{item.phase}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-black text-blue-900 dark:text-blue-400 mb-2">Gesamtdauer</h3>
            <p className="text-blue-900 dark:text-blue-300">
              Eine typische Website mit 5-7 Seiten dauert <strong>6-12 Wochen</strong>. Die genaue Dauer hängt vom Umfang, deinen Anforderungen und der Verfügbarkeit ab.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-4">Häufige Fragen</span>
          <h2 className="text-5xl font-black mb-16 text-gray-900 dark:text-white">
            FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Wie lange dauert die Erstellung einer Website?',
                a: 'Das hängt vom Umfang ab. Eine Website mit 5-7 Seiten dauert normalerweise 6-12 Wochen. Größere Projekte können länger dauern.'
              },
              {
                q: 'Was kostet eine Website?',
                a: 'Die Preise hängen vom Umfang und den Anforderungen ab. Eine Website für einen Handwerksbetrieb kostet normalerweise zwischen 2.000 und 8.000 Euro.'
              },
              {
                q: 'Kann ich die Website selbst verwalten?',
                a: 'Ja! Ich baue deine Website mit modernen, benutzerfreundlichen Technologien. Du kannst Inhalte selbst ändern.'
              },
              {
                q: 'Ist meine Website sicher?',
                a: 'Ja. Ich nutze aktuelle, sichere Technologien und baue nur nach Best Practices. Deine Website und die Daten deiner Kunden sind sicher.'
              },
              {
                q: 'Was passiert nach dem Launch?',
                a: 'Nach dem Launch begleite ich dich 3 Monate kostenlos bei Anpassungen. Danach kannst du ein flexibles Wartungspaket buchen.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-black text-lg mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">
            Bereit zu starten?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Kontaktiere mich noch heute für ein kostenloses Erstgespräch. Keine versteckten Kosten, keine Verpflichtung.
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
