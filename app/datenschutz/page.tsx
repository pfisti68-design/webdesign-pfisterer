import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Webdesign-Pfisterer',
  description: 'Datenschutzerklärung und DSGVO-Compliance von Webdesign-Pfisterer',
  robots: 'index, follow',
}

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white tracking-tight">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 space-y-12">
          {/* Allgemeine Hinweise */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-lg font-black text-black dark:text-white mb-4 tracking-tight">
              Allgemeine Hinweise
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du unsere Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
            </p>
          </div>

          {/* Datenerfassung */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              2. Datenerfassung auf unserer Website
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-black dark:text-white mb-3 tracking-tight">
                  Wer ist verantwortlich für die Datenerfassung?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber Michael Pfisterer. Dessen Kontaktdaten findest du im Impressum dieser Website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-black dark:text-white mb-3 tracking-tight">
                  Wie erfassen wir deine Daten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Deine Daten werden zum einen dadurch erhoben, dass du sie uns mitteilst (z. B. über das Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten wie Internetbrowser, Betriebssystem oder Uhrzeit des Seitenzugriffs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-black dark:text-white mb-3 tracking-tight">
                  Wofür nutzen wir deine Daten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse deines Nutzerverhaltens verwendet werden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-black dark:text-white mb-3 tracking-tight">
                  Welche Rechte hast du bezüglich deiner Daten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Kontaktiere uns dafür unter pfisti68@gmail.com.
                </p>
              </div>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              3. Hosting und Speicherung
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Unsere Website wird auf einem Server gehostet. Die Hostingservices werden von einem Drittanbieter bereitgestellt. Die Betreibung und Wartung der Infrastruktur erfolgt durch den Hosting-Provider.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-black dark:text-white">Rechtsgrundlage:</strong> Das Speichern von Logdaten erfolgt auf Grundlage unseres berechtigten Interesses, die Stabilität und Sicherheit unserer Website zu gewährleisten (Art. 6 Abs. 1 f DSGVO).
            </p>
          </div>

          {/* Kontaktformular */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              4. Kontaktformular
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Wenn du uns über das Kontaktformular eine Nachricht sendest, werden die von dir eingegebenen Daten (Name, E-Mail, ggf. Telefon und Nachricht) gespeichert. Diese Daten nutzen wir ausschließlich zur Beantwortung deiner Anfrage und zur Kontaktaufnahme.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-black dark:text-white">Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 a DSGVO) sowie unseres berechtigten Interesses, deine Anfrage zu bearbeiten (Art. 6 Abs. 1 f DSGVO).
            </p>
          </div>

          {/* Dauer der Speicherung */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              5. Dauer der Speicherung
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Deine Daten aus dem Kontaktformular werden gelöscht, sobald die Anfrage behandelt wurde oder spätestens nach 3 Monaten. Server-Logdaten werden nach 30 Tagen gelöscht.
            </p>
          </div>

          {/* Deine Rechte */}
          <div>
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              6. Deine Rechte nach der DSGVO
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-black dark:text-white">Recht auf Auskunft (Art. 15 DSGVO):</strong> Du hast das Recht zu erfahren, welche Daten wir über dich speichern.
              </p>

              <p className="leading-relaxed">
                <strong className="text-black dark:text-white">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Du kannst die Berichtigung unrichtiger Daten verlangen.
              </p>

              <p className="leading-relaxed">
                <strong className="text-black dark:text-white">Recht auf Löschung (Art. 17 DSGVO):</strong> Du kannst die Löschung deiner Daten verlangen (unter bestimmten Voraussetzungen).
              </p>

              <p className="leading-relaxed">
                <strong className="text-black dark:text-white">Recht auf Einschränkung (Art. 18 DSGVO):</strong> Du kannst die Einschränkung der Verarbeitung verlangen.
              </p>

              <p className="leading-relaxed">
                <strong className="text-black dark:text-white">Widerspruchsrecht (Art. 21 DSGVO):</strong> Du kannst der Verarbeitung widersprechen.
              </p>

              <p className="leading-relaxed">
                <strong className="text-black dark:text-white">Recht auf Beschwerde (Art. 77 DSGVO):</strong> Du hast das Recht, dich bei der zuständigen Datenschutzbehörde zu beschweren.
              </p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="pt-8 border-t-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight">
              7. Kontakt
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Wenn du Fragen zu dieser Datenschutzerklärung hast oder deine Rechte wahrnehmen möchtest, kontaktiere mich bitte:
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-black dark:text-white">Michael Pfisterer</strong>
                <br />
                E-Mail:{' '}
                <a href="mailto:pfisti68@gmail.com" className="text-primary hover:opacity-80 font-black">
                  pfisti68@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Last Update */}
          <div className="text-sm text-gray-600 dark:text-gray-400 italic">
            Zuletzt aktualisiert: 15. Juli 2026
          </div>
        </div>
      </section>
    </>
  )
}
