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
      <section className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <span className="text-pink-600 font-black text-sm tracking-widest uppercase block mb-6">Kontakt</span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-gray-900 dark:text-white">
            Lass uns<br />
            reden
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Du hast eine Frage zu deinem Website-Projekt? Lass mich wissen, was du brauchst. Ich antworte schnell und zuverlässig.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div>
                <span className="text-pink-600 font-black text-xs tracking-widest uppercase block mb-2">Kontaktiere mich</span>
                <p className="text-gray-600 dark:text-gray-400">
                  Schreib mir eine E-Mail oder ruf mich an. Ich freue mich, von dir zu hören!
                </p>
              </div>

              <div>
                <h3 className="font-black text-lg mb-4 text-gray-900 dark:text-white">Email</h3>
                <a href="mailto:kontakt@webdesign-pfisterer.de" className="text-pink-600 font-black hover:underline">
                  kontakt@webdesign-pfisterer.de
                </a>
              </div>

              <div>
                <h3 className="font-black text-lg mb-4 text-gray-900 dark:text-white">Telefon</h3>
                <a href="tel:+497131123456" className="text-pink-600 font-black hover:underline">
                  +49 7131 123456
                </a>
              </div>

              <div>
                <h3 className="font-black text-lg mb-4 text-gray-900 dark:text-white">Adresse</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Webdesign-Pfisterer<br />
                  Heilbronn, Baden-Württemberg<br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-lg border border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-black mb-2 text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-pink-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-black mb-2 text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-pink-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-black mb-2 text-gray-900 dark:text-white">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-pink-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-black mb-2 text-gray-900 dark:text-white">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-pink-600 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                    Ich akzeptiere die Verarbeitung meiner Daten nach der Datenschutzerklärung.
                  </label>
                </div>

                {formState === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg font-black">
                    {formMessage}
                  </div>
                )}

                {formState === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg font-black">
                    {formMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full px-10 py-4 bg-pink-600 text-white font-black rounded-lg hover:bg-pink-700 transition disabled:opacity-50"
                >
                  {formState === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
