import {
  FaArrowRight,
  FaBookOpen,
  FaFlask,
  FaCity,
  FaBullseye,
} from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-blue-400 font-semibold uppercase text-4xl tracking-wider">
            Who We Are
          </h2>
          <h3 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Empowering Communities for a Sustainable Future
          </h3>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-slate-300 mx-auto">
            The Martina Centre for Sustainable Development (NGO-MFI) is dedicated to
            fostering growth and reducing poverty in rural Nigeria.
          </p>
          <p className="mt-2 max-w-2xl text-base text-slate-400 mx-auto italic">
            (In Consultative Status with UN ECOSOC)
          </p>

          <button className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Learn More About Us
            <FaArrowRight className="ml-3 -mr-1 h-5 w-5" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <FaBookOpen className="h-8 w-8 text-blue-500" />,
              title: 'Land Use and Agricultural Development',
              text: 'We promote sustainable farming practices that restore soil fertility and boost agricultural productivity in rural areas.',
            },
            {
              icon: <FaFlask className="h-8 w-8 text-teal-400" />,
              title: 'Research and Social Action',
              text: 'Our evidence-based research drives impactful social programs that improve lives and strengthen communities.',
            },
            {
              icon: <FaCity className="h-8 w-8 text-indigo-400" />,
              title: 'Urban Poverty and Urban Renewal',
              text: 'We implement urban renewal initiatives that foster sustainable cities and empower underserved populations.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-600 hover:bg-slate-800 transition-all duration-300 p-8 flex flex-col items-start shadow-lg hover:shadow-blue-900/20"
            >
              <div className="p-4 bg-blue-500/10 rounded-full mb-6">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                {item.text}
              </p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center font-medium transition-colors">
                Read More
                <FaArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Overview Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-900/20 via-slate-800/70 to-blue-900/20 border border-slate-700 rounded-2xl shadow-xl p-10 md:p-14 animate-fade-in-up">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-blue-600/20 rounded-full mr-4">
              <FaBullseye className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Comprehensive Overview</h3>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            At the dawn of the 21st century, developing nations like Nigeria continue
            to grapple with issues of poverty, malnutrition, illiteracy, and
            environmental degradation. The Martina Centre addresses these challenges
            through holistic programs that integrate sustainable agriculture,
            education, healthcare awareness, and microfinance — empowering individuals
            and families toward self-reliance and resilience.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full text-base font-semibold transition-colors duration-300">
            Discover Our Full Impact
            <FaArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
