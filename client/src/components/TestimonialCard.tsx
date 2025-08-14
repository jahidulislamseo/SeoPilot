import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  testimonial: string;
  avatar: string;
  rating?: number;
  testId?: string;
}

export default function TestimonialCard({
  name,
  title,
  company,
  testimonial,
  avatar,
  rating = 5,
  testId
}: TestimonialCardProps) {
  return (
    <Card 
      className="bg-white shadow-lg hover:shadow-xl transition-shadow"
      data-testid={testId || `testimonial-card-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <img 
            src={avatar} 
            alt={`${name} testimonial`} 
            className="w-12 h-12 rounded-full object-cover mr-4"
            data-testid={`testimonial-avatar-${name.toLowerCase().replace(/\s+/g, '-')}`}
          />
          <div>
            <h4 
              className="font-semibold text-seo-text-dark" 
              data-testid={`testimonial-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {name}
            </h4>
            <p 
              className="text-seo-text-medium text-sm" 
              data-testid={`testimonial-title-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {title}, {company}
            </p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex text-seo-accent mb-2" data-testid={`testimonial-rating-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {Array.from({ length: rating }, (_, i) => (
              <Star key={i} className="fill-current" size={16} />
            ))}
          </div>
          <p 
            className="text-seo-text-medium" 
            data-testid={`testimonial-text-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            "{testimonial}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
