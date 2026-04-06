import { AlertCircle, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function QualificationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - We Only Work With */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              We Only Work With <span className="text-primary">Serious Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We maintain high standards for project quality and commitment. Here&apos;s what we look for:
            </p>

            <div className="space-y-4">
              {[
                'Solid technical foundation and completed product',
                'Clear roadmap with realistic milestones',
                'Transparent team with traceable backgrounds',
                'Genuine use case and market demand',
                'Adequate funding for continued development',
                'Commitment to community building',
              ].map((criterion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Red Flags */}
          <div className="space-y-6">
            <div className="p-8 rounded-xl border-2 border-red-500/30 bg-red-500/5 space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold">
                  We <span className="text-red-500">Pass</span> On:
                </h3>
              </div>

              <ul className="space-y-3 text-foreground">
                {[
                  'Pump & dump schemes or ponzi mechanics',
                  'Projects relying solely on hype',
                  'Unproven teams with anonymous leadership',
                  'Pre-product tokens with no utility',
                  'Projects violating securities regulations',
                  'Anyone with poor token economics or unfair launches',
                ].map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500/60 font-bold">✗</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-primary/80">
                <span className="font-semibold">Why we&apos;re selective:</span> Our reputation is built on successful projects. We turn away 8 out of 10 opportunities to maintain our track record.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to apply?
          </h3>
          <p className="text-muted-foreground mb-6">
            Apply below and tell us about your project. We review all applications within 48 hours.
          </p>
          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
            Applications open
          </Badge>
        </div>
      </div>
    </section>
  );
}
