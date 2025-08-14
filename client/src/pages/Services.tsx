import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Settings, 
  Edit, 
  Link as LinkIcon, 
  BarChart3, 
  MapPin, 
  Key,
  PenTool,
  TrendingUp,
  Users,
  Shield,
  Globe,
  Mic,
  LineChart,
  RefreshCw,
  ShoppingCart
} from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Site speed optimization, crawlability, mobile-first indexing, XML sitemaps, and technical foundation fixes.",
      iconBgColor: "bg-seo-primary",
      link: "/services/technical-seo"
    },
    {
      icon: Edit,
      title: "On-Page SEO", 
      description: "Content optimization, keyword targeting, meta tags, internal linking strategies, and user experience improvements.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: LinkIcon,
      title: "Off-Page SEO",
      description: "Link building campaigns, digital PR, guest posting, and authority building strategies.",
      iconBgColor: "bg-seo-accent"
    },
    {
      icon: BarChart3,
      title: "SEO Audits",
      description: "Comprehensive site analysis with actionable recommendations, priority roadmaps, and competitive insights.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Google My Business optimization, local citations, review management, and geo-targeted ranking strategies.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: Key,
      title: "Keyword Research",
      description: "Strategic keyword analysis, search intent mapping, competitor gap analysis, and opportunity identification.",
      iconBgColor: "bg-seo-accent"
    },
    {
      icon: PenTool,
      title: "Content SEO",
      description: "SEO-optimized content creation, content gap analysis, editorial calendar planning, and topical authority building.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: Users,
      title: "Competitor Analysis",
      description: "In-depth competitor research, backlink analysis, content strategy insights, and market opportunity identification.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: ShoppingCart,
      title: "eCommerce SEO",
      description: "Product page optimization, category structure, schema markup, and conversion-focused SEO strategies.",
      iconBgColor: "bg-seo-accent"
    },
    {
      icon: Users,
      title: "SEO Consulting",
      description: "Strategic SEO guidance, team training, process optimization, and long-term growth planning.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: Shield,
      title: "Penalty Recovery",
      description: "Google penalty diagnosis, recovery strategies, disavow file creation, and algorithm update guidance.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: Globe,
      title: "International SEO",
      description: "Multi-language optimization, hreflang implementation, global keyword research, and market expansion strategies.",
      iconBgColor: "bg-seo-accent"
    },
    {
      icon: Mic,
      title: "Voice Search Optimization",
      description: "Featured snippet optimization, natural language targeting, FAQ schema, and conversational keyword strategies.",
      iconBgColor: "bg-seo-primary"
    },
    {
      icon: LineChart,
      title: "Analytics & Reporting",
      description: "Performance tracking, ROI measurement, detailed monthly reports, and data-driven optimization recommendations.",
      iconBgColor: "bg-seo-secondary"
    },
    {
      icon: RefreshCw,
      title: "Ongoing SEO Maintenance",
      description: "Continuous monitoring, regular optimizations, algorithm update responses, and sustained growth strategies.",
      iconBgColor: "bg-seo-accent"
    }
  ];

  return (
    <div className="bg-seo-background min-h-screen" data-testid="services-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="services-page-title">
            Complete SEO Services
          </h1>
          <p className="text-xl text-seo-text-medium max-w-4xl mx-auto mb-8" data-testid="services-page-description">
            I offer 15 specialized SEO services designed to boost your organic visibility, drive qualified traffic, 
            and deliver measurable business growth. Each service is backed by 3+ years of proven results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-seo-primary text-white hover:bg-blue-700" data-testid="services-cta-button">
              Get Custom SEO Strategy
            </Button>
          </Link>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20" data-testid="all-services-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="all-services-grid">
            {allServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                testId={`service-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white" data-testid="seo-process-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="process-title">
              My SEO Process
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="process-description">
              A proven methodology that delivers consistent results through strategic planning, 
              meticulous execution, and continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-testid="process-steps">
            <div className="text-center" data-testid="process-step-1">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-seo-text-dark">1. Audit & Analysis</h3>
              <p className="text-seo-text-medium">Comprehensive site audit and competitive analysis to identify opportunities.</p>
            </div>

            <div className="text-center" data-testid="process-step-2">
              <div className="w-16 h-16 bg-seo-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-seo-text-dark">2. Strategy Development</h3>
              <p className="text-seo-text-medium">Custom SEO strategy with prioritized roadmap and clear success metrics.</p>
            </div>

            <div className="text-center" data-testid="process-step-3">
              <div className="w-16 h-16 bg-seo-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-seo-text-dark">3. Implementation</h3>
              <p className="text-seo-text-medium">Systematic execution of technical, on-page, and off-page optimizations.</p>
            </div>

            <div className="text-center" data-testid="process-step-4">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-seo-text-dark">4. Monitor & Optimize</h3>
              <p className="text-seo-text-medium">Continuous monitoring, reporting, and optimization for sustained growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white" data-testid="services-cta-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins" data-testid="cta-title">
            Ready to Transform Your SEO?
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="cta-description">
            Get a free SEO audit and custom strategy proposal tailored to your business goals. 
            Let's discuss how these services can drive your organic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-seo-accent text-white hover:bg-yellow-500" data-testid="cta-primary">
                Get Free SEO Audit
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-seo-primary" data-testid="cta-secondary">
                See Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
