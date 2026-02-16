import { useNavigate, useRouterState } from '@tanstack/react-router';
import { ArrowRight, Award, Globe, Wrench } from 'lucide-react';
import { useRevealOnce } from '../hooks/useRevealOnce';
import { useParallax } from '../hooks/useParallax';

export default function HomePage() {
  const navigate = useNavigate();
  const parallaxRef = useParallax(0.5);
  const craftingSection = useRevealOnce();
  const highlightsSection = useRevealOnce();
  const card1 = useRevealOnce();
  const card2 = useRevealOnce();
  const card3 = useRevealOnce();
  const ctaSection = useRevealOnce();

  return (
    <div className="home-page-wrapper">
      {/* Hero Section - Cinematic with parallax and vignette */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden -mt-24">
        <div ref={parallaxRef} className="absolute inset-0 w-full h-[110vh]">
          <img
            src="/assets/generated/hero-equestrian-editorial.dim_1600x900.png"
            alt="Premium equestrian equipment"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        {/* Vignette overlay - very subtle */}
        <div className="absolute inset-0 home-hero-vignette" />
        {/* Left-to-right dark gradient overlay */}
        <div className="absolute inset-0 home-hero-gradient" />
        
        <div className="relative flex h-full items-center pt-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl">
              <h1 className="mb-10 font-serif font-bold leading-[1.05] home-hero-headline home-hero-entrance-text">
                Premium Equestrian Excellence
              </h1>
              <p className="mb-14 text-xl md:text-2xl leading-relaxed home-hero-subtext home-hero-entrance-text-delayed">
                Your trusted partner for high-quality saddlery and equestrian products worldwide
              </p>
              <div className="flex flex-col gap-5 sm:flex-row home-hero-entrance-buttons">
                <button
                  onClick={() => navigate({ to: '/products' })}
                  className="home-btn-primary-hero"
                >
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => navigate({ to: '/catalogue' })}
                  className="home-btn-secondary-hero"
                >
                  Request Catalogue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth gradient transition from hero to content */}
      <div className="home-hero-to-content-fade" />

      {/* Introduction Section - Lighter Navy Gradient with Radial Glow and Animated Gold Lines */}
      <section
        ref={craftingSection.ref}
        className={`home-section-crafting py-48 md:py-56 home-section-reveal ${
          craftingSection.isRevealed ? 'home-section-revealed' : ''
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-[680px]">
            <div className="relative mb-10">
              {/* Animated gold line above */}
              <div className="home-gold-line-top" />
            </div>
            <div className="relative">
              <div className="home-heading-spotlight" />
              <h2 className="mb-10 text-center font-serif font-bold text-warm-white relative z-10 text-4xl md:text-5xl">
                Crafting Quality Since Inception
              </h2>
            </div>
            <p className="text-center text-lg md:text-xl text-warm-white/85 max-w-[680px] mx-auto" style={{ lineHeight: '1.85' }}>
              MeghRaj Exports specializes in manufacturing and exporting premium equestrian and
              saddlery products. We combine traditional craftsmanship with modern manufacturing
              techniques to deliver products that meet international quality standards. Our
              commitment to excellence and customer satisfaction has made us a preferred partner for
              businesses worldwide.
            </p>
            <div className="relative mt-10">
              {/* Animated gold line below */}
              <div className="home-gold-line-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Dark with Enhanced Glass Cards and Staggered Scroll Reveal */}
      <section
        ref={highlightsSection.ref}
        className={`home-section-highlights py-48 md:py-56 relative home-section-reveal ${
          highlightsSection.isRevealed ? 'home-section-revealed' : ''
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-16 md:grid-cols-3 relative">
            <div
              ref={card1.ref}
              className={`home-glass-card home-glass-card-hover p-10 relative z-10 group home-card-reveal ${
                card1.isRevealed ? 'home-card-revealed' : ''
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 home-card-icon-wrapper">
                <Award className="h-8 w-8 text-primary home-card-icon" />
              </div>
              <h3 className="mb-5 text-2xl font-serif font-semibold text-warm-white">
                Quality Assurance
              </h3>
              <p className="text-base leading-relaxed text-warm-white/75">
                Every product undergoes rigorous quality control to ensure it meets international
                standards and exceeds customer expectations.
              </p>
            </div>

            <div
              ref={card2.ref}
              className={`home-glass-card home-glass-card-hover p-10 relative z-10 group home-card-reveal ${
                card2.isRevealed ? 'home-card-revealed' : ''
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 home-card-icon-wrapper">
                <Wrench className="h-8 w-8 text-primary home-card-icon" />
              </div>
              <h3 className="mb-5 text-2xl font-serif font-semibold text-warm-white">
                Custom Manufacturing
              </h3>
              <p className="text-base leading-relaxed text-warm-white/75">
                We offer comprehensive customization services to create products that perfectly
                match your specifications and brand requirements.
              </p>
            </div>

            <div
              ref={card3.ref}
              className={`home-glass-card home-glass-card-hover p-10 relative z-10 group home-card-reveal ${
                card3.isRevealed ? 'home-card-revealed' : ''
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 home-card-icon-wrapper">
                <Globe className="h-8 w-8 text-primary home-card-icon" />
              </div>
              <h3 className="mb-5 text-2xl font-serif font-semibold text-warm-white">
                Global Export
              </h3>
              <p className="text-base leading-relaxed text-warm-white/75">
                With extensive experience in international trade, we handle all aspects of export
                logistics to ensure smooth delivery worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle gold divider between sections */}
      <section className="home-section-transition py-24">
        <div className="home-section-divider" />
      </section>

      {/* CTA Section - Warmer Navy with Radial Glow and Increased Spacing */}
      <section
        ref={ctaSection.ref}
        className={`home-section-cta py-56 md:py-64 home-section-reveal ${
          ctaSection.isRevealed ? 'home-section-revealed' : ''
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative mb-10">
              <div className="home-cta-spotlight" />
              <h2 className="font-serif font-bold text-warm-white relative z-10 text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
            </div>
            <p className="mb-12 text-lg md:text-xl text-warm-white/80 leading-relaxed">
              Contact us today to discuss your requirements and discover how we can support your
              business with premium equestrian products.
            </p>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="home-btn-cta"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
