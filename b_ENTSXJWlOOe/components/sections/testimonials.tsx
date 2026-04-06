import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Founder, Quantum Protocol',
      quote:
        'Before we reached out, we were stuck at $2M trading volume. Within 6 weeks of their strategy, we hit $50M on primary exchange and secured tier-1 status. The exchange relationships they have access to are real and immediate.',
      rating: 5,
    },
    {
      name: 'Sarah Martinez',
      role: 'CEO, Nova Network',
      quote:
        'We were turned down by three major exchanges initially. They negotiated our path, built the right narrative with decision-makers, and got us on 5 tier-1 exchanges within 4 months. That changed everything for our project.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Head of BD, PixelVerse Games',
      quote:
        'We could have wasted 6 months trying to reach exchange decision-makers ourselves. They shortened our timeline by 3 months and got us listed without market makers, which we thought was impossible for a gaming token.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Chief Strategy Officer, ChainSync Enterprise',
      quote:
        'Enterprise tokens are complex—regulators, compliance, institutional requirements. They managed every stakeholder conversation, and we came out with B2B trading partnerships we never expected. This unlocked a completely different revenue stream.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from leaders of projects we&apos;ve successfully launched
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
