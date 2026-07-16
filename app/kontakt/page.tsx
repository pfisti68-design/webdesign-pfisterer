'use client'

import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
      privacy: formData.get('privacy'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormState('success')
        setFormMessage('Danke! Ich melde mich in Kürze bei dir.')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setFormState('error')
        setFormMessage('Oops, da ist etwas schiefgelaufen. Bitte versuche es später erneut.')
      }
    } catch (error) {
      setFormState('error')
      setFormMessage('Verbindungsfehler. Bitte versuche es später erneut.')
    }

    setTimeout(() => setFormState('idle'), 5000)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="text-primary font-black text-xs tracking-widest uppercase">Kontakt</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Lass uns</span>
            <br />
            <span className="text-primary">reden</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Du hast eine Frage zu deinem Website-Projekt? Lass mich wissen, was du brauchst. Ich antworte schnell und zuverlässig.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div>
                <span className="text-primary font-black text-xs tracking-widest uppercase block mb-2">Kontaktiere mich</span>
                <h2 className="text-3xl font-black text-black dark:text-white tracking-tight">
                  Mehrere Wege zum Kontakt
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    label: 'Email',
                    value: 'pfisti68@gmail.com',
                    link: 'mailto:pfisti68@gmail.com',
                    desc: 'Schreib mir eine Email – ich antworte innerhalb von 24 Stunden.'
                  },
                  {
                    label: 'Standort',
                    value: 'Flein bei Heilbronn',
                    link: null,
                    desc: 'Ich bin lokal im Raum Heilbronn erreichbar und vor Ort verfügbar.'
                  },
                  {
                    label: 'Angebot',
                    value: 'Kostenloses Erstgespräch',
                    link: null,
                    desc: 'Unverbindlich und kostenlos – wir schauen, ob wir zusammenpassen.'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wide">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-2xl font-black text-black dark:text-white hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-2xl font-black text-black dark:text-white">
                        {item.value}
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-black text-black dark:text-white mb-8 tracking-tight">
                Schreib mir eine Nachricht
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-black text-black dark:text-white mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Dein Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-black text-black dark:text-white mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-black text-black dark:text-white mb-2 uppercase tracking-wide">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-black text-black dark:text-white mb-2 uppercase tracking-wide">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Dein Unternehmen"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-black text-black dark:text-white mb-2 uppercase tracking-wide">
                    Ich bin interessiert in
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">-- Wähle einen Service --</option>
                    <option value="webdesign">Webdesign & Development</option>
                    <option value="relaunch">Relaunch & Modernisierung</option>
                    <option value="seo">SEO-Optimierung</option>
                    <option value="wartung">Website-Wartung</option>
                    <option value="anderes">Etwas anderes</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-black text-black dark:text-white mb-2 uppercase tracking-wide">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Sag mir, woran du arbeitest oder was du brauchst..."
                  />
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    required
                    className="w-5 h-5 rounded border-2 border-gray-200 dark:border-gray-600 text-primary cursor-pointer mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Ich akzeptiere die{' '}
                    <a href="/datenschutz" className="text-primary font-black hover:underline">
                      Datenschutzbestimmungen
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  style={{ backgroundImage: 'linear-gradient(135deg, #B81D63 0%, #8B2D7A 100%)' }}
                  className="w-full px-6 py-4 rounded-lg font-black text-white disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-lg hover:opacity-90"
                >
                  {formState === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                {/* Message */}
                {formState !== 'idle' && (
                  <div
                    className={`p-4 rounded-lg text-center font-semibold ${
                      formState === 'success'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-primary font-black text-xs tracking-widest uppercase block mb-4">Fragen</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            <span className="text-black dark:text-white">Häufig gestellte Fragen</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Wie schnell antwortest du?',
                a: 'Ich antworte in der Regel innerhalb von 24 Stunden. Emails in den Morgenstunden sind oft schneller!'
              },
              {
                q: 'Gibt es ein Erstgespräch?',
                a: 'Ja! Ich biete ein kostenloses, unverbindliches Gespräch an. Wir schauen, ob wir zusammenpassen und was du brauchst.'
              },
              {
                q: 'Wie läuft ein Projekt ab?',
                a: 'Wir starten mit einem Gespräch, dann erstelle ich ein Angebot. Nach Beauftragung folgen Analyse, Design, Entwicklung und Launch.'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-black text-black dark:text-white text-lg mb-3 tracking-tight">
                  {item.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
