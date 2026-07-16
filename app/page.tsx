'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true'
      setDarkMode(isDark)
      if (isDark) document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-cta text-white hover:shadow-lg transition-all"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Hero Section - NEW FUSION STYLE */}
      <section className="relative min-h-screen flex items-center pt-20 md:pt-0 bg-white dark:bg-slate-900 overflow-hidden">
        {/* Background Gradient Effects - ANIMATED */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Tag - ANIMATED */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Webdesign-Pfisterer</span>
            </motion.div>

            {/* MAIN HEADLINE - BOLD & LARGE - ANIMATED */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WEBSITES, DIE KUNDEN<br />
              <span className="text-primary">GEWINNEN</span>
            </motion.h1>

            {/* Description - ANIMATED */}
            <motion.p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Gemeinsam zu nachhaltigem Wachstum durch innovative, leistungsstarke B2C- & B2B-Online-Shops & Websites, die dein Business nicht nur digitalisieren, sondern profitabel skalieren.
            </motion.p>

            {/* CTAs - BOLD BUTTONS - ANIMATED */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="/kontakt"
                style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full font-black text-white hover:shadow-2xl transition-all duration-300 shadow-lg hover:opacity-90 text-lg"
              >
                JETZT BUCHEN
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full font-black text-gray-900 dark:text-white border-3 border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 text-lg"
              >
                REFERENZEN
              </a>
            </motion.div>

            {/* Trust Indicators - ANIMATED */}
            <motion.div
              className="flex flex-wrap gap-12 pt-20 border-t border-gray-200 dark:border-slate-700 mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { num: '85+', label: 'Zufriedene Kunden' },
                { num: '250+', label: 'Projekte' },
                { num: '12+', label: 'Jahre Erfahrung' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                >
                  <div className="text-5xl font-black text-primary mb-2">{stat.num}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - 4 CARDS */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'D2C & B2B OPTIMIERT',
                desc: 'Ob B2C oder B2B – wir realisieren leistungsstarke Websites und Shops, die auf deine Zielgruppe zugeschnitten sind und dein Geschäft nachhaltig wachsen lassen.',
              },
              {
                num: '02',
                title: 'ECHTE PARTNER',
                desc: 'Wir sind nicht nur Dienstleister, sondern Partner. Durch kontinuierliche Optimierung und Support entsteht eine Zusammenarbeit, die maximale Resultate liefert.',
              },
              {
                num: '03',
                title: 'DSGVO KONFORM',
                desc: 'Mit sicheren Frameworks, regelmäßigen Updates und DSGVO-konformen Setups stellen wir sicher, dass dein Online-Auftritt jederzeit geschützt bleibt.',
              },
              {
                num: '04',
                title: 'FOKUS AUF SEO',
                desc: 'Schon beim Design achten wir auf SEO-optimierte Strukturen, schnelle Ladezeiten und sauberen Code – damit deine Website nicht nur gut aussieht, sondern auch von deiner Zielgruppe gefunden wird.',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-3xl bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Badge */}
                <div className="inline-flex w-12 h-12 rounded-2xl bg-primary items-center justify-center">
                  <span className="text-white font-black text-lg">{benefit.num}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - MODERN GRID */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              WAS WIR <span className="text-primary">BIETEN</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              Komplette Lösungen für dein digitales Wachstum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: '01', title: 'Webdesign & Development', desc: 'Moderne Websites die dein Business zeigen' },
              { num: '02', title: 'Website Relaunch', desc: 'Alt → Neu: Schneller, schöner, besser' },
              { num: '03', title: 'SEO & Local Search', desc: 'Gefunden werden von deinen Kunden' },
              { num: '04', title: 'Website-Wartung', desc: 'Wir kümmern uns, du fokussierst dein Business' },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgb(184, 29, 99)" }}
              >
                <div className="text-6xl font-black text-primary mb-6">{service.num}</div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - SHOWCASE */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              UNSERE <span className="text-primary">PROJEKTE</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">Echte Projekte. Echte Ergebnisse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'E-Commerce Relaunch', metrics: '+45% Conversion', image: '/projects/project-1.svg' },
              { title: 'SaaS Landing Page', metrics: '+200% Leads', image: '/projects/project-2.svg' },
              { title: 'Corporate Website', metrics: '+180% SEO Traffic', image: '/projects/project-3.svg' },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="group rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(184, 29, 99, 0.2)" }}
              >
                <div className="h-48 overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-primary font-black text-lg">{project.metrics}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="/portfolio"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full font-black text-white bg-gradient-cta hover:shadow-xl transition-all duration-300 shadow-lg text-lg hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ALLE PROJEKTE ANSEHEN →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - WITH TEAM PHOTOS */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content - ANIMATED */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-gray-900 dark:text-white">
                  LASS DEIN BUSINESS<br />
                  <span className="text-primary">DIGITAL WACHSEN</span>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Wir sind nicht einfach eine Agentur – wir sind dein Partner. Mit über 12 Jahren Erfahrung und 250+ erfolgreichen Projekten wissen wir genau, wie Websites verkaufen.
                </p>
              </div>

              {/* Trust Points - ANIMATED */}
              <div className="space-y-4">
                {[
                  'Persönliche Betreuung – keine Account Manager',
                  'Transparente Kommunikation von Tag 1',
                  'Messbare Ergebnisse & regelmäßige Reports',
                  'Langfristige Partnership, nicht nur ein Projekt'
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs - ANIMATED */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="/kontakt"
                  style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full font-black text-white hover:shadow-lg transition-all duration-300 shadow-md hover:opacity-90 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  KOSTENLOSE BERATUNG
                </motion.a>
                <motion.a
                  href="tel:+491234567890"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full font-black text-primary border-2 border-primary hover:bg-primary/10 transition-all duration-300 text-sm dark:text-white dark:border-white dark:hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 JETZT ANRUFEN
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Team Photos - ANIMATED */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/team.png"
                  alt="Team: Bea und Micha - Webdesign-Pfisterer"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Accent Circle */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
