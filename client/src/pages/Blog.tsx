import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, TrendingUp, Search, FileText, BarChart3 } from "lucide-react";

export default function Blog() {
  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Technical SEO", count: 8 },
    { name: "Content Marketing", count: 6 },
    { name: "Local SEO", count: 4 },
    { name: "SEO Tools", count: 3 },
    { name: "Case Studies", count: 3 }
  ];

  const featuredPost = {
    title: "Complete Technical SEO Guide for 2024: 15 Critical Factors",
    excerpt: "Master technical SEO with this comprehensive guide covering Core Web Vitals, mobile-first indexing, site architecture, and advanced optimization techniques that drive rankings.",
    author: "SEO Expert",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    featured: true
  };

  const blogPosts = [
    {
      title: "How to Optimize for Google's Core Web Vitals in 2024",
      excerpt: "Learn the latest strategies to improve your Core Web Vitals scores and boost your search rankings with practical optimization techniques.",
      author: "SEO Expert",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Technical SEO",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "Local SEO Checklist: 25 Steps to Dominate Local Search",
      excerpt: "A comprehensive local SEO checklist that covers Google My Business optimization, local citations, and geo-targeted content strategies.",
      author: "SEO Expert", 
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Local SEO",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "Content SEO Strategy: Creating Pages That Rank and Convert",
      excerpt: "Discover how to create SEO-optimized content that not only ranks on Google but also converts visitors into customers.",
      author: "SEO Expert",
      date: "December 8, 2024", 
      readTime: "15 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "E-commerce SEO: Product Page Optimization That Drives Sales",
      excerpt: "Learn how to optimize e-commerce product pages for search engines while maximizing conversion rates and user experience.",
      author: "SEO Expert",
      date: "December 5, 2024",
      readTime: "11 min read", 
      category: "SEO Tools",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "Link Building in 2024: Strategies That Actually Work",
      excerpt: "Effective link building strategies that comply with Google's guidelines and deliver sustainable organic growth results.",
      author: "SEO Expert",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "SEO Tools", 
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "SEO Analytics: KPIs Every Business Should Track",
      excerpt: "Essential SEO metrics and KPIs that matter for business growth, plus how to set up proper tracking and reporting.",
      author: "SEO Expert",
      date: "December 1, 2024", 
      readTime: "7 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    }
  ];

  return (
    <div className="bg-seo-background min-h-screen" data-testid="blog-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="blog-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="blog-page-title">
            SEO Insights & Strategies
          </h1>
          <p className="text-xl text-seo-text-medium max-w-4xl mx-auto mb-8" data-testid="blog-page-description">
            Stay ahead of the curve with actionable SEO strategies, industry insights, and proven techniques 
            that drive organic growth. Learn from real case studies and expert analysis.
          </p>
          
          {/* Blog Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto" data-testid="blog-stats">
            <div className="text-center" data-testid="blog-stat-posts">
              <div className="text-3xl font-bold text-seo-primary mb-2">24+</div>
              <div className="text-seo-text-medium">Expert Articles</div>
            </div>
            <div className="text-center" data-testid="blog-stat-readers">
              <div className="text-3xl font-bold text-seo-secondary mb-2">10K+</div>
              <div className="text-seo-text-medium">Monthly Readers</div>
            </div>
            <div className="text-center" data-testid="blog-stat-topics">
              <div className="text-3xl font-bold text-seo-accent mb-2">6</div>
              <div className="text-seo-text-medium">Core Topics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-seo-background" data-testid="blog-categories-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4" data-testid="blog-categories">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${category.active 
                  ? "bg-seo-primary text-white hover:bg-blue-700" 
                  : "border-seo-primary text-seo-primary hover:bg-seo-primary hover:text-white"
                } transition-colors`}
                data-testid={`blog-category-${index}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20" data-testid="featured-post-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="featured-post-title">
              Featured Article
            </h2>
            <p className="text-xl text-seo-text-medium" data-testid="featured-post-subtitle">
              Our most comprehensive guide to mastering SEO in 2024
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow" data-testid="featured-post-card">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  data-testid="featured-post-image"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-seo-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span 
                    className="text-seo-primary font-medium text-sm"
                    data-testid="featured-post-category"
                  >
                    {featuredPost.category}
                  </span>
                </div>
                <h3 
                  className="text-3xl font-bold mb-6 text-seo-text-dark font-poppins"
                  data-testid="featured-post-heading"
                >
                  {featuredPost.title}
                </h3>
                <p 
                  className="text-lg text-seo-text-medium mb-6"
                  data-testid="featured-post-excerpt"
                >
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-seo-text-medium mb-6">
                  <div className="flex items-center" data-testid="featured-post-meta">
                    <User size={16} className="mr-2" />
                    <span>{featuredPost.author}</span>
                    <Calendar size={16} className="ml-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span data-testid="featured-post-read-time">{featuredPost.readTime}</span>
                </div>

                <Button 
                  size="lg" 
                  className="bg-seo-primary text-white hover:bg-blue-700 w-fit"
                  data-testid="featured-post-cta"
                >
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white" data-testid="recent-posts-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="recent-posts-title">
              Latest SEO Insights
            </h2>
            <p className="text-xl text-seo-text-medium max-w-3xl mx-auto" data-testid="recent-posts-description">
              Stay updated with the latest SEO trends, algorithm changes, and optimization strategies 
              that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-posts-grid">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                data-testid={`blog-post-${index + 1}`}
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`blog-post-image-${index + 1}`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-seo-secondary text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 
                    className="text-xl font-semibold mb-3 text-seo-text-dark font-poppins line-clamp-2"
                    data-testid={`blog-post-title-${index + 1}`}
                  >
                    {post.title}
                  </h3>
                  <p 
                    className="text-seo-text-medium mb-4 line-clamp-3"
                    data-testid={`blog-post-excerpt-${index + 1}`}
                  >
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-seo-text-medium">
                    <div className="flex items-center" data-testid={`blog-post-meta-${index + 1}`}>
                      <Calendar size={14} className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <span data-testid={`blog-post-read-time-${index + 1}`}>{post.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-seo-primary hover:bg-seo-background"
                    data-testid={`blog-post-cta-${index + 1}`}
                  >
                    Read More
                    <ArrowRight className="ml-2" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-seo-primary text-seo-primary hover:bg-seo-primary hover:text-white"
              data-testid="load-more-posts-button"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-primary text-white" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins" data-testid="newsletter-title">
            Never Miss an SEO Update
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="newsletter-description">
            Get weekly SEO insights, algorithm updates, and proven strategies delivered straight to your inbox. 
            Join 2,000+ SEO professionals who trust our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-seo-text-dark"
              data-testid="newsletter-email-input"
            />
            <Button 
              size="lg" 
              className="bg-seo-accent text-white hover:bg-yellow-500"
              data-testid="newsletter-subscribe-button"
            >
              Subscribe Free
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4" data-testid="newsletter-disclaimer">
            No spam. Unsubscribe anytime. Your email stays private.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-seo-background" data-testid="popular-topics-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="popular-topics-title">
              Popular SEO Topics
            </h2>
            <p className="text-xl text-seo-text-medium" data-testid="popular-topics-description">
              Explore our most-read articles across key SEO categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="popular-topics-grid">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow" data-testid="topic-technical-seo">
              <div className="w-16 h-16 bg-seo-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-seo-text-dark">Technical SEO</h3>
              <p className="text-seo-text-medium mb-6">Core Web Vitals, site speed, crawlability, and technical optimization guides.</p>
              <Button variant="outline" className="border-seo-primary text-seo-primary hover:bg-seo-primary hover:text-white">
                Explore Articles
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow" data-testid="topic-content-seo">
              <div className="w-16 h-16 bg-seo-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-seo-text-dark">Content SEO</h3>
              <p className="text-seo-text-medium mb-6">Content strategy, keyword targeting, and optimization techniques that convert.</p>
              <Button variant="outline" className="border-seo-secondary text-seo-secondary hover:bg-seo-secondary hover:text-white">
                View Content Guides
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow" data-testid="topic-local-seo">
              <div className="w-16 h-16 bg-seo-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-seo-text-dark">Local SEO</h3>
              <p className="text-seo-text-medium mb-6">Google My Business, local citations, and geo-targeted optimization strategies.</p>
              <Button variant="outline" className="border-seo-accent text-seo-accent hover:bg-seo-accent hover:text-white">
                Read Local SEO Tips
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" data-testid="blog-cta-section">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-poppins text-seo-text-dark" data-testid="blog-cta-title">
            Ready to Apply These SEO Strategies?
          </h2>
          <p className="text-xl text-seo-text-medium mb-8" data-testid="blog-cta-description">
            Transform your knowledge into results. Get a free SEO audit and custom strategy 
            based on the proven techniques you've learned here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-seo-primary text-white hover:bg-blue-700" data-testid="blog-cta-primary">
                Get Free SEO Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-seo-primary text-seo-primary hover:bg-seo-primary hover:text-white" data-testid="blog-cta-secondary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
