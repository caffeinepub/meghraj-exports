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
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Re-enable body scroll
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSendInquiryClick = () => {
    onSendInquiry();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
      onClick={handleOverlayClick}
    >
      {/* Backdrop with blur and darkening */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[6px]" />

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto modal-panel">
        <div className="bg-[#141F33] border border-[#C8A24D] rounded-lg shadow-[0_0_40px_rgba(200,162,77,0.15)]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/10 text-muted-foreground hover:bg-background/20 hover:text-foreground transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content Layout */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] overflow-hidden md:rounded-l-lg">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-10 flex flex-col">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Features */}
              {product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C8A24D] flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Send Inquiry Button */}
              <button
                onClick={handleSendInquiryClick}
                className="mt-auto inline-flex items-center justify-center px-8 py-3 bg-[#C8A24D] text-[#141F33] font-semibold rounded-md transition-all duration-200 hover:bg-[#B89240] hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
