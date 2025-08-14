import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Award } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialCard from "@/components/TestimonialCard";
import { 
  Settings, 
  Edit, 
  Link as LinkIcon, 
  BarChart3, 
  MapPin, 
  Key,
  PenTool,
  TrendingUp as TrendingUpIcon
} from "lucide-react";

export default function Home() {
  const heroMetrics = [
    { value: "+247%", label: "Organic Traffic", color: "text-seo-secondary" },
    { value: "#1 Ranking", label: "Keywords", color: "text-seo-accent" }
  ];

  

  const services = [
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Site speed optimization, crawlability, mobile-first indexing, and technical foundation fixes.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: Edit,
      title: "On-Page SEO", 
      description: "Content optimization, keyword targeting, meta tags, and internal linking strategies.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: LinkIcon,
      title: "Off-Page SEO",
      description: "Link building campaigns, digital PR, and authority building strategies.",
      iconBgColor: "bg-seo-accent"
    },
    {
      icon: BarChart3,
      title: "SEO Audits",
      description: "Comprehensive site analysis with actionable recommendations and priority roadmaps.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Google My Business optimization, local citations, and geo-targeted ranking strategies.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: Key,
      title: "Keyword Research",
      description: "Strategic keyword analysis, search intent mapping, and competitor gap analysis.",
      iconBgColor: "bg-seo-accent"
    },
    {
      icon: PenTool,
      title: "Content SEO",
      description: "SEO-optimized content creation, content gap analysis, and editorial calendar planning.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: TrendingUpIcon,
      title: "Analytics & Reporting",
      description: "Performance tracking, ROI measurement, and detailed monthly progress reports.",
      iconBgColor: "bg-seo-secondary"
    }
  ];

  const caseStudies = [
    {
      icon: Users,
      title: "E-commerce Fashion Store",
      subtitle: "90-day SEO transformation",
      problem: "New e-commerce site with zero organic visibility, poor technical foundation, and no content strategy.",
      solution: "Comprehensive technical SEO overhaul, keyword-optimized product pages, and strategic content marketing.",
      metrics: [
        { value: "+340%", label: "Organic Traffic", color: "text-seo-secondary" },
        { value: "+180%", label: "Revenue", color: "text-seo-accent" },
        { value: "1,200+", label: "Keywords", color: "text-seo-primary" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Business growth analytics chart"
    },
    {
      icon: Award,
      title: "B2B SaaS Company",
      subtitle: "6-month growth strategy",
      problem: "Competitive market with established players, low domain authority, and limited organic leads.",
      solution: "Authority building campaign, technical SEO improvements, and targeted content hub development.",
      metrics: [
        { value: "+520%", label: "Organic Leads", color: "text-seo-secondary" },
        { value: "+280%", label: "Page 1 Rankings", color: "text-seo-accent" },
        { value: "85%", label: "Lead Quality", color: "text-seo-primary" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "SaaS analytics dashboard showing growth"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechStartup", 
      testimonial: "Our organic traffic increased by 300% in just 4 months. The detailed strategy and consistent execution made all the difference.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Mike Chen",
      title: "Founder",
      company: "GrowthCo",
      testimonial: "Finally found an SEO expert who delivers what they promise. Our lead quality improved dramatically with targeted organic traffic.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Lisa Rodriguez", 
      title: "CMO",
      company: "ScaleUp Inc",
      testimonial: "The technical SEO audit revealed issues we never knew existed. The improvements led to a 180% increase in organic conversions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b602?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <div className="bg-seo-background" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative gradient-primary text-white" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-poppins" data-testid="hero-headline">
                Boost Your Rankings in <span className="text-seo-accent">90 Days</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100" data-testid="hero-description">
                Professional SEO Expert delivering proven strategies that generate sustainable organic growth. 
                Specializing in Technical SEO, Content Optimization, and Local Search domination. Get data-driven results, not promises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="bg-seo-accent text-white hover:bg-yellow-500 transition-colors"
                    data-testid="hero-cta-primary"
                  >
                    <Search className="mr-2" size={20} />
                    Get Free SEO Audit
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button 
                    size="lg"
                    className="bg-white text-seo-primary hover:bg-gray-100 shadow-lg animate-pulse"
                    data-testid="hero-cta-secondary"
                  >
                    🎯 View Case Studies
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-blue-600">
                <p className="text-sm text-blue-200 mb-4" data-testid="trust-indicator-label">
                  Trusted by businesses worldwide:
                </p>
                <div className="flex flex-wrap gap-4 opacity-90">
                  <div className="text-white font-medium text-sm bg-blue-700/30 px-3 py-2 rounded-lg backdrop-blur-sm">
                    ✓ 50+ Successful Projects
                  </div>
                  <div className="text-white font-medium text-sm bg-blue-700/30 px-3 py-2 rounded-lg backdrop-blur-sm">
                    ✓ 95% Client Retention
                  </div>
                  <div className="text-white font-medium text-sm bg-blue-700/30 px-3 py-2 rounded-lg backdrop-blur-sm">
                    ✓ 280% Average Growth
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="SEO professional analyzing growth data" 
                className="rounded-xl shadow-2xl"
                data-testid="hero-image"
              />
              
              {/* Floating metrics cards */}
              {heroMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`absolute ${index === 0 ? '-top-4 -left-4' : '-bottom-4 -right-4'} bg-white rounded-lg p-4 shadow-xl`}
                  data-testid={`hero-metric-${index}`}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${metric.color.replace('text-', 'bg-')} rounded-full mr-2`}></div>
                    <div>
                      <div className="text-seo-text-dark font-semibold">{metric.value}</div>
                      <div className="text-xs text-seo-text-medium">{metric.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="services-title">
              Complete SEO Services
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="services-description">
              From technical audits to content optimization, I provide comprehensive SEO solutions that drive measurable results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional SEO Certifications & Expertise Section */}
      <section className="py-20 bg-seo-background" data-testid="professional-certifications-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="professional-certifications-title">
              Professional SEO Certifications & Expertise
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="professional-certifications-description">
              Certified by leading SEO platforms and continuously updated with the latest search engine algorithms and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="professional-certifications-grid">
            <div className="bg-gradient-to-br from-seo-primary to-blue-700 p-8 rounded-xl shadow-lg text-center text-white transform hover:scale-105 transition-transform" data-testid="cert-google-analytics">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-seo-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Analytics Certified</h3>
              <p className="text-blue-100 text-sm">Advanced web analytics and performance measurement expertise</p>
            </div>

            <div className="bg-gradient-to-br from-seo-secondary to-green-700 p-8 rounded-xl shadow-lg text-center text-white transform hover:scale-105 transition-transform" data-testid="cert-semrush-partner">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-seo-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">SEMrush Partner</h3>
              <p className="text-green-100 text-sm">Certified SEMrush expert and official partner specialist</p>
            </div>

            <div className="bg-gradient-to-br from-seo-accent to-orange-600 p-8 rounded-xl shadow-lg text-center text-white transform hover:scale-105 transition-transform" data-testid="cert-ahrefs-expert">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-seo-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ahrefs Expert</h3>
              <p className="text-orange-100 text-sm">Advanced backlink analysis and keyword research specialist</p>
            </div>

            <div className="bg-gradient-to-br from-seo-primary to-blue-700 p-8 rounded-xl shadow-lg text-center text-white transform hover:scale-105 transition-transform" data-testid="cert-search-console">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-seo-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Search Console Specialist</h3>
              <p className="text-blue-100 text-sm">Google Search Console optimization and performance monitoring</p>
            </div>

            <div className="bg-gradient-to-br from-seo-secondary to-green-700 p-8 rounded-xl shadow-lg text-center text-white transform hover:scale-105 transition-transform" data-testid="cert-core-web-vitals">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-seo-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Core Web Vitals Expert</h3>
              <p className="text-green-100 text-sm">Page speed optimization and user experience metrics specialist</p>
            </div>

            <div className="bg-gradient-to-br from-seo-accent to-orange-600 p-8 rounded-xl shadow-lg text-center text-white transform hover:scale-105 transition-transform" data-testid="cert-technical-seo">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-seo-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical SEO Certified</h3>
              <p className="text-orange-100 text-sm">Advanced technical optimization and website architecture expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white" data-testid="why-choose-me-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="why-choose-me-title">
              Why Choose Me?
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="why-choose-me-description">
              When you work with me, you're not just hiring an SEO consultant - you're partnering with a dedicated expert who is committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="why-choose-me-grid">
            <div className="bg-gradient-to-br from-seo-primary/10 to-seo-primary/5 p-8 rounded-xl border border-seo-primary/20 text-center hover:shadow-lg transition-shadow" data-testid="reason-1">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-seo-text-dark">3+ Years of Proven Results</h3>
              <p className="text-seo-text-medium">Consistently delivered 200-500% organic traffic growth across 50+ successful projects with measurable ROI.</p>
            </div>

            <div className="bg-gradient-to-br from-seo-secondary/10 to-seo-secondary/5 p-8 rounded-xl border border-seo-secondary/20 text-center hover:shadow-lg transition-shadow" data-testid="reason-2">
              <div className="w-16 h-16 bg-seo-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-seo-text-dark">Personalized Attention</h3>
              <p className="text-seo-text-medium">As your dedicated SEO expert, you get direct access to me - no middlemen, no junior staff, just focused expertise.</p>
            </div>

            <div className="bg-gradient-to-br from-seo-accent/10 to-seo-accent/5 p-8 rounded-xl border border-seo-accent/20 text-center hover:shadow-lg transition-shadow" data-testid="reason-3">
              <div className="w-16 h-16 bg-seo-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-seo-text-dark">Data-Driven Strategies</h3>
              <p className="text-seo-text-medium">Every decision is backed by thorough research, competitive analysis, and proven methodologies that deliver results.</p>
            </div>

            <div className="bg-gradient-to-br from-seo-primary/10 to-seo-primary/5 p-8 rounded-xl border border-seo-primary/20 text-center hover:shadow-lg transition-shadow" data-testid="reason-4">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-seo-text-dark">Transparent Reporting</h3>
              <p className="text-seo-text-medium">Monthly detailed reports showing exactly what's working, what's improving, and your ROI from SEO investments.</p>
            </div>

            <div className="bg-gradient-to-br from-seo-secondary/10 to-seo-secondary/5 p-8 rounded-xl border border-seo-secondary/20 text-center hover:shadow-lg transition-shadow" data-testid="reason-5">
              <div className="w-16 h-16 bg-seo-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-seo-text-dark">Latest SEO Techniques</h3>
              <p className="text-seo-text-medium">Stay ahead with cutting-edge strategies, algorithm updates, and industry best practices that keep you competitive.</p>
            </div>

            <div className="bg-gradient-to-br from-seo-accent/10 to-seo-accent/5 p-8 rounded-xl border border-seo-accent/20 text-center hover:shadow-lg transition-shadow" data-testid="reason-6">
              <div className="w-16 h-16 bg-seo-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-seo-text-dark">95% Client Retention</h3>
              <p className="text-seo-text-medium">Long-term partnerships built on trust, results, and exceptional service that keeps clients coming back.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-seo-primary to-seo-secondary p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join successful businesses who chose quality over quantity. Get a free SEO audit and see how I can transform your online presence.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-seo-accent text-white hover:bg-yellow-500 transition-colors"
                  data-testid="why-choose-me-cta"
                >
                  <Search className="mr-2" size={20} />
                  Get Your Free SEO Audit Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section className="py-20 bg-seo-background" data-testid="portfolio-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="portfolio-title">
              Proven Results
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="portfolio-description">
              Real case studies with measurable outcomes. See how I've helped businesses achieve significant organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-testid="case-studies-grid">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button 
                size="lg"
                className="bg-seo-primary text-white hover:bg-blue-700 transition-colors"
                data-testid="view-all-case-studies-button"
              >
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-seo-background" data-testid="key-features-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="key-features-title">
              Why Choose Professional SEO Services?
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="key-features-description">
              Strategic SEO implementation that delivers measurable business growth and sustainable organic visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="key-features-grid">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm" data-testid="feature-1">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">Guaranteed Rankings</h3>
              <p className="text-seo-text-medium text-sm">Top 3 Google rankings for target keywords within 90 days</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm" data-testid="feature-2">
              <div className="w-16 h-16 bg-seo-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">Traffic Growth</h3>
              <p className="text-seo-text-medium text-sm">200-500% organic traffic increase with quality visitors</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm" data-testid="feature-3">
              <div className="w-16 h-16 bg-seo-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">Lead Generation</h3>
              <p className="text-seo-text-medium text-sm">High-converting organic leads that boost your sales</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm" data-testid="feature-4">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">Expert Support</h3>
              <p className="text-seo-text-medium text-sm">Dedicated SEO expert with proven track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="testimonials-title">
              Client Success Stories
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="testimonials-description">
              See what business owners say about working with me and the results they've achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
