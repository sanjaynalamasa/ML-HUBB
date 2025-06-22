import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Image, FileText, Search, Shield, ExternalLink, Star, Users, ChevronDown, ChevronUp, Brain, Zap, Globe, Award } from 'lucide-react';

export function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Chat",
      description: "Engage in natural conversations with our advanced AI chatbot",
      link: "/chat",
      color: "bg-blue-500"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Image Understanding",
      description: "Analyze images with computer vision capabilities",
      link: "/vision",
      color: "bg-purple-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Log Analysis",
      description: "Transform complex log data into actionable insights",
      link: "/logs",
      color: "bg-green-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Text Analysis",
      description: "Extract valuable insights from text content",
      link: "/analysis",
      color: "bg-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Content Moderation",
      description: "Keep your platform safe with AI-powered moderation",
      link: "/moderation",
      color: "bg-red-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Satisfied Users", icon: <Users className="w-6 h-6" /> },
    { number: "4.8/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "10K+", label: "Daily API Calls", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Globe className="w-6 h-6" /> }
  ];

  const partners = [
    { name: "OpenAI", logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=100&h=50" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=100&h=50" },
    { name: "NVIDIA", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=100&h=50" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&q=80&w=100&h=50" }
  ];

  const faqs = [
    {
      question: "What is ML Hub?",
      answer: "ML Hub is a comprehensive platform for AI and machine learning development, offering tools for chat, image analysis, text processing, and more."
    },
    {
      question: "How can I get started?",
      answer: "Simply explore our various AI tools. You can start with our AI Chat feature or try out our Image Understanding capabilities."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we offer 24/7 support through WhatsApp and our dedicated support team."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge AI and ML technologies including natural language processing, computer vision, and deep learning models."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a free trial period to test our services and see how they can benefit your projects."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ML Hub</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300">
                  Your comprehensive AI development platform
                </p>
                <p className="text-lg text-gray-400 max-w-2xl">
                  Harness the power of artificial intelligence with our suite of advanced tools. 
                  From natural language processing to computer vision, we've got you covered.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/chat"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Get Started
                </Link>
                <a 
                  href="#features"
                  className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/10 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=400"
                alt="AI Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Powerful AI Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered tools designed to enhance your applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                className="group bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Try it now <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl opacity-90">
              Join our growing community of developers and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We work with industry leaders to bring you the best AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about ML Hub
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index 
                      ? 'max-h-96 opacity-100 pb-6' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Brain className="w-16 h-16 mx-auto mb-8 text-blue-400" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Applications?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already using ML Hub to build amazing AI-powered applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/chat"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Start Building Now
              </Link>
              <a
                href="https://wa.me/918919753387"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/10"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}