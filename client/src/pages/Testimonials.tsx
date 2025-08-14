import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Award, TrendingUp, Users } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechStartup", 
      testimonial: "Our organic traffic increased by 300% in just 4 months. The detailed strategy and consistent execution made all the difference. I finally found an SEO expert who delivers what they promise.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Mike Chen",
      title: "Founder",
      company: "GrowthCo",
      testimonial: "Finally found an SEO expert who delivers what they promise. Our lead quality improved dramatically with targeted organic traffic. The ROI has been incredible from day one.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Lisa Rodriguez", 
      title: "CMO",
      company: "ScaleUp Inc",
      testimonial: "The technical SEO audit revealed issues we never knew existed. The improvements led to a 180% increase in organic conversions. Worth every penny and more.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b602?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "David Thompson",
      title: "Marketing Director", 
      company: "EcomPro",
      testimonial: "Our e-commerce site went from page 3 to dominating page 1 for our main keywords. Revenue from organic traffic has tripled. Best investment we've made in years.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      title: "VP Marketing",
      company: "HealthTech Solutions",
      testimonial: "The local SEO strategy completely transformed our patient acquisition. We're now the #1 result for healthcare searches in our area. Outstanding results and communication.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Robert Kim",
      title: "Business Owner",
      company: "Local Services Pro",
      testimonial: "From zero online presence to ranking #1 for our target keywords. The detailed monthly reports and transparent approach made this partnership exceptional.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Amanda Foster",
      title: "Marketing Manager",
      company: "B2B Software",
      testimonial: "The content SEO strategy completely changed our lead generation. We're getting 5x more qualified leads from organic search. The expertise is unmatched.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "James Mitchell",
      title: "Owner",
      company: "Real Estate Group",
      testimonial: "Our Google My Business optimization and local SEO work has brought us consistent high-quality leads. We've become the go-to real estate company in our market.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Maria Santos",
      title: "Digital Marketing Lead",
      company: "Fashion Boutique",
      testimonial: "The e-commerce SEO strategy doubled our online revenue in 6 months. The technical optimizations and content strategy were perfectly executed.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    }
  ];

  const stats = [
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Client Retention" },
    { icon: Award, value: "100%", label: "Success Rate" }
  ];

  return (
    <div className="bg-seo-background min-h-screen" data-testid="testimonials-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="testimonials-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="testimonials-page-title">
            Client Success Stories
          </h1>
          <p className="text-xl text-seo-text-medium max-w-4xl mx-auto mb-8" data-testid="testimonials-page-description">
            Don't just take my word for it. See what business owners across different industries say 
            about working with me and the measurable results they've achieved.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" data-testid="testimonials-stats">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-seo-primary mb-2">{stat.value}</div>
                <div className="text-seo-text-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="testimonials-grid-title">
              What Clients Say
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="testimonials-grid-description">
              Real feedback from real businesses that have experienced transformative SEO results. 
              Every testimonial represents a partnership built on trust and measurable success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                testId={`testimonial-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white" data-testid="trust-indicators-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="trust-title">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="trust-description">
              From startups to established enterprises, businesses across various industries 
              trust me to deliver exceptional SEO results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70" data-testid="company-logos">
            {[
              "TechCorp", "GrowthCo", "ScaleUp Inc", "MarketPro", "HealthTech", "EcomPro"
            ].map((company, index) => (
              <div 
                key={index} 
                className="text-center text-seo-text-medium font-semibold text-lg"
                data-testid={`company-logo-${index}`}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-20" data-testid="review-highlights-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 font-poppins text-seo-text-dark" data-testid="highlights-title">
            Common Success Themes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="success-themes">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-testid="theme-1">
              <div className="w-12 h-12 bg-seo-secondary rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins text-seo-text-dark">Dramatic Growth</h3>
              <p className="text-seo-text-medium">Clients consistently see 200-500% increases in organic traffic and leads</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg" data-testid="theme-2">
              <div className="w-12 h-12 bg-seo-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins text-seo-text-dark">Quality Results</h3>
              <p className="text-seo-text-medium">High-converting organic traffic that directly impacts business revenue</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg" data-testid="theme-3">
              <div className="w-12 h-12 bg-seo-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins text-seo-text-dark">Partnership Approach</h3>
              <p className="text-seo-text-medium">Transparent communication and education throughout the entire process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white" data-testid="testimonials-cta-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins" data-testid="cta-title">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="cta-description">
            Join 50+ businesses that have transformed their organic growth with proven SEO strategies. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-seo-accent text-white hover:bg-yellow-500" data-testid="cta-primary">
                Get Your Free Audit
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-seo-primary" data-testid="cta-secondary">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
