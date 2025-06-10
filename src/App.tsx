import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Users, 
  Database, 
  ArrowRight, 
  Check, 
  Star, 
  Calendar,
  X,
  Mail,
  Phone,
  Building,
  ChevronRight,
  Menu,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsFormOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
    // Show success message (you could add a toast notification here)
    alert('Thank you! We\'ll be in touch soon to schedule your consultation.');
  };

  useEffect(() => {
    if (isFormOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen, isMobileMenuOpen]);

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFormOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const features = [
    {
      icon: Bot,
      title: "AI Chat Agents",
      description: "Deploy intelligent conversational agents that handle customer inquiries 24/7, provide instant support, and qualify leads automatically.",
      benefits: ["24/7 Customer Support", "Instant Response Times", "Multi-language Support", "Lead Qualification"]
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Advanced AI-powered lead generation systems that identify, qualify, and nurture prospects through personalized engagement strategies.",
      benefits: ["Automated Prospecting", "Lead Scoring", "Personalized Outreach", "Pipeline Management"]
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamlessly integrate AI automation with your existing CRM systems to streamline workflows and maximize conversion rates.",
      benefits: ["Seamless Data Sync", "Workflow Automation", "Performance Analytics", "Custom Integrations"]
    }
  ];

  const stats = [
    { number: "500%", label: "Increase in Lead Quality" },
    { number: "24/7", label: "Customer Support Coverage" },
    { number: "85%", label: "Cost Reduction" },
    { number: "98%", label: "Client Satisfaction Rate" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-[200]"
      >
        Skip to main content
      </a>

      {/* Enhanced Animated Background with Flowing Waves */}
      <div className="fixed inset-0 bg-slate-950">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Flowing wave layers */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            
            {/* First wave layer */}
            <path 
              d="M0,400 C300,300 600,500 900,350 C1050,275 1150,325 1200,300 L1200,800 L0,800 Z" 
              fill="url(#wave1)"
              className="animate-wave-slow"
            />
            
            {/* Second wave layer */}
            <path 
              d="M0,500 C250,400 550,600 800,450 C950,375 1100,425 1200,400 L1200,800 L0,800 Z" 
              fill="url(#wave2)"
              className="animate-wave-medium"
            />
            
            {/* Third wave layer */}
            <path 
              d="M0,600 C200,500 500,700 750,550 C900,475 1050,525 1200,500 L1200,800 L0,800 Z" 
              fill="url(#wave3)"
              className="animate-wave-fast"
            />
          </svg>
        </div>

        {/* Elegant flowing shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Radial highlights */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-900/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 py-6" role="banner">
        <nav className="max-w-7xl mx-auto flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center" aria-hidden="true">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TRW.AI
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-white transition-colors duration-200 focus:text-blue-400"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors duration-200 focus:text-blue-400"
            >
              About
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 p-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-slate-300 hover:text-white transition-colors duration-200 py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-300 hover:text-white transition-colors duration-200 py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  setIsFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold transition-all duration-300 mt-4"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative z-10 px-6 pt-20 pb-32" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  with AI Automation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Deploy intelligent AI agents that handle customer support, generate qualified leads, 
                and integrate seamlessly with your CRM—all while you focus on scaling your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 flex items-center space-x-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-describedby="cta-description"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
                
                <button 
                  className="px-8 py-4 border-2 border-slate-600 hover:border-blue-500 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                  onClick={() => window.open('#', '_blank')}
                  aria-label="Watch demo video (opens in new tab)"
                >
                  <span className="flex items-center space-x-2">
                    <span>Watch Demo</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <p id="cta-description" className="sr-only">
                Schedule a free consultation to learn how AI automation can transform your business
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 px-6 py-20" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="stats-heading" className="sr-only">Our Impact Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
                  role="group"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 px-6 py-20" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 id="features-heading" className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Powerful AI Solutions
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our comprehensive suite of AI automation tools is designed to streamline your operations 
                and accelerate your growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 focus-within:ring-2 focus-within:ring-blue-500"
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`feature-${index}-title`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300" aria-hidden="true">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 id={`feature-${index}-title`} className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3" role="list">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 px-6 py-20" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20">
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already using TRW.AI to automate their operations 
                and drive unprecedented growth.
              </p>
              
              <button
                onClick={() => setIsFormOpen(true)}
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 flex items-center space-x-3 mx-auto focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-describedby="consultation-description"
              >
                <Calendar className="w-6 h-6" aria-hidden="true" />
                <span>Schedule Your Free Consultation</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </button>
              <p id="consultation-description" className="sr-only">
                Book a free consultation call to discuss your business automation needs
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-800" role="contentinfo">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center" aria-hidden="true">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TRW.AI
            </span>
          </div>
          
          <p className="text-slate-400 mb-4">
            Transforming businesses through intelligent AI automation solutions.
          </p>
          
          <div className="flex justify-center space-x-6 text-slate-400">
            <span>© 2025 TRW.AI. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-title"
          aria-describedby="form-description"
        >
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
            aria-label="Close dialog"
          ></div>
          
          <div className="relative bg-slate-900 rounded-3xl p-8 w-full max-w-2xl border border-slate-700 shadow-2xl shadow-blue-500/20">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-full transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
              aria-label="Close consultation form"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-8">
              <h3 id="form-title" className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Book Your Free Consultation
              </h3>
              <p id="form-description" className="text-slate-300">
                Let's discuss how AI automation can transform your business operations and drive growth.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your business needs and goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Schedule Consultation</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;