import { CheckCircle } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: 'Exchange Listing Strategy',
      description: 'Comprehensive roadmap for securing listings on exchanges aligned with your project goals.',
      features: [
        'Exchange selection & tier analysis',
        'Timing & sequencing optimization',
        'Stakeholder coordination',
        'Technical requirements fulfillment',
      ],
    },
    {
      title: 'Listing Preparation',
      description: 'Full preparation of all technical, legal, and marketing materials required by exchanges.',
      features: [
        'Smart contract audits coordination',
        'Compliance documentation',
        'Marketing assets creation',
        'Community education materials',
      ],
    },
    {
      title: 'Exchange Relationship Management',
      description: 'Direct relationships with exchange teams to ensure smooth listing processes.',
      features: [
        'Direct exchange contacts',
        'Negotiation support',
        'Timeline management',
        'Issue resolution',
      ],
    },
    {
      title: 'Post-Listing Optimization',
      description: 'Strategies to maximize trading volume and liquidity after your listing goes live.',
      features: [
        'Market making coordination',
        'Volume amplification',
        'Narrative positioning',
        'Community engagement plans',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end listing management that handles every detail of your exchange presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border bg-background/50 hover:border-primary/40 hover:bg-background/80 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
