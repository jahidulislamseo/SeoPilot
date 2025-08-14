import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricData {
  value: string;
  label: string;
  color: string;
}

interface CaseStudyCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  metrics: MetricData[];
  imageUrl: string;
  imageAlt: string;
  testId?: string;
}

export default function CaseStudyCard({
  icon: Icon,
  title,
  subtitle,
  problem,
  solution,
  metrics,
  imageUrl,
  imageAlt,
  testId
}: CaseStudyCardProps) {
  return (
    <Card 
      className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      data-testid={testId || `case-study-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-seo-primary rounded-lg flex items-center justify-center mr-4">
            <Icon className="text-white" size={20} />
          </div>
          <div>
            <h3 
              className="text-xl font-semibold font-poppins text-seo-text-dark" 
              data-testid={`case-study-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {title}
            </h3>
            <p 
              className="text-seo-text-medium" 
              data-testid={`case-study-subtitle-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2 text-seo-text-dark">Problem</h4>
          <p className="text-seo-text-medium mb-4" data-testid={`case-study-problem-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {problem}
          </p>

          <h4 className="font-semibold text-lg mb-2 text-seo-text-dark">Solution</h4>
          <p className="text-seo-text-medium mb-4" data-testid={`case-study-solution-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {solution}
          </p>

          <h4 className="font-semibold text-lg mb-2 text-seo-text-dark">Results</h4>
          <div className="grid grid-cols-3 gap-4" data-testid={`case-study-metrics-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${metric.color}`} data-testid={`metric-value-${index}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-seo-text-medium" data-testid={`metric-label-${index}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-seo-background p-6 rounded-lg">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-32 object-cover rounded"
            data-testid={`case-study-image-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
