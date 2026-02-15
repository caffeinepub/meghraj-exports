import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    features: string[];
    image: string;
  };
  onSendInquiry: () => void;
}

export default function ProductQuickViewModal({
  isOpen,
  onClose,
  product,
  onSendInquiry,
}: ProductQuickViewModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card modal-panel border border-primary/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid gap-8 md:grid-cols-2 p-8">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted/10">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-3xl font-serif font-bold text-foreground">
              {product.name}
            </h2>

            <div className="mb-6 h-px gold-divider" />

            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-serif font-semibold text-foreground">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-muted-foreground">
                    <span className="mr-3 mt-1.5 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button
                onClick={onSendInquiry}
                className="btn-primary w-full"
              >
                Send Inquiry
              </button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Contact us for pricing, customization options, and bulk orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
