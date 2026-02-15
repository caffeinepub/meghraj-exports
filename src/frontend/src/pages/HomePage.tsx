import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, Award, Globe, Wrench } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section - Cinematic with minimal overlay */}
      <section className="relative h-[700px] md:h-[800px] overflow-hidden -mt-24">
        <img
          src="/assets/generated/hero-equestrian-editorial.dim_1600x900.png"
          alt="Premium equestrian equipment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle top gradient for readability only */}
        <div className="absolute inset-0 hero-gradient-minimal" />
        
        <div className="relative flex h-full items-center pt-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl">
              <h1 className="mb-8 font-serif font-bold leading-[1.05] hero-headline">
                Premium Equestrian Excellence
              </h1>
              <p className="mb-12 text-xl md:text-2xl leading-relaxed hero-subtext">
                Your trusted partner for high-quality saddlery and equestrian products worldwide
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <button
                  onClick={() => navigate({ to: '/products' })}
                  className="btn-primary-hero"
                >
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => navigate({ to: '/catalogue' })}
                  className="btn-secondary-hero"
                >
                  Request Catalogue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Deep Navy */}
      <section className="section-navy-dark py-40 md:py-48">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 gold-divider" />
            <h2 className="mb-12 text-center font-serif font-bold text-warm-white">
              Crafting Quality Since Inception
            </h2>
            <p className="text-center text-lg md:text-xl leading-relaxed text-warm-white/85">
              MeghRaj Exports specializes in manufacturing and exporting premium equestrian and
              saddlery products. We combine traditional craftsmanship with modern manufacturing
              techniques to deliver products that meet international quality standards. Our
              commitment to excellence and customer satisfaction has made us a preferred partner for
              businesses worldwide.
            </p>
            <div className="mt-12 gold-divider" />
          </div>
        </div>
      </section>

      {/* Highlights Section - Dark with Glass Cards */}
      <section className="section-charcoal py-40 md:py-48">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="glass-card-dark glass-card-hover-lift p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-5 text-2xl font-serif font-semibold text-warm-white">
                Quality Assurance
              </h3>
              <p className="text-base leading-relaxed text-warm-white/75">
                Every product undergoes rigorous quality control to ensure it meets international
                standards and exceeds customer expectations.
              </p>
            </div>

            <div className="glass-card-dark glass-card-hover-lift p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-5 text-2xl font-serif font-semibold text-warm-white">
                Custom Manufacturing
              </h3>
              <p className="text-base leading-relaxed text-warm-white/75">
                We offer comprehensive customization services to create products that perfectly
                match your specifications and brand requirements.
              </p>
            </div>

            <div className="glass-card-dark glass-card-hover-lift p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <Globe className="h-8 w-8 text-primary" />
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

      {/* CTA Section - Deep Navy */}
      <section className="section-navy-dark py-40 md:py-48">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-10 font-serif font-bold text-warm-white">
              Ready to Get Started?
            </h2>
            <p className="mb-12 text-lg md:text-xl text-warm-white/80 leading-relaxed">
              Contact us today to discuss your requirements and discover how we can support your
              business with premium equestrian products.
            </p>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-primary-hero"
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
