'use client'

import Link from 'next/link'

const projects = [
  {
    slug: 'handwerksbetrieb-website',
    title: 'Elektroinstallation Wagner - Website Relaunch',
    industry: 'Handwerk',
    description: 'Vollständiger Website-Relaunch mit modernem Design, mobiler Optimierung und klarem Kundenprozess. Integration von Kontaktformularen und Portfoliogalerie.',
    metrics: '+150% Kundenanfragen',
    image: '/projects/project-1.svg',
  },
  {
    slug: 'restaurant-online-shop',
    title: 'Restaurant Zur Post - Online Reservierung',
    industry: 'Gastronomie',
    description: 'Webseite mit integriertem Reservierungssystem, digitaler Speisekarte, Google Maps Integration und Social-Media-Links für bessere Online-Sichtbarkeit.',
    metrics: '+200% Reservierungen',
    image: '/projects/project-2.svg',
  },
  {
    slug: 'dienstleister-relaunch',
    title: 'Steuerberatung Müller - SEO Relaunch',
    industry: 'Dienstleistung',
    description: 'Kompletter Website-Relaunch mit SEO-Optimierung für lokale Keywords. Neue Content-Struktur, Blog-Integration und Vertrauenselemente.',
    metrics: '+300% organischer Traffic',
    image: '/projects/project-3.svg',
  },
  {
    slug: 'praxis-website',
    title: 'Zahnarzt Dr. Schmidt - Patient Portal',
    industry: 'Medizin',
    description: 'Moderne Praxiswebsite mit Online-Terminbuchung, Patientenformulare und Behandlungsinformationen. Mobile-first Design für Patientenfreundlichkeit.',
    metrics: '+180% neue Patienten',
    image: '/projects/project-4.svg',
  },
  {
    slug: 'einzelhandel-seo',
    title: 'Fashion Shop TREND - E-Commerce & Local SEO',
    industry: 'Einzelhandel',
    description: 'E-Commerce-Plattform mit lokalem SEO für Ladengeschäft. Produktkatalog, Buchungssystem für Click&Collect und Kundenbewertungen.',
    metrics: '+250% Online-Umsatz',
    image: '/projects/project-1.svg',
  },
  {
    slug: 'verein-website',
    title: 'Sportverein TG Heilbronn - Community Hub',
    industry: 'Non-Profit',
    description: 'Community-Website mit Mitgliederverwaltung, Terminkalender, Galerie und Mitgliederzugang. Transparent und benutzerfreundlich aufgebaut.',
    metrics: '+120% neue Mitglieder',
    image: '/projects/project-2.svg',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="text-primary font-black text-xs tracking-widest uppercase">Portfolio</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Referenzen von</span>
            <br />
            <span className="text-primary">echten Projekten</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Wir zeigen keine Template-Websites, sondern echte Projekte mit echten Ergebnissen. Hier siehst du, woran wir arbeiten – und wie wir Unternehmen helfen, ihre Ziele zu erreichen.
          </p>

          {/* CTA */}
          <a
            href="/kontakt"
            style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90"
          >
            Dein Projekt starten
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="p-8 space-y-4">
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary text-xs font-black rounded-full tracking-widest uppercase">
                    {project.industry}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-black dark:text-white tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="font-black text-primary text-lg">
                      {project.metrics}
                    </p>
                  </div>

                  {/* Link Arrow */}
                  <div className="pt-2 flex items-center gap-2 text-primary font-black group-hover:gap-3 transition-all">
                    <span>Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: '85+', label: 'Zufriedene Kunden' },
              { number: '250+', label: 'Projekte realisiert' },
              { number: '12+', label: 'Jahre Erfahrung' },
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
          <div>
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Dein Projekt</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              <span className="text-black dark:text-white">Lass uns ein Projekt</span>
              <br />
              <span className="text-black dark:text-white">für dich aufbauen</span>
            </h2>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Kontaktiere uns für ein unverbindliches Erstgespräch. Wir analysieren deine Anforderungen und zeigen dir, wie wir dir helfen können.
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
