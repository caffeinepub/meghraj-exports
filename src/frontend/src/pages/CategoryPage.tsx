import { useParams, useNavigate } from '@tanstack/react-router';
import { productCategories } from '../data/productTaxonomy';
import { ArrowLeft } from 'lucide-react';
import CategoryHierarchy from '../components/CategoryHierarchy';

export default function CategoryPage() {
  const { categorySlug } = useParams({ from: '/products/$categorySlug' });
  const navigate = useNavigate();

  const category = productCategories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 font-serif font-bold text-foreground">
              Category Not Found
            </h1>
            <p className="mb-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
              The category you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate({ to: '/products' })}
              className="btn-primary"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSendInquiry = () => {
    navigate({ to: '/contact', search: { category: category.name } });
  };

  return (
    <div className="pb-20 md:pb-28">
      {/* Category Banner Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-serif font-bold text-foreground">
              {category.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="mx-auto max-w-5xl">
          {/* Navigation and CTA */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => navigate({ to: '/products' })}
              className="inline-flex items-center text-muted-foreground transition-colors hover:text-primary font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </button>
            <button
              onClick={handleSendInquiry}
              className="btn-primary"
            >
              Send Inquiry
            </button>
          </div>

          {/* Customization Note */}
          <div className="mb-10 rounded-lg bg-card p-8 shadow-soft border-l-4 border-primary">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Custom Manufacturing Available:</span>{' '}
              All products can be customized to your specifications. Contact us to discuss your
              requirements.
            </p>
          </div>

          {/* Category Hierarchy */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-3xl font-serif font-semibold text-foreground">
                Product Categories
              </h2>
              <div className="flex-1 gold-divider-muted" />
            </div>
            <CategoryHierarchy subcategories={category.subcategories} />
          </div>
        </div>
      </div>
    </div>
  );
}
