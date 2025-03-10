
import React from 'react';
import { Search, MessageSquare, FileText, BarChart3, Rocket, Award } from 'lucide-react';

interface FeaturesSectionProps {
  scrollY: number;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ scrollY }) => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-neon-purple" />,
      title: "Comprehensive Job Board",
      description: "Browse opportunities across categories including job types, experience levels, and industries in one place."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-neon-purple" />,
      title: "Smart Outreach Templates",
      description: "Generate personalized outreach messages that get responses from hiring managers."
    },
    {
      icon: <FileText className="h-8 w-8 text-neon-purple" />,
      title: "Resume Builder",
      description: "Create professional resumes with multiple formats that highlight your relevant skills for each application."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-neon-purple" />,
      title: "Application Tracker",
      description: "Manage all your applications, interviews, and follow-ups in one organized dashboard."
    },
    {
      icon: <Rocket className="h-8 w-8 text-neon-purple" />,
      title: "Job Categories",
      description: "Find opportunities filtered by industry, experience level, and job type to match your preferences."
    },
    {
      icon: <Award className="h-8 w-8 text-neon-purple" />,
      title: "Profile Portfolio",
      description: "Showcase your verified skills and work samples to stand out from other candidates."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animated-item">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">How ApplyGo Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform simplifies your job search from discovery to application
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card rounded-lg p-6"
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: scrollY > 1200 ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-neon-purple/10 border border-neon-purple/30 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
