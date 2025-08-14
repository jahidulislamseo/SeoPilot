import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Mail, Phone, Calendar, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "Thank you for your interest! I will contact you within 24 hours.",
        variant: "default"
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later or contact me directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "fatemaakter39@gmail.com",
      color: "bg-seo-primary",
      link: "mailto:fatemaakter39@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+880 1516089599",
      color: "bg-seo-secondary",
      link: "tel:+8801516089599"
    },
    {
      icon: Calendar,
      title: "WhatsApp",
      value: "+880 15160*****",
      color: "bg-green-500",
      link: "https://wa.me/8801516089599?text=Hi! I'm interested in your SEO services. Can we discuss my project?"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      color: "bg-seo-accent"
    },
    {
      icon: MapPin,
      title: "Serving",
      value: "Global Clients",
      color: "bg-seo-primary"
    }
  ];

  const benefits = [
    "Free comprehensive SEO audit (worth $500)",
    "Custom strategy roadmap for your business",
    "Competitive analysis and opportunity identification",
    "No-obligation consultation and transparent pricing",
    "Detailed recommendations you can implement immediately"
  ];

  if (isSubmitted) {
    return (
      <div className="bg-seo-background min-h-screen flex items-center justify-center" data-testid="contact-success-page">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-seo-secondary rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="success-title">
            Thank You!
          </h1>
          <p className="text-xl text-seo-text-medium mb-8" data-testid="success-message">
            Your message has been received successfully. I'll review your information and get back to you 
            within 24 hours with a free SEO audit and custom strategy recommendations.
          </p>
          <p className="text-seo-text-medium mb-8">
            In the meantime, feel free to explore my case studies and learn more about my SEO approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)} className="bg-seo-primary text-white hover:bg-blue-700" data-testid="send-another-message">
              Send Another Message
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/portfolio'} data-testid="view-portfolio-from-success">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-seo-background min-h-screen" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="contact-page-title">
            Ready to Boost Your Rankings?
          </h1>
          <p className="text-xl text-seo-text-medium max-w-4xl mx-auto mb-8" data-testid="contact-page-description">
            Get a comprehensive SEO audit and strategic roadmap absolutely free. Let's discuss how I can help 
            your business achieve sustainable organic growth and dominate your competition.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-seo-text-dark font-poppins" data-testid="contact-info-title">
                Let's Start the Conversation
              </h2>
              <p className="text-xl text-seo-text-medium mb-8" data-testid="contact-info-description">
                Ready to transform your organic visibility? I'm here to answer your questions, 
                provide expert guidance, and create a custom SEO strategy that drives real results.
              </p>
              
              <div className="space-y-6 mb-8" data-testid="contact-methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center" data-testid={`contact-method-${index}`}>
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-seo-text-dark">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-seo-text-medium hover:text-seo-primary transition-colors cursor-pointer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-seo-text-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What You Get */}
              <div className="bg-white p-8 rounded-xl shadow-lg" data-testid="contact-benefits">
                <h3 className="text-2xl font-semibold mb-6 text-seo-text-dark font-poppins">
                  What You Get (FREE):
                </h3>
                <ul className="space-y-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start" data-testid={`benefit-${index}`}>
                      <CheckCircle className="text-seo-secondary mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-seo-text-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-gray-100">
                  <a
                    href="https://wa.me/8801516089599?text=Hi! I'm interested in your SEO services. Can we discuss my project?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                    data-testid="whatsapp-cta"
                  >
                    <Calendar className="mr-2" size={20} />
                    Chat on WhatsApp - Get Instant Response
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-seo-background" data-testid="contact-form-card">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-seo-text-dark">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        {...form.register("firstName")}
                        className="mt-2"
                        data-testid="input-first-name"
                        disabled={contactMutation.isPending}
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1" data-testid="error-first-name">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-seo-text-dark">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        {...form.register("lastName")}
                        className="mt-2"
                        data-testid="input-last-name"
                        disabled={contactMutation.isPending}
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1" data-testid="error-last-name">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-seo-text-dark">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="mt-2"
                      data-testid="input-email"
                      disabled={contactMutation.isPending}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="website" className="text-sm font-medium text-seo-text-dark">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      {...form.register("website")}
                      className="mt-2"
                      placeholder="https://www.example.com"
                      data-testid="input-website"
                      disabled={contactMutation.isPending}
                    />
                    {form.formState.errors.website && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-website">
                        {form.formState.errors.website.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-sm font-medium text-seo-text-dark">
                      Service Needed *
                    </Label>
                    <Select 
                      onValueChange={(value) => form.setValue("service", value)}
                      disabled={contactMutation.isPending}
                    >
                      <SelectTrigger className="mt-2" data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SEO Audit">SEO Audit</SelectItem>
                        <SelectItem value="Technical SEO">Technical SEO</SelectItem>
                        <SelectItem value="On-Page SEO">On-Page SEO</SelectItem>
                        <SelectItem value="Off-Page SEO">Off-Page SEO</SelectItem>
                        <SelectItem value="Local SEO">Local SEO</SelectItem>
                        <SelectItem value="Content SEO">Content SEO</SelectItem>
                        <SelectItem value="Full SEO Strategy">Full SEO Strategy</SelectItem>
                        <SelectItem value="SEO Consulting">SEO Consulting</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.service && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-service">
                        {form.formState.errors.service.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-seo-text-dark">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={4}
                      className="mt-2"
                      placeholder="Tell me about your SEO goals, challenges, and what you'd like to achieve..."
                      data-testid="input-message"
                      disabled={contactMutation.isPending}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-message">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-seo-primary text-white hover:bg-blue-700 transition-colors"
                    disabled={contactMutation.isPending}
                    data-testid="submit-contact-form"
                  >
                    {contactMutation.isPending ? "Sending..." : "Get Free SEO Audit"}
                  </Button>
                  
                  <p className="text-sm text-seo-text-medium text-center" data-testid="contact-disclaimer">
                    Free audit includes technical analysis, keyword opportunities, and competitor insights. 
                    No spam, unsubscribe anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-testid="contact-faq-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-seo-text-dark" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-seo-text-medium" data-testid="faq-description">
              Quick answers to common questions about my SEO services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="faq-grid">
            <div data-testid="faq-1">
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">How long does it take to see SEO results?</h3>
              <p className="text-seo-text-medium">Typically 3-6 months for significant improvements, with initial gains often visible within 30-60 days depending on your starting point.</p>
            </div>
            
            <div data-testid="faq-2">
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">What's included in the free audit?</h3>
              <p className="text-seo-text-medium">Technical analysis, keyword opportunities, competitor insights, and a prioritized action plan worth $500.</p>
            </div>
            
            <div data-testid="faq-3">
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">Do you work with my existing team?</h3>
              <p className="text-seo-text-medium">Absolutely! I collaborate closely with your marketing team and provide training to ensure long-term success.</p>
            </div>
            
            <div data-testid="faq-4">
              <h3 className="text-lg font-semibold mb-2 text-seo-text-dark">What industries do you specialize in?</h3>
              <p className="text-seo-text-medium">E-commerce, B2B SaaS, healthcare, real estate, and local services - but I work with businesses across all industries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
