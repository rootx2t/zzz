import { AnimatedCounter } from '../animated-counter';

export function CredibilitySection() {
  const stats = [
    { end: 50, suffix: '+', label: 'Projects Listed' },
    { end: 2.5, suffix: 'B', prefix: '$', label: 'Market Cap Managed' },
    { end: 98, suffix: '%', label: 'Success Rate' },
    { end: 15, label: 'Years Experience' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
