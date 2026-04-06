import { Badge } from '@/components/ui/badge';

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Discovery & Analysis',
      description:
        'We analyze your project fundamentals, token economics, and target markets to build a listing roadmap.',
      duration: 'Weeks 1-2',
    },
    {
      number: 2,
      title: 'Exchange Targeting',
      description:
        'Strategic selection of exchanges based on your goals, community, and technical requirements. Maximum tier-1 priority.',
      duration: 'Week 3',
    },
    {
      number: 3,
      title: 'Materials Preparation',
      description:
        'Assembly of all technical, marketing, and compliance documentation required by exchanges. Audit coordination.',
      duration: 'Weeks 4-6',
    },
    {
      number: 4,
      title: 'Exchange Outreach',
      description:
        'Direct pitch to exchange teams with our relationship network. Negotiation of listing terms and timeline.',
      duration: 'Weeks 7-10',
    },
    {
      number: 5,
      title: 'Launch & Optimization',
      description:
        'Go-live support and post-listing optimization to maximize trading volume and market performance.',
      duration: 'Week 11+',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 5-stage methodology that ensures structured, successful exchange listings
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex gap-8 items-start"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-16 top-24 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent opacity-30" />
              )}

              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">{step.number}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pt-6">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {step.description}
                </p>
                <Badge variant="outline" className="text-xs">
                  {step.duration}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur">
          <h3 className="text-xl font-semibold mb-4">
            Timeline varies based on complexity and number of exchanges
          </h3>
          <p className="text-muted-foreground">
            Typical projects complete the full process in 2.5-5 months. Rush timelines available for qualified projects with full preparation.
          </p>
        </div>
      </div>
    </section>
  );
}
