

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function MartinaFooter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${dayName}, ${month} ${day}, ${year} | ${hours}:${minutes}:${seconds}`;
  };

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Other Information', href: '#info' },
    { name: 'Contact', href: '#contact' }
  ];

  const quickLinks = [
    { name: 'Our Programs', href: '#programs' },
    { name: 'Projects', href: '#projects' },
    { name: 'News & Events', href: '#news' },
    { name: 'Get Involved', href: '#volunteer' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:bg-red-600' }
  ];

  return (
    <div className="">
      <footer className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 animate-pulse"></div>
        
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 relative inline-block">
                About Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-400 -mb-2"></span>
              </h3>
              <p className="font-semibold text-white mb-4">
                Martina Centre for Sustainable Development
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-slate-300 text-sm">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Block E, Flat 1, Sky Memorial Complex, Herbert Macauley Way, Wuse Zone 5, FCT- Abuja, Nigeria</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300 text-sm">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>+234 80 6576 6583</div>
                    <div>+234 81 8614 2941</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-300 text-sm">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>office@martinacentre.org</span>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-6 relative inline-block">
                Navigation
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-400 -mb-2"></span>
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 text-sm hover:text-emerald-400 transition-all duration-300 inline-block hover:translate-x-2 relative group"
                    >
                      <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-400 -mb-2"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 text-sm hover:text-emerald-400 transition-all duration-300 inline-block hover:translate-x-2 relative group"
                    >
                      <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-6 relative inline-block">
                Connect With Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-400 -mb-2"></span>
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Follow us on social media for updates
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className={`w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 ${social.color} backdrop-blur-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-300 text-sm text-center md:text-left">
                © {currentTime.getFullYear()} Martina Centre for Sustainable Development. All Rights Reserved
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <Clock className="w-4 h-4 animate-pulse" />
                <span>{formatTime(currentTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}