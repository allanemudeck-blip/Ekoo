import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Truck, Anchor, FileText, CheckCircle, Globe, 
  Briefcase, PenTool, Car, Ship, Users, Star, ArrowRight,
  MessageCircle, Loader2
} from 'lucide-react';

const Logo = ({ className = "h-16 w-auto" }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="EKOO BUSINESS CONSULT Logo">
    {/* Defs for gradients or reusable paths */}
    <defs>
      <path id="textCurve" d="M 80,200 A 120,120 0 0,1 320,200" fill="none" />
    </defs>

    {/* Yellow Arch */}
    <path d="M 40,220 A 160,160 0 0,1 360,220" fill="none" stroke="#FCD34D" strokeWidth="20" strokeLinecap="butt" />
    {/* Arrow heads for arch */}
    <polygon points="40,220 20,200 60,200" fill="#000" transform="rotate(180 40 220) translate(0, -10)" />
    <polygon points="360,220 340,200 380,200" fill="#000" transform="rotate(180 360 220) translate(0, -10)" />

    {/* Stars */}
    <g transform="translate(200, 55)">
      <polygon points="0,-12 3,-4 12,-4 5,2 8,11 0,6 -8,11 -5,2 -12,-4 -3,-4" fill="#DC2626" transform="translate(0, -25) scale(0.8)" />
      <polygon points="0,-12 3,-4 12,-4 5,2 8,11 0,6 -8,11 -5,2 -12,-4 -3,-4" fill="#000" transform="scale(1)" />
      <polygon points="0,-12 3,-4 12,-4 5,2 8,11 0,6 -8,11 -5,2 -12,-4 -3,-4" fill="#DC2626" transform="translate(0, 25) scale(0.8)" />
    </g>

    {/* Globe Wireframe */}
    <circle cx="200" cy="220" r="100" fill="white" stroke="#000" strokeWidth="2" />
    <ellipse cx="200" cy="220" rx="100" ry="40" fill="none" stroke="#000" strokeWidth="1" />
    <ellipse cx="200" cy="220" rx="40" ry="100" fill="none" stroke="#000" strokeWidth="1" />
    <path d="M 100,220 L 300,220" stroke="#000" strokeWidth="1" />
    <path d="M 200,120 L 200,320" stroke="#000" strokeWidth="1" />
    
    {/* Blue Oval */}
    <ellipse cx="200" cy="220" rx="110" ry="55" fill="#1e3a8a" />
    
    {/* EBC Text */}
    <text x="200" y="240" textAnchor="middle" fill="#DC2626" fontSize="70" fontWeight="900" fontFamily="Arial, sans-serif" style={{textShadow: "2px 2px 0px white"}}>EBC</text>

    {/* Curved Company Name */}
    <text width="400">
      <textPath href="#textCurve" startOffset="50%" textAnchor="middle" fill="#1e3a8a" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1px">
        EKOO BUSINESS CONSULT
      </textPath>
    </text>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-slate-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Logo className="h-20 w-auto" />
            <div className="hidden sm:block font-bold text-xl leading-tight text-white">
              EKOO<br/><span className="text-amber-500">BUSINESS</span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Phone Number in Navbar */}
            <div className="ml-8 pl-8 border-l border-slate-700 flex flex-col items-start justify-center gap-1">
              <a href="tel:+256787672050" className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
                  <Phone size={16} />
                  <span className="font-bold text-sm whitespace-nowrap">+256 787 672 050</span>
              </a>
              <a href="https://wa.me/256703135573" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  <MessageCircle size={16} />
                  <span className="font-bold text-sm whitespace-nowrap">+256 703 135 573</span>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-slate-700 pt-3 mt-3 px-3 space-y-2">
                <a href="tel:+256787672050" className="flex items-center gap-3 text-amber-500 font-bold">
                  <Phone size={20} /> +256 787 672 050
                </a>
                <a href="https://wa.me/256703135573" className="flex items-center gap-3 text-green-400 font-bold">
                  <MessageCircle size={20} /> +256 703 135 573
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Logistics Background" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
            <Logo className="h-32 w-32 md:h-48 md:w-48 drop-shadow-2xl filter" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6">
          EKOO BUSINESS CONSULT (U) LTD
        </h1>
        <p className="text-xl sm:text-2xl text-amber-500 font-semibold italic mb-8">
          “We Make Your Dream Work”
        </p>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner in International Freight Forwarding, Shipping, Clearing, Business Services, and Logistics Solutions in Uganda and worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Get a Quote Today
          </a>
          <a href="#about" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-lg transition-all">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    "Experienced freight & clearing agents",
    "Fast, reliable service delivery",
    "Certified consultants",
    "Affordable and transparent pricing",
    "Customer-first approach"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              EKOO BUSINESS CONSULT (U) LTD is a dynamic and fully registered Ugandan company offering professional business consultancy, logistics solutions, freight forwarding, and customs clearing services. We support individuals, startups, SMEs, corporate organizations, and international clients with seamless, reliable services.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold text-lg text-slate-900 mb-2">Our Mission</h4>
              <p className="text-gray-700">To deliver efficient, affordable, and trustworthy business and logistics services that help clients achieve their goals.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-900">
              <h4 className="font-bold text-lg text-slate-900 mb-2">Our Vision</h4>
              <p className="text-gray-700">To be the trusted leader in logistics, clearing, and business consultancy in East Africa and beyond.</p>
            </div>

            <div className="pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center mb-3">
                  <CheckCircle className="text-amber-500 mr-3" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
               alt="Team at work" 
               loading="lazy"
               className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[500px]"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Customs Clearing",
      icon: <FileText size={40} />,
      description: "Expert handling of customs documentation, tax clearance, and compliance for imports and exports."
    },
    {
      title: "Freight Forwarding",
      icon: <Ship size={40} />,
      description: "Sea, air, and land freight solutions ensuring your cargo reaches its destination safely and on time."
    },
    {
      title: "Transportation",
      icon: <Truck size={40} />,
      description: "Reliable fleet services for local and regional transport of goods, containers, and heavy machinery."
    },
    {
      title: "Car Import & Registration",
      icon: <Car size={40} />,
      description: "Complete assistance with vehicle importing, URA registration, and number plate acquisition."
    },
    {
      title: "Business Consultancy",
      icon: <Briefcase size={40} />,
      description: "Strategic advice for startups and companies on registration, compliance, and growth in Uganda."
    },
    {
      title: "Procurement & Supply",
      icon: <Globe size={40} />,
      description: "Sourcing and supplying general merchandise and specialized equipment for various industries."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive logistics and business solutions tailored to your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-amber-500 group">
              <div className="text-amber-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-slate-700 font-semibold hover:text-amber-600 transition-colors">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="p-6">
                <div className="text-5xl font-bold text-amber-500 mb-2">500+</div>
                <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="p-6">
                <div className="text-5xl font-bold text-amber-500 mb-2">1200+</div>
                <div className="text-gray-300">Shipments Delivered</div>
            </div>
            <div className="p-6">
                <div className="text-5xl font-bold text-amber-500 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="p-6">
                <div className="text-5xl font-bold text-amber-500 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
            </div>
        </div>

        <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Fleet & Cargo Gallery</h3>
            <p className="text-gray-400">A glimpse into our operations and the cargo we handle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Item 1: Containers */}
           <div className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-35d3d4018519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Shipping Containers" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold text-white">Shipping Containers</h4>
                  <p className="text-amber-400 text-sm">Secure Global Freight</p>
              </div>
           </div>

           {/* Item 2: Long Cars/Trucks */}
           <div className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Long Trucks and Heavy Carriers" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold text-white">Heavy Transport & Long Cars</h4>
                  <p className="text-amber-400 text-sm">Logistics Fleet</p>
              </div>
           </div>

           {/* Item 3: Small Modern Cars */}
           <div className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Small Modern Cars" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold text-white">Modern Car Imports</h4>
                  <p className="text-amber-400 text-sm">Efficient & Reliable</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  // Configured with high-quality stock images representing diverse teams (male and female)
  const teamPhotos = {
    // Operations: Professional group team (Mixed male/female)
    operations: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    // Field: Professional outdoor/logistics team (Mixed male/female)
    field: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  };

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">The dedicated professionals behind our success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 - Management (Company Logo) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="h-80 overflow-hidden bg-slate-100 flex items-center justify-center">
               {/* Displaying Company Logo as requested */}
               <Logo className="w-64 h-64 drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 text-center border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mt-2">ONYAI PETER</h3>
              <p className="text-amber-600 font-medium">MANAGING DIRECTOR</p>
            </div>
          </div>

          {/* Member 2 - Operations (Mixed Team) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="h-80 overflow-hidden">
              <img 
                src={teamPhotos.operations}
                alt="Operations Team (Male and Female Professionals)" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900">Operations Team</h3>
              <p className="text-amber-600 font-medium">Logistics & Supply</p>
            </div>
          </div>

          {/* Member 3 - Field (Mixed Team) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="h-80 overflow-hidden">
              <img 
                src={teamPhotos.field}
                alt="Field Team (Mixed Professional Team)" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900">Field Team</h3>
              <p className="text-amber-600 font-medium">Senior Clearing Agents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const response = await fetch("https://formspree.io/f/xpweznbz", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const result = await response.json();
        setStatus({ submitting: false, succeeded: false, error: result.errors ? result.errors.map(err => err.message).join(', ') : "There was a problem submitting your form" });
      }
    } catch (error) {
      setStatus({ submitting: false, succeeded: false, error: "Network error, please try again later." });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">Get in touch for a quote or consultation today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="+256 787 672050"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Customs Clearing">Customs Clearing</option>
                    <option value="Freight Forwarding">Freight Forwarding</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Business Consultancy">Business Consultancy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your cargo or business needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.submitting}
                className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all shadow-md hover:shadow-lg flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status.succeeded && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
                  Thank you! Your message has been sent successfully. We will contact you soon.
                </div>
              )}
              
              {status.error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
                  {status.error}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900">Our Location</h4>
                <p className="text-gray-600">Plot No M175 Jinja Road</p>
                <p className="text-gray-600">Management Training & Advisory Centre (MTAC)</p>
                <p className="text-gray-500 text-sm">P.O BOX 26693 KAMPALA (U)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                <div className="flex flex-col gap-1">
                   <a href="mailto:ekoobusiness@gmail.com" className="text-gray-600 hover:text-amber-600 transition-colors">ekoobusiness@gmail.com</a>
                   <a href="mailto:onyaipeter@gmail.com" className="text-gray-600 hover:text-amber-600 transition-colors">onyaipeter@gmail.com</a>
                </div>
                <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900">Contact Info</h4>
                <div className="flex flex-col gap-1">
                  <a href="tel:+256787672050" className="text-gray-600 hover:text-amber-600 transition-colors">Calls: +256 787 672 050</a>
                  <a href="https://wa.me/256703135573" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 transition-colors">
                    <MessageCircle size={16} /> WhatsApp: +256 703 135 573
                  </a>
                </div>
                <p className="text-gray-500 text-sm mt-1">Mon - Sat, 8am - 6pm</p>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl text-white mt-8">
              <h4 className="font-bold text-xl mb-4">Ready to start?</h4>
              <p className="mb-6 text-gray-300">Contact us today for a free quote on your shipment or business registration needs.</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+256787672050" className="flex items-center text-amber-500 font-bold hover:text-amber-400">
                  <Phone size={20} className="mr-2" /> Call Now
                </a>
                <a href="https://wa.me/256703135573" className="flex items-center text-green-400 font-bold hover:text-green-300">
                  <MessageCircle size={20} className="mr-2" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-12 w-auto" />
              <div className="font-bold text-lg leading-tight">
                EKOO<br/><span className="text-amber-500">BUSINESS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in logistics, freight forwarding, and business consultancy in Uganda.
            </p>
            <div className="text-sm text-gray-500 space-y-1">
                <p>Plot No M175 Jinja Road</p>
                <p>Management Training & Advisory Centre (MTAC)</p>
                <p>P.O BOX 26693 KAMPALA (U)</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Customs Clearing</li>
              <li className="text-gray-400">Freight Forwarding</li>
              <li className="text-gray-400">Transportation</li>
              <li className="text-gray-400">Business Consultancy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-gray-500">
           <p>© 2024 Ekoo Logistics & Freight Services — Providing freight, delivery, and customs clearing services in Uganda.</p>
        </div>
      </div>
    </footer>
  );
};

const SEOContent = () => (
  <section className="bg-slate-50 py-12 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Logistics & Freight Services in Uganda</h2>
      <p className="text-gray-600 mb-4">
        Ekoo Logistics provides fast, reliable, and affordable logistics and freight forwarding services across Uganda.
        We specialize in customs clearing, shipping, delivery, and transportation solutions for individuals and businesses.
        Our goal is to make your import, export, and delivery process smooth and stress-free by offering professional support from start to finish.
      </p>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">Why Choose Ekoo Logistics?</h3>
      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        <li>Fast delivery and shipping services</li>
        <li>Affordable customs clearing and documentation</li>
        <li>Safe and secure transport</li>
        <li>Professional 24/7 customer support</li>
        <li>Trusted by businesses and individuals across Uganda</li>
      </ul>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <SEOContent />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);