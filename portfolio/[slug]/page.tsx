import type { Metadata } from 'next'
import Link from 'next/link'
import ExpandableSections from './ExpandableSections'

const caseStudies: Record<string, any> = {
  'handwerksbetrieb-website': {
    title: 'Handwerksbetrieb - Website & SEO',
    industry: 'Handwerk',
    metrics: '+150% Anfragen',
    customer: 'Geschäftsführer',
    testimonial: 'Die Website hat unser Business komplett verändert. Wir bekommen jetzt regelmäßig Anfragen über Google, und unsere Kunden sagen, dass wir viel professioneller wirken.',
    problem: 'Veraltete Website, nicht mobil-optimiert, fehlende Google-Sichtbarkeit',
    solution: [
      { title: 'Modernes Design', desc: 'Ansprechende Website mit klarer Struktur' },
      { title: 'Mobile Optimiert', desc: 'Responsive für alle Geräte' },
      { title: 'Local SEO', desc: 'Google Rankings in der Region' },
      { title: 'Conversion fokussiert', desc: 'Klare CTAs und Kontaktformulare' },
    ],
    results: [
      { number: '+150%', label: 'Kundenanfragen' },
      { number: '+300%', label: 'Organischer Traffic' },
      { number: '+89%', label: 'Conversion Rate' },
    ],
    deliverables: [
      'Responsive Website mit 8 Seiten',
      'SEO-Optimierung für 15 Keywords',
      'Google Business Profile Setup',
      '3 Monate kostenloser Support',
    ],
    mockups: ['/projects/project-1.svg', '/projects/project-2.svg', '/projects/project-3.svg'],
  },
  'restaurant-online-shop': {
    title: 'Restaurant - Online Menü & Reservierung',
    industry: 'Gastronomie',
    metrics: '+200% Reservierungen',
    customer: 'Restaurant-Manager',
    testimonial: 'Das System hat unsere Reservierungen verdoppelt. Gäste lieben die einfache Buchung online.',
    problem: 'Keine Online-Reservierungsmöglichkeit, statische Website',
    solution: [
      { title: 'Reservierungssystem', desc: 'Automatische Buchungen und Bestätigungen' },
      { title: 'Digital Menü', desc: 'Interaktive Speisekarte mit Fotos' },
      { title: 'Mobile First', desc: 'Optimiert für Smartphone-Besucher' },
    ],
    results: [
      { number: '+200%', label: 'Reservierungen' },
      { number: '4.8/5', label: 'Google Rating' },
    ],
    deliverables: [
      'Reservierungssystem Integration',
      'Digitale Speisekarte',
      'Foto-Galerie mit Events',
    ],
    mockups: ['/projects/project-2.svg', '/projects/project-3.svg', '/projects/project-4.svg'],
  },
  'dienstleister-relaunch': {
    title: 'Dienstleister - Website Relaunch',
    industry: 'Dienstleistung',
    metrics: '+300% organischer Traffic',
    customer: 'Geschäftsführer Dienstleistung',
    testimonial: 'Der Relaunch hat uns zur sichtbaren Nummer 1 in der Region gemacht.',
    problem: 'Veraltete Technologie, schlechte Rankings, unprofessionelles Design',
    solution: [
      { title: 'Neues CMS', desc: 'Modern und leicht zu verwalten' },
      { title: 'SEO Strategie', desc: 'Umfassende Optimierung' },
      { title: 'Corporate Design', desc: 'Professionelles Brand-Image' },
    ],
    results: [
      { number: '+300%', label: 'Organischer Traffic' },
      { number: '#1', label: 'Ranking für Hauptkeyword' },
    ],
    deliverables: [
      'Kompletter Website-Relaunch',
      'SEO-Optimierung',
      'Corporate Design Umsetzung',
    ],
    mockups: ['/projects/project-1.svg', '/projects/project-2.svg'],
  },
  'praxis-website': {
    title: 'Zahnarzt-Praxis - Patientengewinnung',
    industry: 'Medizin',
    metrics: '+180% neue Patienten',
    customer: 'Zahnarzt Dr. Schmidt',
    testimonial: 'Viel mehr Patienten melden sich jetzt online an. Die Website sieht sehr professionell aus.',
    problem: 'Kaum neue Patienten, keine Online-Terminbuchung',
    solution: [
      { title: 'Terminbuchung', desc: 'Online Appointment System' },
      { title: 'Patient Info', desc: 'Umfassende Inhalte' },
    ],
    results: [
      { number: '+180%', label: 'Neue Patienten' },
    ],
    deliverables: [
      'Online Terminbuchung',
      'Patient Portal',
    ],
    mockups: ['/projects/project-3.svg', '/projects/project-4.svg'],
  },
  'einzelhandel-seo': {
    title: 'Einzelhandel - E-Commerce & Local SEO',
    industry: 'Einzelhandel',
    metrics: '+250% Online-Umsatz',
    customer: 'Shop-Betreiber',
    testimonial: 'Der Online-Shop funktioniert großartig. Viel mehr Umsatz!',
    problem: 'Keine Online-Verkaufsmöglichkeit',
    solution: [
      { title: 'E-Commerce Shop', desc: 'Vollständiges Shop-System' },
      { title: 'Payment Integration', desc: 'Sichere Zahlungen' },
    ],
    results: [
      { number: '+250%', label: 'Online-Umsatz' },
    ],
    deliverables: [
      'E-Commerce Platform',
    ],
    mockups: ['/projects/project-1.svg'],
  },
  'verein-website': {
    title: 'Sportverein - Community Website',
    industry: 'Non-Profit',
    metrics: '+120% neue Mitglieder',
    customer: 'Vereinsvorsitzender',
    testimonial: 'Die Website hilft uns, neue Mitglieder zu gewinnen. Sehr professionell!',
    problem: 'Alte Website, nicht attraktiv',
    solution: [
      { title: 'Community Portal', desc: 'Mitglieder-Bereich' },
    ],
    results: [
      { number: '+120%', label: 'Neue Mitglieder' },
    ],
    deliverables: [
      'Community Portal',
    ],
    mockups: ['/projects/project-2.svg'],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = caseStudies[params.slug]
  return {
    title: `${project?.title || 'Case Study'} | Webdesign-Pfisterer`,
    description: project?.metrics || 'Ausführliche Case Study eines unserer Projekte',
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = caseStudies[params.slug]

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">Case Study nicht gefunden</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          <Link href="/portfolio" className="text-primary hover:opacity-80 font-black">
            Zurück zum Portfolio
          </Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Back Link */}
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary font-black mb-8 hover:gap-3 transition-all text-sm">
            <span>←</span>
            <span>Zurück zu Portfolio</span>
          </Link>

          {/* Main Grid - Left: Content, Right: Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                <span className="text-primary font-black text-xs tracking-widest uppercase">{project.industry}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 text-white">
                {project.title.split('-')[0]}
              </h1>

              <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-lg">
                {project.problem}
              </p>

              {/* Results Highlights */}
              <div className="flex items-center gap-6 mb-12">
                {project.results.slice(0, 2).map((result: any, idx: number) => (
                  <div key={idx}>
                    <div className="text-3xl md:text-4xl font-black text-primary">{result.number}</div>
                    <p className="text-sm text-gray-400 font-medium">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mockups Grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.mockups.map((mockup: string, idx: number) => (
                <div key={idx} className="rounded-xl overflow-hidden bg-gray-800 aspect-video">
                  <img
                    src={mockup}
                    alt={`Mockup ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left: Testimonial Text */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Was der Kunde sagt
              </h2>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed border-l-4 border-primary pl-8">
                "{project.testimonial}"
              </blockquote>
              <div>
                <p className="font-black text-gray-900 dark:text-white text-lg">Zufriedener Kunde</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.customer}</p>
              </div>
            </div>

            {/* Right: Placeholder for Customer Image */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Kunde</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Sections - Fusion Style */}
      <ExpandableSections project={project} />

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 relative overflow-hidden">
        {/* Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            <span className="block">Möchtest du ein ähnliches Projekt?</span>
            <span className="text-primary">Lass uns reden</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Im unverbindlichen Gespräch zeigen wir dir, wie wir auch deinem Unternehmen zu mehr Anfragen und Umsatz verhelfen können.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="/kontakt"
              style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white transition-all duration-300 shadow-lg hover:shadow-lg hover:opacity-90"
            >
              Kostenloses Erstgespräch buchen
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-black text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Weitere Projekte ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
