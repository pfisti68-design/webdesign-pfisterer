'use client'

import { useState } from 'react'

const services = [
  {
    id: 'webdesign',
    number: '01',
    title: 'Webdesign & Development',
    description: 'Wir entwerfen und entwickeln hochwertige Websites von Grund auf. Mit modernem Design, schneller Performance und klarer Struktur für maximale Kundengewinnung.',
    highlights: [
      'Responsive Design für alle Geräte',
      'SEO-optimiert von Tag 1',
      'Schnelle Ladezeiten',
      'Sicher & zuverlässig'
    ],
    timeline: '6-12 Wochen',
  },
  {
    id: 'relaunch',
    number: '02',
    title: 'Relaunch & Modernisierung',
    description: 'Deine Website existiert schon länger? Zusammen modernisieren wir sie: schneller, schöner, sicherer und besser für Google.',
    highlights: [
      'Inhalte sauber migriert',
      'Google Rankings erhalten',
      'Moderne Technologie',
      'Bessere Performance'
    ],
    timeline: '8-14 Wochen',
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO-Optimierung',
    description: 'Deine Website existiert, aber niemand findet sie bei Google? Wir optimieren deine Website, damit die richtigen Kunden dich finden.',
    highlights: [
      'Bessere Google Rankings',
      'Mehr Sichtbarkeit regional',
      'Relevante Besucher gewinnen',
      'Langfristig kostengünstig'
    ],
    timeline: '3-6 Monate',
  },
  {
    id: 'wartung',
    number: '04',
    title: 'Website-Wartung & Support',
    description: 'Regelmäßige Wartung, Updates, Backups und Support. So läuft deine Website sicher und stabil, ohne dass du dich darum kümmern musst.',
    highlights: [
      'Tägliche automatische Backups',
      'Sicherheitsupdates',
      'Performance Monitoring',
      '24h Support'
    ],
    timeline: 'Monatlich',
  },
]

const processSteps = [
  { number: '1', title: 'Analyse & Strategie', description: 'Wir verstehen dein Business, deine Ziele und deine Zielgruppe.' },
  { number: '2', title: 'Konzept & Design', description: 'Modernes, hochwertiges Design mit Fokus auf Konversion.' },
  { number: '3', title: 'Entwicklung', description: 'Technisch sauber, schnell und suchmaschinen-freundlich.' },
  { number: '4', title: 'Testing & Optimierung', description: 'Umfassende Tests auf allen Geräten und Browsern.' },
  { number: '5', title: 'Launch', description: 'Sichere Veröffentlichung mit vollständiger Dokumentation.' },
  { number: '6', title: 'Support & Wartung', description: '3 Monate kostenlos, danach optional als Paket.' },
]

const faqs = [
  { question: 'Wie lange dauert die Erstellung einer Website?', answer: 'Das hängt vom Umfang ab. Eine Website mit 5-7 Seiten dauert normalerweise 6-12 Wochen. Größere Projekte können länger dauern.' },
  { question: 'Was kostet eine Website?', answer: 'Die Preise hängen vom Umfang ab. Eine Website für einen Handwerksbetrieb kostet normalerweise zwischen 2.000 und 8.000 Euro.' },
  { question: 'Kann ich die Website selbst verwalten?', answer: 'Ja! Wir bauen deine Website mit modernen, benutzerfreundlichen Systemen. Du kannst Inhalte selbst ändern.' },
  { question: 'Ist meine Website sicher?', answer: 'Ja. Wir nutzen aktuelle, sichere Technologien und bauen nur nach Best Practices.' },
  { question: 'Was passiert nach dem Launch?', answer: 'Nach dem Launch begleiten wir dich 3 Monate kostenlos. Danach kannst du ein Wartungspaket buchen.' },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-block mb-6">
            <span className="text-primary font-black text-xs tracking-widest uppercase">Services</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Websites,</span>
            <br />
            <span className="text-primary">die funktionieren</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Wir bieten alles, was deine Website braucht – von der Planung bis zur regelmäßigen Wartung.
          </p>

          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white bg-gradient-cta hover:shadow-lg transition-all duration-300 shadow-lg"
          >
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>

      {/* PREMIUM SERVICES - FULL WIDTH */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-20">
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-6">Unsere Leistungen</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Websites für<br />
              <span className="text-primary">dein erfolgreiches Business</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Von der Planung bis zum Launch – wir begleiten dich mit umfassender Expertise und modernen Technologien.
            </p>
          </div>

          {/* Premium Service Cards */}
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12">
                  {/* Left: Content */}
                  <div>
                    <div className="mb-4 inline-block">
                      <span className="text-primary font-black text-sm tracking-widest uppercase px-3 py-1 bg-primary/10 rounded-full">
                        Leistung {service.number}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {service.highlights.map((highlight, hidx) => (
                        <div key={hidx} className="flex items-start gap-3">
                          <span className="text-primary font-black text-lg flex-shrink-0">✓</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{service.timeline}</span>
                      </div>

                      <a
                        href="/kontakt"
                        style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full font-black text-white hover:shadow-lg transition-all duration-300 hover:opacity-90"
                      >
                        Beratung buchen
                      </a>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative hidden lg:block">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <img
                        src={`/projects/project-${(idx % 4) + 1}.svg`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KUNDENLOGOS SECTION */}
      <section className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-6">Trusted von über 85+ Unternehmen</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Websites für<br/>
              <span className="text-primary">erfolgreiche Unternehmen</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Von kleinen Handwerksbetrieben bis zu etablierten Unternehmen – wir helfen ihnen, online zu wachsen.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {[
              { name: 'Handwerksbetrieb', industry: 'Handwerk' },
              { name: 'Restaurant Online', industry: 'Gastronomie' },
              { name: 'Dienstleister', industry: 'Service' },
              { name: 'Zahnarzt Praxis', industry: 'Medizin' },
              { name: 'E-Commerce Shop', industry: 'Einzelhandel' },
              { name: 'Sportverein', industry: 'Non-Profit' },
            ].map((client, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
                  <span className="text-2xl font-black text-primary">{i + 1}</span>
                </div>
                <p className="text-sm font-black text-white text-center">{client.name}</p>
                <p className="text-xs text-gray-400">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungsumfang - 6 Service Details */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Leistungsumfang</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
              So arbeiten wir
            </h2>
          </div>

          {/* 3x2 Grid for Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-xl p-8 h-full flex flex-col"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative flex-1">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full font-black text-white text-lg mb-6" style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}>
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Team Photo */}
            <div className="relative">
              <img
                src="/team.png"
                alt="Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Values Content */}
            <div>
              <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Unsere Werte</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 tracking-tight leading-tight">
                Das ist mir wichtig
              </h2>

              <div className="space-y-4">
                {[
                  { title: '100% Individualität', desc: 'Jedes Projekt ist einzigartig. Keine Standard-Lösungen, sondern maßgeschneiderte Websites für deine Ziele.' },
                  { title: 'Performance First', desc: 'Schnelle Websites sind bessere Websites. Wir optimieren für Geschwindigkeit und Nutzer-Erlebnis.' },
                  { title: 'Authentizität', desc: 'Ehrlich, transparent und verlässlich. Du weißt immer, wo du stehst und was wir tun.' },
                ].map((value, idx) => (
                  <div key={idx} className="border-b border-gray-200 dark:border-slate-700 pb-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx + 100 ? null : idx + 100)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{value.title}</h3>
                      <span className="text-primary font-black text-xl flex-shrink-0">
                        {openFaq === idx + 100 ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === idx + 100 && (
                      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{value.desc}</p>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="/kontakt"
                style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
                className="inline-flex items-center justify-center mt-10 px-8 py-4 rounded-xl font-black text-white hover:shadow-lg transition-all duration-300 hover:opacity-90"
              >
                Kostenlos beraten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Unser Prozess</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              <span className="text-gray-900 dark:text-white">Wie wir arbeiten:</span>
              <br />
              <span className="text-primary">6 bewährte Schritte</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black text-2xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Häufig gefragt</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="text-gray-900 dark:text-white">Fragen & Antworten</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg border-2 border-gray-200 dark:border-slate-700 overflow-hidden hover:border-primary transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-left"
                >
                  <span className="font-black text-gray-900 dark:text-white tracking-tight">
                    {faq.question}
                  </span>
                  <span className="text-primary font-black text-xl ml-4 flex-shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="p-6 bg-gray-50 dark:bg-slate-800 border-t-2 border-gray-200 dark:border-slate-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-6">Unser Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Dein persönlicher Ansprechpartner
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Wir sind keine anonyme Agentur. Du arbeitest mit echten Menschen, die dein Projekt verstehen und mit dir wachsen.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Team Member */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border border-primary/20 mb-6">
                <img
                  src="/team-avatar.svg"
                  alt="Michael Pfisterer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Michael Pfisterer</h3>
              <p className="text-primary font-black text-sm mb-4">Gründer & Webdesigner</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mit über 10+ Jahren Erfahrung im Webdesign helfe ich Unternehmen, online zu wachsen. Persönlich, transparent und ergebnisorientiert.
              </p>
            </div>

            {/* Right: Stats */}
            <div className="space-y-8">
              <div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">10+</div>
                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Jahre Erfahrung</h4>
                <p className="text-gray-700 dark:text-gray-300">Seit über 10 Jahren gestalte ich erfolgreiche Online-Präsenzen.</p>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">85+</div>
                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Zufriedene Kunden</h4>
                <p className="text-gray-700 dark:text-gray-300">Kleine und mittelständische Unternehmen, die mit mir wachsen.</p>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">250+</div>
                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Projekte</h4>
                <p className="text-gray-700 dark:text-gray-300">Websites, die funktionieren und Kunden gewinnen.</p>
              </div>

              <a
                href="/kontakt"
                style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-black text-white hover:shadow-lg transition-all duration-300 hover:opacity-90 mt-6"
              >
                Kostenlose Beratung buchen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            <span className="block">Bereit für die nächste Stufe?</span>
            <span className="text-primary">Lass uns reden</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Im unverbindlichen Gespräch klären wir, welcher Service dir am meisten hilft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-gray-900 bg-gradient-cta hover:shadow-lg transition-all duration-300 shadow-lg"
            >
              Kostenloses Gespräch starten
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Portfolio ansehen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
