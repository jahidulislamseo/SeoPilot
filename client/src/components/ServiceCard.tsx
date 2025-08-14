import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  testId?: string;
  link?: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  iconBgColor = "bg-seo-primary",
  testId,
  link 
}: ServiceCardProps) {
  const cardContent = (
    <CardContent className="p-8">
      <div 
        className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
        data-testid={`service-icon-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Icon className="text-white" size={20} />
      </div>
      <h3 
        className="text-xl font-semibold mb-4 font-poppins text-seo-text-dark" 
        data-testid={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h3>
      <p 
        className="text-seo-text-medium" 
        data-testid={`service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {description}
      </p>
    </CardContent>
  );

  if (link) {
    return (
      <Link href={link}>
        <Card 
          className="bg-seo-background hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1 cursor-pointer"
          data-testid={testId || `service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {cardContent}
        </Card>
      </Link>
    );
  }

  return (
    <Card 
      className="bg-seo-background hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
      data-testid={testId || `service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {cardContent}
    </Card>
  );
}
