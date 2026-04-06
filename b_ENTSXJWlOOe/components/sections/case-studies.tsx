import { ArrowUpRight } from 'lucide-react';

export function CaseStudiesSection() {
  const cases = [
    {
      title: 'DeFi Protocol Launch',
      client: 'Quantum Protocol',
      volume: '50M',
      timeframe: '3 months',
      description:
        'Secured listings on 8 tier-1 exchanges simultaneously. Achieved $50M trading volume within first week of primary listing.',
      result: 'Successfully positioned for institutional trading access',
    },
    {
      title: 'Layer 2 Ecosystem Token',
      client: 'Nova Network',
      volume: '120M',
      timeframe: '4 months',
      description:
        'Complex multi-chain launch strategy across 12 exchanges. Coordinated with ecosystem partners for synchronized trading.',
      result: 'Became top 3 trading pair on 5 major exchanges',
    },
    {
      title: 'Gaming Token Launch',
      client: 'PixelVerse Games',
      volume: '30M',
      timeframe: '2.5 months',
      description:
        'Vertical listing strategy targeting gaming-focused platforms. Built strong community narrative ahead of launch.',
      result: 'Achieved organic volume without market making',
    },
    {
      title: 'Enterprise Blockchain Token',
      client: 'ChainSync Enterprise',
      volume: '85M',
      timeframe: '5 months',
      description:
        'Unique compliance-first approach for institutional token. Navigated complex regulatory requirements across jurisdictions.',
      result: 'Opened B2B trading corridors with corporate partners',
    },
  ];

  return (
    <section id="case-studies-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Proven <span className="text-primary">Track Record</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from successful launches and listings we&apos;ve managed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.client}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {caseStudy.description}
                </p>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Volume</p>
                    <p className="text-lg font-semibold text-primary">
                      ${caseStudy.volume}M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Timeframe
                    </p>
                    <p className="text-lg font-semibold">{caseStudy.timeframe}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <p className="text-lg font-semibold text-secondary">Live</p>
                  </div>
                </div>

                <p className="text-sm font-medium text-primary/80">
                  ✓ {caseStudy.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
