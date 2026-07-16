import { motion } from 'framer-motion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prozess | Webdesign-Pfisterer',
  description: 'So funktioniert unser Webdesign-Prozess: Erstgespräch, Konzeptionierung, Projektstart.',
}

const steps = [
  {
    number: '1',
    label: 'SCHRITT',
    title: 'ERSTGESPRÄCH',
    description: 'Im kostenlosen Erstgespräch analysieren wir deine Ziele, Herausforderungen und Wünsche. Du erhältst eine klare Einschätzung, welche Maßnahmen im Webdesign oder Online-Shop wirklich Wirkung zeigen.',
    image: '/projects/project-1.svg',
    side: 'left',
  },
  {
    number: '2',
    label: 'SCHRITT',
    title: 'KONZEPTIONIERUNG',
    description: 'Auf Basis deiner Anforderungen entwickeln wir ein maßgeschneidertes Konzept, das Design, Nutzerfuhrung und technische Umsetzung vereint. So entsteht eine klare Roadmap, die den Erfolg deines Projekts von Anfang an messbar macht.',
    image: '/projects/project-2.svg',
    side: 'right',
  },
  {
    number: '3',
    label: 'SCHRITT',
    title: 'PROJEKTSTART',
    description: 'Im Projektstart setzen wir das Konzept zielgerichtet in die Praxis um. Durch transparente Kommunikation, feste Meilensteine und enge Abstimmung stellen wir sicher, dass dein Webprojekt reibungslos umgesetzt wird und du schnell erste Ergebnisse siehst.',
    image: '/projects/project-3.svg',
    side: 'left',
  },
]

export default function ProzessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-primary font-black text-xs tracking-widest uppercase">Prozess</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-gray-900 dark:text-white"
          >
            SO GEHT'S ZU DEINEM<br />
            <span className="text-primary">PERFORMANCE WEBPROJEKT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            Unser bewährter Prozess führt dein Projekt von der Idee zur erfolgreichen Umsetzung. Transparenz, Qualität und dein Erfolg stehen dabei an erster Stelle.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="relative">
            {/* Timeline Steps */}
            <div className="space-y-24 md:space-y-32">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline Dot & Line (Desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent opacity-30" />
                  )}

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Side - Image or Content */}
                    {step.side === 'left' ? (
                      <>
                        {/* Image Left */}
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="relative group"
                        >
                          <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {/* Decorative Circle */}
                          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl hidden md:block" />
                        </motion.div>

                        {/* Content Right */}
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="space-y-6"
                        >
                          <div>
                            <span className="text-primary font-black text-sm tracking-widest uppercase">{step.label} {step.number}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 tracking-tight">
                              {step.title}
                            </h2>
                          </div>
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Content Left */}
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="space-y-6"
                        >
                          <div>
                            <span className="text-primary font-black text-sm tracking-widest uppercase">{step.label} {step.number}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 tracking-tight">
                              {step.title}
                            </h2>
                          </div>
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>

                        {/* Image Right */}
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="relative group"
                        >
                          <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {/* Decorative Circle */}
                          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl hidden md:block" />
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 border-4 border-primary rounded-full items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Bereit zu starten?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              Lass uns dein Projekt<br />
              <span className="text-primary">gemeinsam aufbauen</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Kontaktiere uns noch heute für dein kostenloses Erstgespräch und erfahre, wie wir dein Business digital wachsen lassen.
          </motion.p>

          <motion.a
            href="/kontakt"
            style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-black text-white transition-all duration-300 shadow-lg text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kostenlose Beratung buchen
          </motion.a>
        </div>
      </section>
    </>
  )
}
