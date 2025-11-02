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
  imageSrc = '/map1.jpg',
  imageAlt = 'Focus area map',
}) {
  return (
    <section className="w-full relative bg-[url('/meet.jpg')] bg-cover bg-center">
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      <div className="relative z-10 mx-auto lg:px-60 px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 whitespace-pre-line max-w-2xl">
              {copy}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 transition"
              >
                {ctaLabel}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:brightness-95 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Image card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transform transition hover:scale-105"> */}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                {/* subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}
