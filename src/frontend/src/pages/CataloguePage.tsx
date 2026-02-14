import { useNavigate } from '@tanstack/react-router';
import { FileText, Download, Mail } from 'lucide-react';

export default function CataloguePage() {
  const navigate = useNavigate();

  const handleRequestCatalogue = () => {
    navigate({ to: '/contact', search: { category: 'Catalogue Request' } });
  };

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 font-serif font-bold text-foreground">
              Product Catalogue
            </h1>
            <div className="mx-auto mb-6 w-24 gold-divider" />
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Request our comprehensive product catalogue to explore our complete range of
              equestrian and saddlery products.
            </p>
          </div>

          <div className="mb-16 grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-9 w-9 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-serif font-semibold text-foreground">
                Comprehensive Coverage
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Detailed information on all 14 product categories with specifications and images.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Download className="h-9 w-9 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-serif font-semibold text-foreground">
                Digital Format
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Receive a professionally designed PDF catalogue directly to your email.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-9 w-9 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-serif font-semibold text-foreground">
                Quick Response
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our team will send you the catalogue within 24 hours of your request.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-card p-10 md:p-14 shadow-soft border-l-4 border-primary">
            <h2 className="mb-6 text-3xl font-serif font-semibold text-foreground">
              What's Included in Our Catalogue?
            </h2>
            <ul className="mb-10 space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">Complete product range across all categories</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">High-quality product images and detailed descriptions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">Material specifications and available customization options</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">Bulk order information and export capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">Company information and contact details</span>
              </li>
            </ul>

            <div className="text-center">
              <button
                onClick={handleRequestCatalogue}
                className="btn-primary"
              >
                Request Catalogue
              </button>
              <p className="mt-6 text-sm text-muted-foreground">
                Fill out a quick form and we'll send you the catalogue right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
