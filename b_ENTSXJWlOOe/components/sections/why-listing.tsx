import { TrendingUp, Users, Shield, Zap } from 'lucide-react';

export function WhyListingSection() {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Market Exposure',
      description:
        'Strategic listings on tier-1 exchanges dramatically increase trading volume and market visibility for your project.',
    },
    {
      icon: Users,
      title: 'Investor Access',
      description:
        'Connect directly with institutional and retail investors actively searching for emerging opportunities.',
    },
    {
      icon: Shield,
      title: 'Credibility Signal',
      description:
        'Exchange listings serve as third-party validation, building trust with your community and stakeholders.',
    },
    {
      icon: Zap,
      title: 'Liquidity Generation',
      description:
        'Proper exchange positioning ensures deep liquidity pools and favorable price discovery mechanisms.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Why <span className="text-primary">Listing</span> Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exchange listings are no longer optional—they&apos;re essential infrastructure for serious blockchain projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
