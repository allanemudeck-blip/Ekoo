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
          <div className="hidden md:block">
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
              <h4 className="font-bold text-lg text-slate-900 mb-2">Our Motto</h4>
              <p className="text-gray-700 italic">“We Make Your Dream Work.”</p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-amber-500">Why Choose Us</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ title: string, items: string[], icon: any, colorClass: string }> = ({ title, items, icon: Icon, colorClass }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
    <div className={`p-6 ${colorClass} text-white`}>
      <Icon className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-600 text-sm">
            <ChevronRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Logistics & Freight",
      icon: Truck,
      colorClass: "bg-blue-600",
      items: [
        "International Freight Forwarding",
        "Cargo Handling",
        "Clearing & Shipping Agent",
        "Customs Clearing Agents",
        "Container Transportation",
        "Bond & Warehousing Coordination"
      ]
    },
    {
      title: "Business Consultancy",
      icon: Briefcase,
      colorClass: "bg-slate-700",
      items: [
        "Business Plans",
        "Company Profiling",
        "Management Training (MTAC)",
        "Business Advisory Services"
      ]
    },
    {
      title: "Registration & Legal",
      icon: FileText,
      colorClass: "bg-emerald-600",
      items: [
        "New Company Registration",
        "TIN Number Application",
        "Trading License Assistance"
      ]
    },
    {
      title: "Printing & Branding",
      icon: PenTool,
      colorClass: "bg-purple-600",
      items: [
        "Banners, Flyers, Posters",
        "Corporate Branding",
        "Company Profiles",
        "Vehicle Branding",
        "ID Cards & Business Cards"
      ]
    },
    {
      title: "Other Services",
      icon: Globe,
      colorClass: "bg-amber-600",
      items: [
        "Driving Permit Processing",
        "General Business Support"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">Showcasing our capabilities in heavy transport and vehicle importation.</p>
        </div>

        {/* Category 1: Long Vehicles */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Truck className="w-8 h-8 text-amber-500 mr-3" />
            <h3 className="text-2xl font-bold text-slate-800">Long Vehicles & Containers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=500",
               "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=500",
               "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=500",
               "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=500"
             ].map((src, i) => (
               <div key={i} className="group relative overflow-hidden rounded-lg h-48">
                 <img src={src} alt="Truck" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-semibold">Logistics</span>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Category 2: Latest Cars */}
        <div>
          <div className="flex items-center mb-8">
            <Car className="w-8 h-8 text-amber-500 mr-3" />
            <h3 className="text-2xl font-bold text-slate-800">Vehicle Importation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600" alt="Luxury Car" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="font-bold text-lg">Toyota Land Cruiser</h4>
              <p className="text-sm text-gray-500">Clearance & Delivery</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600" alt="Luxury Car" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="font-bold text-lg">Mercedes Benz</h4>
              <p className="text-sm text-gray-500">Import Services</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80&w=600" alt="Luxury Car" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="font-bold text-lg">BMW X Series</h4>
              <p className="text-sm text-gray-500">Freight Forwarding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember: React.FC<{ name: string, role: string, bio: string, image: string }> = ({ name, role, bio, image }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-amber-400 font-medium">{role}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
      <div className="flex space-x-3">
        <button className="p-2 bg-slate-100 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
          <Mail size={16} />
        </button>
        <button className="p-2 bg-slate-100 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
          <Phone size={16} />
        </button>
      </div>
    </div>
  </div>
);

const Team = () => {
  const team = [
    {
      name: "Onyai Peter",
      role: "Managing Director",
      bio: "The visionary leader behind EKOO BUSINESS CONSULT. With over 15 years in logistics and business management, Peter ensures every client's dream works through strategic planning and efficient execution.",
      image: "https://storage.googleapis.com/aistudio-cms-uv2-prod/a64a377d-78cf-43c2-80cf-f3e1a0d8ec8c.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals working tirelessly to make your dream work.
          </p>
        </div>

        <div className="flex justify-center">
          {team.map((member, index) => (
             <div key={index} className="w-full max-w-md">
                <TeamMember {...member} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xpweznbz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to streamline your logistics or register your business? Contact us today for a quote or consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-amber-500 mt-1 mr-4" />
                <div>
                  <p className="text-sm text-gray-400">Contact Person</p>
                  <p className="text-lg font-bold">ONYAI PETER (Managing Director)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-500 mt-1 mr-4" />
                <div>
                  <p className="text-sm text-gray-400">Phone Numbers</p>
                  <div className="flex items-center flex-wrap gap-2">
                    <a href="tel:+256703135573" className="text-lg hover:text-amber-500 transition-colors">+256 703 135573</a>
                    <a 
                      href="https://wa.me/256703135573" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#25D366] bg-green-100 hover:bg-green-200 px-2 py-0.5 rounded text-xs font-bold transition-colors shadow-sm"
                    >
                      <MessageCircle size={14} className="mr-1" fill="currentColor" /> WhatsApp
                    </a>
                  </div>
                  <a href="tel:+256787672050" className="text-lg block hover:text-amber-500 transition-colors">+256 787 672050</a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-500 mt-1 mr-4" />
                <div>
                  <p className="text-sm text-gray-400">Emails</p>
                  <a href="mailto:ekoolbusiness@gmail.com" className="text-lg block hover:text-amber-500 transition-colors">ekoolbusiness@gmail.com</a>
                  <a href="mailto:onyaipeter@gmail.com" className="text-lg block hover:text-amber-500 transition-colors">onyaipeter@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-500 mt-1 mr-4" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-lg">Plot No. M175, Jinja Road</p>
                  <p className="text-gray-300">Management Training & Advisory Centre (MTAC)</p>
                  <p className="text-gray-300">1st Floor, Office No. D.2</p>
                  <p className="text-gray-300">P.O. Box 26693 Kampala (U)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="Your Name" required disabled={formStatus === 'submitting'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="+256..." disabled={formStatus === 'submitting'} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="example@email.com" required disabled={formStatus === 'submitting'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                <select name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" disabled={formStatus === 'submitting'}>
                  <option value="Logistics & Shipping">Logistics & Shipping</option>
                  <option value="Business Consultancy">Business Consultancy</option>
                  <option value="Company Registration">Company Registration</option>
                  <option value="Branding & Printing">Branding & Printing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="How can we help you?" required disabled={formStatus === 'submitting'}></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-slate-900 font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2 animate-in fade-in duration-300">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We will contact you soon.</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-2 animate-in fade-in duration-300">
                  <X className="w-5 h-5" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center gap-2">
            <Logo className="h-10 w-auto" />
          <span className="text-xl font-bold text-white">EKOO<span className="text-amber-500">BUSINESS</span></span>
        </div>
        <p className="text-sm mt-1">© {new Date().getFullYear()} EKOO Business Consult (U) Ltd. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/256703135573"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-amber-500 text-slate-900 px-8 py-3.5 rounded-full shadow-lg hover:bg-amber-400 transition-all duration-300 z-50 flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl font-bold text-lg"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 stroke-[2.5px]" />
    <span>Chat on WhatsApp</span>
  </a>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);