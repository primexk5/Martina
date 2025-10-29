import React from 'react'

// Minimalist, responsive section for Objectives & Mission
// Uses TailwindCSS utilities and public images (can be overridden via props)
export default function ObjectivesMission({
  title = 'Our Objectives and Mission',
  copy = `Martina Centre for Sustainable Development (MARTINA CENTRE) advances
poverty reduction and community resilience through research, education,
health, shelter, nutrition, and income‑generation initiatives. We mobilize
resources and partner with rural communities across Nigeria to deliver
sustainable impact.`,
  ctaLabel = 'Read More',
  onCtaClick = () => {},
  imageSrc = '/Nigeria.jpeg',
  imageAlt = 'Focus area map',
}) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-900">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {copy}
            </p>
            <button
              onClick={onCtaClick}
              className="mt-8 inline-flex items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              {ctaLabel}
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
