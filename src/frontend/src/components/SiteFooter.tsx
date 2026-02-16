import { Heart } from 'lucide-react';
import { useRouterState } from '@tanstack/react-router';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'meghraj-exports';
  
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === '/';

  return (
    <footer className={isHome ? 'home-footer' : 'footer-navy border-t'} style={!isHome ? { borderColor: 'rgba(198, 167, 94, 0.3)' } : undefined}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <img 
              src="/assets/Screenshot_2026-02-15_at_3.36.48_AM-removebg-preview.png" 
              alt="MeghRaj Exports" 
              className={`h-32 w-auto mb-6 object-contain ${isHome ? 'home-footer-logo' : ''}`}
            />
            <h3 className={`mb-4 text-lg font-serif font-semibold ${isHome ? 'home-footer-heading' : 'footer-heading'}`}>
              MeghRaj Exports
            </h3>
            <p className={`text-sm leading-relaxed ${isHome ? 'home-footer-text' : 'footer-link'}`}>
              Your trusted partner for premium equestrian and saddlery products. Quality
              craftsmanship, global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`mb-4 text-lg font-serif font-semibold ${isHome ? 'home-footer-heading' : 'footer-heading'}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className={`text-sm ${isHome ? 'home-footer-text' : 'footer-link'}`}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`text-sm ${isHome ? 'home-footer-text' : 'footer-link'}`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/catalogue"
                  className={`text-sm ${isHome ? 'home-footer-text' : 'footer-link'}`}
                >
                  Catalogue
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`text-sm ${isHome ? 'home-footer-text' : 'footer-link'}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`mb-4 text-lg font-serif font-semibold ${isHome ? 'home-footer-heading' : 'footer-heading'}`}>Contact</h3>
            <ul className={`space-y-2 text-sm ${isHome ? 'home-footer-text' : 'footer-link'}`}>
              <li>Email: info@meghrajexports.com</li>
              <li>Phone: +91 [Contact Number]</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        <div className={`mt-8 ${isHome ? 'home-gold-divider' : 'gold-divider'}`} />

        <div className={`mt-8 flex flex-col items-center justify-between gap-4 text-sm ${isHome ? 'home-footer-text' : 'footer-link'} md:flex-row`}>
          <p>© {currentYear} MeghRaj Exports. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart className="h-4 w-4 fill-primary text-primary" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:opacity-80 ${isHome ? 'home-footer-heading' : 'footer-heading'}`}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
