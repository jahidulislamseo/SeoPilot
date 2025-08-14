import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Store, 
  Briefcase, 
  Users, 
  Award, 
  Building, 
  Zap,
  Heart,
  Globe
} from "lucide-react";

export default function Portfolio() {
  const caseStudies = [
    {
      icon: Store,
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
      imageAlt: "E-commerce growth analytics chart"
    },
    {
      icon: Briefcase,
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
    },
    {
      icon: Building,
      title: "Real Estate Agency",
      subtitle: "Local SEO domination",
      problem: "Multiple competitors ranking higher for local searches, poor Google My Business presence, and low local visibility.",
      solution: "Local SEO optimization, citation building, review management, and location-specific content creation.",
      metrics: [
        { value: "+450%", label: "Local Visibility", color: "text-seo-secondary" },
        { value: "+200%", label: "Qualified Leads", color: "text-seo-accent" },
        { value: "95%", label: "Map Pack Rankings", color: "text-seo-primary" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Real estate market analytics"
    },
    {
      icon: Heart,
      title: "Healthcare Practice",
      subtitle: "Medical SEO optimization",
      problem: "Limited online visibility for medical services, competitors dominating healthcare searches, and low patient acquisition.",
      solution: "Medical SEO strategy, HIPAA-compliant content creation, local optimization, and reputation management.",
      metrics: [
        { value: "+380%", label: "Patient Inquiries", color: "text-seo-secondary" },
        { value: "+250%", label: "Appointment Bookings", color: "text-seo-accent" },
        { value: "20+", label: "Top 3 Rankings", color: "text-seo-primary" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Healthcare analytics dashboard"
    },
    {
      icon: Zap,
      title: "Tech Startup",
      subtitle: "Rapid growth SEO",
      problem: "Brand new company with no online presence, competing against established tech giants, and tight marketing budget.",
      solution: "Content-first SEO approach, thought leadership content, technical optimization, and strategic link building.",
      metrics: [
        { value: "+680%", label: "Organic Sessions", color: "text-seo-secondary" },
        { value: "+320%", label: "Demo Requests", color: "text-seo-accent" },
        { value: "500+", label: "Ranking Keywords", color: "text-seo-primary" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Tech startup growth metrics"
    },
    {
      icon: Globe,
      title: "International E-learning",
      subtitle: "Global SEO expansion",
      problem: "Limited to English markets, missing opportunities in international markets, and complex multi-language requirements.",
      solution: "International SEO strategy, hreflang implementation, localized content creation, and market-specific optimization.",
      metrics: [
        { value: "+550%", label: "International Traffic", color: "text-seo-secondary" },
        { value: "12", label: "New Markets", color: "text-seo-accent" },
        { value: "+400%", label: "Global Revenue", color: "text-seo-primary" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "International growth analytics"
    }
  ];

  return (
    <div className="bg-seo-background min-h-screen" data-testid="portfolio-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="portfolio-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="portfolio-page-title">
            Proven SEO Results
          </h1>
          <p className="text-xl text-seo-text-medium max-w-4xl mx-auto mb-8" data-testid="portfolio-page-description">
            Real case studies from diverse industries showing how strategic SEO drives measurable business growth. 
            Each project follows our proven Problem → Solution → Results methodology.
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-seo-primary">50+</div>
              <div className="text-seo-text-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-seo-secondary">$2.5M+</div>
              <div className="text-seo-text-medium">Traffic Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-seo-accent">280%</div>
              <div className="text-seo-text-medium">Average Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20" data-testid="case-studies-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="case-studies-title">
              Success Stories Across Industries
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="case-studies-description">
              From e-commerce to B2B SaaS, healthcare to real estate - see how tailored SEO strategies 
              deliver exceptional results across different business models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-testid="case-studies-grid">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index} 
                {...study} 
                testId={`portfolio-case-study-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-white" data-testid="results-overview-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="results-title">
              Cumulative Results
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="results-description">
              The combined impact of strategic SEO across all client projects demonstrates 
              consistent and scalable growth patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-testid="results-metrics">
            <div className="text-center" data-testid="metric-organic-traffic">
              <div className="text-4xl font-bold text-seo-secondary mb-2">+425%</div>
              <div className="text-seo-text-medium">Average Traffic Increase</div>
            </div>
            <div className="text-center" data-testid="metric-keyword-rankings">
              <div className="text-4xl font-bold text-seo-primary mb-2">12,000+</div>
              <div className="text-seo-text-medium">Keywords Ranking</div>
            </div>
            <div className="text-center" data-testid="metric-revenue-impact">
              <div className="text-4xl font-bold text-seo-accent mb-2">+280%</div>
              <div className="text-seo-text-medium">Revenue Growth</div>
            </div>
            <div className="text-center" data-testid="metric-client-retention">
              <div className="text-4xl font-bold text-seo-secondary mb-2">95%</div>
              <div className="text-seo-text-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white" data-testid="portfolio-cta-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins" data-testid="cta-title">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="cta-description">
            Join 50+ businesses that have transformed their organic growth with proven SEO strategies. 
            Get your free audit and custom roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-seo-accent text-white hover:bg-yellow-500" data-testid="cta-primary">
                Start Your Success Story
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-seo-primary" data-testid="cta-secondary">
                Read Client Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
