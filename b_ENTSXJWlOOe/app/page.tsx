import { HeroSection } from '@/components/sections/hero';
import { CredibilitySection } from '@/components/sections/credibility';
import { WhyListingSection } from '@/components/sections/why-listing';
import { ServicesSection } from '@/components/sections/services';
import { CaseStudiesSection } from '@/components/sections/case-studies';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { QualificationsSection } from '@/components/sections/qualifications';
import { ContactSection } from '@/components/sections/contact';
import { FooterSection } from '@/components/sections/footer';

export const metadata = {
  title: 'Crypto Listing Pros - Premium Exchange Listing Management',
  description:
    'Elite exchange listing management for serious blockchain projects. Get your token listed on tier-1 exchanges with our proven track record.',
  openGraph: {
    title: 'Crypto Listing Pros - Premium Exchange Listing Management',
    description:
      'Elite exchange listing management for serious blockchain projects.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CredibilitySection />
      <WhyListingSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <QualificationsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
