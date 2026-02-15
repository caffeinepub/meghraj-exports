import { useState } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Catalogue', path: '/catalogue' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            <img 
              src="/assets/Screenshot_2026-02-15_at_3.36.48_AM-removebg-preview.png" 
              alt="MeghRaj Exports" 
              className="h-24 w-auto md:h-28 object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`relative px-6 py-2 text-[15px] font-medium tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted/20 hover:text-foreground transition-colors md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-border/50 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`relative rounded-md px-4 py-3 text-left text-base font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-foreground bg-muted/10'
                      : 'text-muted-foreground hover:bg-muted/5 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 bg-primary rounded-r" />
                  )}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
