'use client';

import { Mail, Twitter, Linkedin } from 'lucide-react';
import { GlowButton } from '../glow-button';
import { useActionState } from 'react';
import { submitContact } from '@/app/actions/contact';

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContact, {
    success: false,
    error: '',
  });

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Ready to Get <span className="text-primary">Listed?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Apply now or reach out directly to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:hello@cryptolisting.pro"
            className="p-8 rounded-xl border border-border bg-background/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300 text-center group"
          >
            <div className="inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              hello@cryptolisting.pro
            </p>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/cryptolisting"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-xl border border-border bg-background/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300 text-center group"
          >
            <div className="inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Twitter className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Twitter/X</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              @cryptolisting
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/cryptolisting"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-xl border border-border bg-background/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300 text-center group"
          >
            <div className="inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Crypto Listing Pros
            </p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur">
          <h3 className="text-2xl font-semibold mb-6">Application Form</h3>

          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Name */}
              <div>
                <label htmlFor="projectName" className="block text-sm font-semibold mb-2">
                  Project Name
                </label>
                <input
                  id="projectName"
                  name="projectName"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="e.g., Quantum Protocol"
                />
              </div>

              {/* Your Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-semibold mb-2">
                  Project Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="What problem does your project solve? What's your target market? Where are you in the development cycle?"
              />
            </div>

            {/* Status Messages */}
            {state.success && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary">
                Thank you! We&apos;ll review your application and get back to you within 48 hours.
              </div>
            )}

            {state.error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                {state.error}
              </div>
            )}

            {/* Submit Button */}
            <GlowButton
              type="submit"
              size="lg"
              variant="primary"
              className="w-full"
              disabled={isPending}
            >
              {isPending ? 'Submitting...' : 'Submit Application'}
            </GlowButton>
          </form>
        </div>
      </div>
    </section>
  );
}
