import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'meghraj-exports';

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <img 
              src="/assets/Screenshot_2026-02-15_at_3.36.48_AM-removebg-preview.png" 
              alt="MeghRaj Exports" 
              className="h-32 w-auto mb-6 object-contain"
            />
            <h3 className="mb-4 text-lg font-serif font-semibold text-foreground">
              MeghRaj Exports
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for premium equestrian and saddlery products. Quality
              craftsmanship, global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-serif font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/catalogue"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Catalogue
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-serif font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@meghrajexports.com</li>
              <li>Phone: +91 [Contact Number]</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} MeghRaj Exports. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart className="h-4 w-4 fill-primary text-primary" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-primary/80"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
