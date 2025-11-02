import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  const images = [
    '/farm1.jpeg',
    '/farm2.jpeg',
    '/hause.jpeg',
    '/meeting.jpeg',
    '/people1.jpeg',
    '/meeting2.jpeg',
  ]

  return (
    <div
      id="home"
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/farm5.avif')" }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10  mx-auto px-6 lg:px-60 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <p className="text-base font-semibold text-emerald-400 tracking-wider uppercase">
              Martina Centre for Sustainable Development
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Empowering Nigerian Communities
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto lg:mx-0">
              A Non-Governmental Organization and Micro-Finance Institution
              dedicated to reducing poverty and fostering resilience in rural
              Nigeria.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-600 transition-transform transform hover:scale-105"
              >
                Discover Our Mission
                <FaArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/20 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/30 transition"
              >
                Get Involved
              </a>
            </div>

            <div className="mt-12 border-l-4 border-emerald-500 pl-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                In Special Consultative Status
              </p>
              <p className="text-lg font-bold text-white mt-1">
                With United Nations ECOSOC
              </p>
            </div>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="hidden lg:grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-300">
            {images.map((src, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg] ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={src}
                  alt={`Martina Centre activity ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero