import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Settings, Clock, CheckCircle, TrendingUp } from "lucide-react";

export default function TechnicalSEO() {
  const benefits = [
    "Improved site speed and Core Web Vitals",
    "Enhanced crawlability and indexation",
    "Mobile-first optimization",
    "Better user experience and rankings",
    "Reduced bounce rate and increased engagement"
  ];

  const services = [
    "Site Speed Optimization",
    "Core Web Vitals Improvement",
    "Mobile Responsiveness",
    "XML Sitemap Optimization",
    "Robot.txt Configuration",
    "Schema Markup Implementation",
    "URL Structure Optimization",
    "Internal Linking Strategy"
  ];

  return (
    <div className="bg-seo-background min-h-screen" data-testid="technical-seo-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="technical-seo-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="page-title">
                Technical SEO Services
              </h1>
              <p className="text-xl text-seo-text-medium mb-8" data-testid="page-description">
                Optimize your website's technical foundation for better search engine crawling, 
                indexing, and ranking. Professional technical SEO that delivers measurable performance improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-seo-primary text-white hover:bg-blue-700" data-testid="get-started-button">
                    Get Technical Audit
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-seo-primary text-seo-primary hover:bg-seo-primary hover:text-white" data-testid="view-results-button">
                    View Results
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Technical SEO optimization dashboard" 
                className="rounded-xl shadow-2xl"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20" data-testid="services-list-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="services-title">
              What's Included in Technical SEO
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="services-description">
              Comprehensive technical optimization that addresses all critical factors affecting your search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="services-grid">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow" data-testid={`service-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-seo-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-seo-text-dark">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" data-testid="benefits-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="benefits-title">
              Technical SEO Benefits
            </h2>
            <p className="text-xl text-seo-text-medium" data-testid="benefits-description">
              Why technical SEO is crucial for your website's search performance
            </p>
          </div>

          <div className="space-y-6" data-testid="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-seo-background p-6 rounded-lg" data-testid={`benefit-${index}`}>
                <CheckCircle className="text-seo-secondary mr-4 flex-shrink-0" size={24} />
                <span className="text-lg text-seo-text-dark">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins" data-testid="cta-title">
            Ready to Fix Your Technical SEO?
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="cta-description">
            Get a comprehensive technical SEO audit and start improving your search rankings today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-seo-accent text-white hover:bg-yellow-500" data-testid="cta-button">
              Get Free Technical Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}