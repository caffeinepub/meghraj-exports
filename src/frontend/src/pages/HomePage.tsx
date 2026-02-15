import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, Award, Globe, Wrench } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden -mt-20">
        <img
          src="/assets/generated/hero-equestrian.dim_1600x900.png"
          alt="Premium equestrian equipment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative flex h-full items-center pt-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-2xl">
              <div className="hero-text-backdrop">
                <h1 className="mb-6 font-serif font-bold leading-[1.1] text-white">
                  Premium Equestrian Excellence
                </h1>
                <p className="mb-8 text-xl md:text-2xl text-white/95 leading-relaxed">
                  Your trusted partner for high-quality saddlery and equestrian products worldwide
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => navigate({ to: '/products' })}
                    className="btn-primary"
                  >
                    View Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigate({ to: '/catalogue' })}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    Request Catalogue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-secondary py-32 md:py-40">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 gold-divider" />
            <h2 className="mb-10 text-center font-serif font-bold text-foreground">
              Crafting Quality Since Inception
            </h2>
            <p className="text-center text-lg md:text-xl leading-relaxed text-muted-foreground">
              MeghRaj Exports specializes in manufacturing and exporting premium equestrian and
              saddlery products. We combine traditional craftsmanship with modern manufacturing
              techniques to deliver products that meet international quality standards. Our
              commitment to excellence and customer satisfaction has made us a preferred partner for
              businesses worldwide.
            </p>
            <div className="mt-10 gold-divider" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="glass-card glass-card-hover p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-serif font-semibold text-foreground">
                Quality Assurance
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Every product undergoes rigorous quality control to ensure it meets international
                standards and exceeds customer expectations.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-serif font-semibold text-foreground">
                Custom Manufacturing
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                We offer comprehensive customization services to create products that perfectly
                match your specifications and brand requirements.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-serif font-semibold text-foreground">
                Global Export
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                With extensive experience in international trade, we handle all aspects of export
                logistics to ensure smooth delivery worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-32 md:py-40">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 font-serif font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Contact us today to discuss your requirements and discover how we can support your
              business with quality equestrian products.
            </p>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-primary"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
