import React from 'react';

import {
  FaArrowRight,
  FaBookOpen,
  FaFlask,
  FaCity,
  FaBullseye,
} from 'react-icons/fa';


const About = () => {
  return (
    <div className="bg-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

       
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-blue-900 font-semibold text-brand-primary uppercase tracking-wide">Who We Are</h2>
          <p className="mt-2 text-4xl leading-tight font-extrabold text-white sm:text-5xl">
            Empowering Communities for a Sustainable Future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-brand-text mx-auto">
            The Martina Centre for Sustainable Development (NGO-MFI) is dedicated to fostering growth and reducing poverty in rural Nigeria.
          </p>
          <p className="mt-2 max-w-2xl text-lg font-medium text-brand-subtle mx-auto">
            (In Consultative Status with UN Ecosoc)
          </p>
          <button className="mt-8 inline-flex items-center bg-blue-900 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 transform hover:-translate-y-1">
            Learn More About Us
            <FaArrowRight className="ml-3 -mr-1 h-5 w-5" />
          </button>
        </div>

      
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

         
          <div className="bg-brand-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-start border border-blue-700 animate-fade-in-up animation-delay-200">
            <div className="p-4 bg-brand-primary/10 rounded-full text-brand-primary mb-6">
              <FaBookOpen className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Land Use and Agricultural Development Schemes</h3>
            <p className="text-brand-text leading-relaxed mb-6 flex-grow">
              In areas of agricultural production, primitive farming methods have meant a rapid loss of soil fertility and poor returns. We implement sustainable practices.
            </p>
            <button className="text-blue-700 hover:text-blue-400 flex items-center">
              Read More
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

         
          <div className="bg-brand-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-start border border-blue-700 animate-fade-in-up animation-delay-400">
            <div className="p-4 bg-brand-secondary/10 rounded-full text-brand-secondary mb-6">
              <FaFlask className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Research and Social Action</h3>
            <p className="text-brand-text leading-relaxed mb-6 flex-grow">
              We conduct vital research to inform social action, ensuring our programs are evidence-based and impactful for the communities we serve.
            </p>
            <button className="text-blue-700 hover:text-blue-400 flex items-center">
              Read More
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="bg-brand-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-start border border-blue-700 animate-fade-in-up animation-delay-600">
            <div className="p-4 bg-brand-primary/10 rounded-full text-brand-primary mb-6">
              <FaCity className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Urban Poverty and Urban Renewal</h3>
            <p className="text-brand-text leading-relaxed mb-6 flex-grow">
              Our initiatives extend to urban areas, tackling poverty through renewal projects that create sustainable living environments and opportunities.
            </p>
            <button className="text-blue-800 hover:text-blue-400 flex items-center">
              Read More
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

     
        <div className="mt-20 bg-blue-900 text-white rounded-xl shadow-lg p-3 py-7 md:p-12 animate-fade-in-up">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-white/20 rounded-full text-white mr-4">
              <FaBullseye className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">Comprehensive Overview</h3>
          </div>
          <p className="text-lg  text-teal-50 leading-relaxed opacity-90 mb-6">
            At the dawn of the 21st century, developing nations like Nigeria are still saddled with basic problems such as poverty, characterized by malnutrition, illiteracy, disease, poor housing and environmental degradation. The Martina Centre works to address these multifaceted challenges through holistic community development programs. Our approach integrates sustainable agriculture, educational initiatives, health awareness campaigns, and microfinance services to empower individuals and families, fostering resilience and self-sufficiency.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-2 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-900 hover:border-blue-900 transition-colors duration-300">
            Discover Our Full Impact
            <FaArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

      </div> 
    </div>
  );
};

export default About;
