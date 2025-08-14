import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react";

export default function About() {
  const completeServices = [
    "Technical SEO Optimization",
    "On-Page SEO & Content Strategy", 
    "Off-Page SEO & Link Building",
    "Local SEO & Google My Business",
    "Keyword Research & Competitive Analysis",
    "SEO Audits & Performance Reports",
    "eCommerce SEO Solutions",
    "International SEO & Multi-language",
    "Voice Search Optimization",
    "Core Web Vitals & Site Speed",
    "Schema Markup Implementation",
    "SEO Consulting & Strategy Planning"
  ];

  const certifications = [
    { name: "Google Analytics", icon: "fab fa-google", color: "text-seo-primary" },
    { name: "SEMrush", icon: "fas fa-chart-bar", color: "text-seo-accent" },
    { name: "Ahrefs", icon: "fas fa-search", color: "text-seo-secondary" },
    { name: "Screaming Frog", icon: "fas fa-tools", color: "text-seo-primary" }
  ];

  const achievements = [
    { 
      icon: Users,
      title: "50+ Successful Projects",
      description: "Delivered measurable SEO results across diverse industries and business models."
    },
    {
      icon: TrendingUp, 
      title: "$2.5M+ Traffic Value",
      description: "Generated substantial organic traffic value through strategic optimization efforts."
    },
    {
      icon: Award,
      title: "95% Client Retention",
      description: "Maintained long-term partnerships through consistent results and transparent communication."
    },
    {
      icon: CheckCircle,
      title: "280% Average Growth",
      description: "Achieved significant organic traffic increases with proven, data-driven strategies."
    }
  ];

  const expertise = [
    "Google Analytics Certified Professional",
    "SEMrush SEO Toolkit Certified",
    "Google Search Console Expert", 
    "Technical SEO Specialist",
    "Content Strategy & Optimization",
    "Link Building & Digital PR",
    "Local SEO & Google My Business",
    "International SEO & Multi-language Optimization"
  ];

  return (
    <div className="bg-seo-background min-h-screen" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
                alt="Fatema Akter - SEO Expert Professional Photo" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                data-testid="about-professional-photo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/500x600/6366f1/ffffff?text=Fatema+Akter+SEO+Expert';
                }}
              />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="about-page-title">
                Meet Fatema Akter
              </h1>
              <p className="text-lg text-seo-text-medium mb-6" data-testid="about-intro">
                Professional SEO Expert with 3+ years of specialized experience helping businesses achieve 
                sustainable organic growth. My data-driven approach combines technical expertise with strategic 
                thinking to deliver measurable results that transform businesses.
              </p>
              <p className="text-lg text-seo-text-medium mb-8" data-testid="about-philosophy">
                I believe in transparency, education, and building long-term partnerships. Every strategy is 
                tailored to your unique business goals, backed by thorough research, and executed with 
                meticulous attention to detail. I'm passionate about helping businesses dominate search rankings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-seo-primary text-white hover:bg-blue-700" data-testid="about-cta-button">
                    Let's Work Together
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" className="bg-seo-accent text-white hover:bg-yellow-500 shadow-lg animate-pulse" data-testid="about-portfolio-button">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete SEO Services Section */}
      <section className="py-20" data-testid="complete-services-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="complete-services-title">
              Complete SEO Services
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="complete-services-description">
              I offer comprehensive SEO solutions designed to boost your organic visibility, drive qualified traffic, and deliver measurable business growth across all aspects of search optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="complete-services-grid">
            {completeServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                data-testid={`complete-service-item-${index}`}
              >
                <CheckCircle className="text-seo-primary mr-4 flex-shrink-0" size={20} />
                <span className="text-seo-text-dark font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-seo-primary text-white hover:bg-blue-700" data-testid="complete-services-cta">
                View All Services in Detail
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20" data-testid="expertise-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="expertise-title">
              Areas of Expertise
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="expertise-description">
              Deep specialization across all aspects of modern SEO, from technical foundations 
              to strategic content marketing and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="expertise-list">
            {expertise.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                data-testid={`expertise-item-${index}`}
              >
                <CheckCircle className="text-seo-secondary mr-4 flex-shrink-0" size={20} />
                <span className="text-seo-text-dark font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional SEO Certifications & Expertise Section */}
      <section className="py-20 bg-white" data-testid="professional-certifications-section">
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

      {/* Achievements Section */}
      <section className="py-20 bg-white" data-testid="achievements-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="achievements-title">
              Proven Track Record
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="achievements-description">
              Numbers don't lie. Here's what 3+ years of focused SEO expertise has delivered 
              for businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center"
                data-testid={`achievement-${index}`}
              >
                <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-poppins text-seo-text-dark">
                  {achievement.title}
                </h3>
                <p className="text-seo-text-medium">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Personal Approach Section */}
      <section className="py-20 bg-white" data-testid="approach-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins text-seo-text-dark" data-testid="approach-title">
            My Approach to SEO
          </h2>
          <p className="text-xl text-seo-text-medium mb-8" data-testid="approach-description">
            I don't believe in one-size-fits-all solutions. Every business is unique, which is why 
            I start with understanding your specific goals, challenges, and market dynamics before 
            crafting a custom strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" data-testid="approach-principles">
            <div className="text-center" data-testid="principle-1">
              <div className="w-12 h-12 bg-seo-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-seo-text-dark">Data-Driven Decisions</h3>
              <p className="text-seo-text-medium">Every recommendation is backed by thorough research and analysis.</p>
            </div>
            
            <div className="text-center" data-testid="principle-2">
              <div className="w-12 h-12 bg-seo-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-seo-text-dark">Transparent Communication</h3>
              <p className="text-seo-text-medium">Regular updates, detailed reporting, and clear explanations.</p>
            </div>
            
            <div className="text-center" data-testid="principle-3">
              <div className="w-12 h-12 bg-seo-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-seo-text-dark">Long-term Focus</h3>
              <p className="text-seo-text-medium">Building sustainable growth, not quick fixes that fade away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white" data-testid="about-cta-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins" data-testid="cta-title">
            Let's Grow Your Business Together
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="cta-description">
            Ready to work with an SEO expert who treats your success as their own? 
            Let's discuss your goals and create a custom strategy for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-seo-accent text-white hover:bg-yellow-500" data-testid="cta-primary">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-seo-primary" data-testid="cta-secondary">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
