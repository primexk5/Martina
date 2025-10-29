import React from 'react';

const Hero = () => {
  const images = [
    "/farm1.jpeg",
    "/farm2.jpeg",
    "/hause.jpeg",
    "/meeting.jpeg",
    "/people1.jpeg",
    "/meeting2.jpeg"
  ];

  return (
    <div className="w-full bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center px-6 py-24 md:py-32">
        
        <div className="bg-blue-900 text-white  w-64 h-64 flex items-center justify-center font-black text-6xl mb-8">
          MC
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-blue-900">
          The Martina Centre for Sustainable Development
        </h1>
        
        <p className="text-lg md:text-xl font-light text-gray-600 mb-8">
          (A Non-Governmental Organization / Micro Finance Institution)
        </p>

        <div className="bg-blue-50 border border-blue-200 px-6 py-4 rounded-xl shadow-sm mb-12 max-w-2xl">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-600">
            In Special Consultative Status
          </p>
          <p className="text-lg md:text-xl font-bold text-blue-900 mt-1">
            With United Nations Economic & Social Commission
          </p>
          <p className="text-sm md:text-base font-light text-gray-600 mt-1">
            ECOSOC
          </p>
        </div>

        <p className="text-xl md:text-2xl font-medium max-w-4xl leading-relaxed mb-16 text-blue-800">
          WORKING TOWARDS INSECURITY & POVERTY REDUCTION IN THE RURAL COMMUNITIES OF NIGERIA
        </p>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-10">

            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div key={index} className={`rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <img
                      src={src}
                      alt={`Martina Centre activity ${index + 1}`}
                      className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-8 w-full">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm w-full max-w-xs">
                <p className="text-blue-900 text-sm font-semibold mb-2">Our Work Aligns With</p>
                <img 
                  src="/logos.jpg" 
                  alt="UN Sustainable Development Goals" 
                  className="w-full h-auto rounded" 
                />
              </div>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm w-full max-w-xs">
                <p className="text-blue-900 text-sm font-semibold mb-2">Our Focus Area</p>
                <img 
                  src="/Nigeria.jpeg" 
                  alt="Map of Nigeria" 
                  className="w-full h-auto rounded" 
                />
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;