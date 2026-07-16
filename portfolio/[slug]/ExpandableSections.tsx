'use client'

import { useState } from 'react'

export default function ExpandableSections({ project }: { project: any }) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="space-y-3">
          {/* Projektumfang */}
          <div className="border-b-2 border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setOpenSection(openSection === 'scope' ? null : 'scope')}
              className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-900 px-0 transition-colors"
            >
              <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">PROJEKTUMFANG</h3>
              <span className="text-primary font-black text-2xl flex-shrink-0">
                {openSection === 'scope' ? '−' : '+'}
              </span>
            </button>
            {openSection === 'scope' && (
              <div className="pb-6 space-y-3 text-gray-700 dark:text-gray-300">
                {project.deliverables.map((item: string, idx: number) => (
                  <p key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-black mt-1">✓</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Massnahmen */}
          <div className="border-b-2 border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setOpenSection(openSection === 'measures' ? null : 'measures')}
              className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-900 px-0 transition-colors"
            >
              <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">MASSNAHMEN</h3>
              <span className="text-primary font-black text-2xl flex-shrink-0">
                {openSection === 'measures' ? '−' : '+'}
              </span>
            </button>
            {openSection === 'measures' && (
              <div className="pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.solution.map((item: any, idx: number) => (
                  <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resultate */}
          <div className="border-b-2 border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setOpenSection(openSection === 'results' ? null : 'results')}
              className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-900 px-0 transition-colors"
            >
              <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">RESULTATE</h3>
              <span className="text-primary font-black text-2xl flex-shrink-0">
                {openSection === 'results' ? '−' : '+'}
              </span>
            </button>
            {openSection === 'results' && (
              <div className="pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((result: any, idx: number) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-primary/5 to-primary/0 rounded-lg border border-primary/20 text-center">
                    <div className="text-4xl font-black text-primary mb-2">{result.number}</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{result.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
