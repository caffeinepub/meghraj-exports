import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { productCategories } from '../data/productTaxonomy';
import { toSlug } from '../utils/slug';
import { ArrowLeft } from 'lucide-react';
import SubcategoryCard from '../components/SubcategoryCard';
import ProductQuickViewModal from '../components/ProductQuickViewModal';

export default function SubcategoryPage() {
  const { categorySlug, subcategorySlug } = useParams({ 
    from: '/products/$categorySlug/$subcategorySlug' 
  });
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    description: string;
    features: string[];
    image: string;
  } | null>(null);

  const category = productCategories.find((cat) => cat.slug === categorySlug);
  const subcategory = category?.subcategories.find(
    (sub) => toSlug(sub.name) === subcategorySlug
  );

  if (!category || !subcategory) {
    return (
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 font-serif font-bold text-foreground">
              Subcategory Not Found
            </h1>
            <p className="mb-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
              The subcategory you're looking for doesn't exist.
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

  const handleProductClick = (productName: string) => {
    const product = getProductDetails(productName, categorySlug);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
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
              {subcategory.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {category.name}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Navigation and CTA */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => navigate({ to: '/products/$categorySlug', params: { categorySlug } })}
              className="inline-flex items-center text-muted-foreground transition-colors hover:text-primary font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {category.name}
            </button>
            <button
              onClick={handleSendInquiry}
              className="btn-primary"
            >
              Send Inquiry
            </button>
          </div>

          {/* Products Grid */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Products
              </h2>
              <div className="flex-1 gold-divider-muted" />
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {subcategory.productTypes.map((productType, index) => (
                <SubcategoryCard
                  key={index}
                  title={productType.name}
                  categorySlug={categorySlug}
                  subcategorySlug={subcategorySlug}
                  onClick={() => handleProductClick(productType.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickViewModal
          isOpen={!!selectedProduct}
          onClose={handleCloseModal}
          product={selectedProduct}
          onSendInquiry={handleSendInquiry}
        />
      )}
    </div>
  );
}

// Helper to generate product details for modal
function getProductDetails(productName: string, categorySlug: string): {
  name: string;
  description: string;
  features: string[];
  image: string;
} {
  const descriptions: Record<string, string> = {
    // Saddles
    'Dressage Saddle': 'Our dressage saddles are precision-crafted to provide optimal rider position and enhance communication with your horse. Designed with a deep seat and long, straight flaps, these saddles support the classical dressage seat while allowing freedom of movement for both horse and rider.',
    'Monoflap Dressage Saddle': 'Experience closer contact and enhanced feel with our monoflap dressage saddles. The streamlined single-flap design eliminates bulk between rider and horse, offering superior communication and a more refined riding experience for advanced dressage work.',
    'Jumping Saddle': 'Built for security and balance over fences, our jumping saddles feature forward-cut flaps and knee rolls that support the rider in a forward position. Premium leather construction ensures durability through countless training sessions and competitions.',
    'Close Contact Saddle': 'Designed for riders who demand maximum feel and direct communication, our close contact saddles feature minimal padding and a flat seat. Perfect for show jumping and equitation, these saddles allow precise aids and exceptional balance.',
    'Eventing / Cross Country Saddle': 'Versatile by design, our eventing saddles combine the security needed for cross-country with the balance required for show jumping and the comfort for dressage. Built to withstand the rigors of three-phase competition.',
    'All Purpose Saddle': 'The ultimate multi-discipline saddle, suitable for flatwork, jumping, and trail riding. Our all-purpose saddles offer moderate knee rolls and a balanced seat, making them ideal for riders who enjoy variety in their riding activities.',
    'Exercise Saddle': 'Lightweight and practical, our exercise saddles are perfect for daily training and conditioning work. Durable construction withstands frequent use while providing comfort for both horse and rider during extended training sessions.',
    'Baby / Pony Saddle': 'Specially scaled for young riders and ponies, these saddles feature proportions that ensure proper fit and balance. Quality construction means they can be passed down through multiple young riders while maintaining their integrity.',
    'Synthetic English Saddle': 'Weather-resistant and easy to maintain, our synthetic English saddles offer excellent value without compromising on design. Perfect for everyday riding, these saddles resist moisture and require minimal upkeep.',
    'Trail Saddle': 'Engineered for comfort during long hours on the trail, our trail saddles feature deep, secure seats and multiple attachment points for gear. Durable construction ensures reliability on extended wilderness adventures.',
    'Pleasure Saddle': 'Combining comfort with elegance, our pleasure saddles are perfect for leisurely rides and show ring presentations. Luxurious padding and refined styling make every ride a pleasure.',
    'Barrel Racing Saddle': 'Built for speed and agility, our barrel racing saddles feature deep seats and high cantles that keep riders secure through tight turns. Reinforced construction withstands the intense demands of competitive barrel racing.',
    'Roping Saddle': 'Heavy-duty construction designed to handle the stress of roping work. Our roping saddles feature reinforced trees, strong horns, and durable rigging that can withstand the forces of ranch work and rodeo competition.',
    'Ranch Saddle': 'Built for all-day comfort during working cattle operations, our ranch saddles combine durability with functionality. Multiple rigging options and practical design make these saddles the choice of working cowboys.',
    'Cutting Saddle': 'Specialized design allows freedom of movement for cutting maneuvers while keeping the rider secure. Deep seats and tall swells provide stability during quick stops and turns required in cutting competition.',
    'Reining Saddle': 'Precision-crafted for reining patterns, these saddles feature deep seats and high cantles that support the rider during sliding stops and spins. Quality construction ensures consistent performance in the show pen.',
    'Wade Saddle': 'Traditional working saddle design offering exceptional balance and durability. Our Wade saddles feature a slick fork and minimal tooling, preferred by working cowboys for their all-day comfort and functionality.',
    'Western Show Saddle': 'Stunning visual appeal meets functional design in our Western show saddles. Intricate hand-tooling and silver accents make these saddles stand out in the show ring while maintaining the comfort and balance needed for competition.',
    'Mexican Western Saddle': 'Authentic traditional styling with intricate hand-tooled details characterize our Mexican Western saddles. Rich cultural heritage combined with quality craftsmanship creates saddles that are both beautiful and functional.',
    'Polo Saddle': 'Lightweight and agile, our polo saddles are designed for the fast-paced demands of polo competition. Minimal padding and forward-cut flaps allow quick movements and precise control during play.',
    'Endurance Saddle': 'Ergonomically designed for both horse and rider comfort over long distances, our endurance saddles feature lightweight construction and multiple attachment points for gear. Built to support multi-day rides and competitive endurance events.',
    'Treeless Saddle': 'Flexible design conforms to your horse\'s unique back shape, distributing weight evenly without a rigid tree. Our treeless saddles offer freedom of movement while maintaining rider security and comfort.',
    'Stock Saddle (Australian)': 'Distinctive Australian design perfect for stock work and trail riding. Deep, comfortable seats and practical features make these saddles ideal for long days working livestock or exploring the outback.',
    'Half-Breed Saddle': 'Unique hybrid design combining the best features of English and Western saddles. Our half-breed saddles offer versatility for riders who appreciate elements from both riding traditions.',
    'Trooper Saddle': 'Military-inspired design offering durability and all-day comfort. Our trooper saddles feature practical construction and reliable performance, perfect for long rides and demanding conditions.',
    'Vaquera Saddle': 'Traditional Spanish working saddle with elegant styling and functional design. Our vaquera saddles honor centuries of horsemanship tradition while incorporating modern materials and construction techniques.',
    'Icelandic Saddle': 'Specially designed for the unique gaits of Icelandic horses, these saddles provide comfort and security during tölt and other smooth gaits. Authentic construction respects Icelandic riding traditions.',
    'Racing Saddle': 'Ultra-lightweight construction minimizes weight while maintaining strength and security. Our racing saddles are designed for maximum speed with minimal interference, perfect for flat racing and steeplechase.',
  };

  const features: Record<string, string[]> = {
    'Dressage Saddle': [
      'Deep seat for optimal rider position',
      'Long, straight flaps for extended leg position',
      'Premium leather construction',
      'Adjustable girth straps',
      'Available in multiple sizes and colors'
    ],
    'Monoflap Dressage Saddle': [
      'Single-flap design for closer contact',
      'Reduced bulk between rider and horse',
      'Enhanced feel and communication',
      'Modern ergonomic design',
      'Premium quality materials'
    ],
    'Jumping Saddle': [
      'Forward-cut flaps for jumping position',
      'Supportive knee and thigh rolls',
      'Durable leather construction',
      'Secure seat design',
      'Competition-ready finish'
    ],
    'Close Contact Saddle': [
      'Minimal padding for maximum feel',
      'Flat seat design',
      'Close contact with horse',
      'Lightweight construction',
      'Ideal for show jumping'
    ],
    'Eventing / Cross Country Saddle': [
      'Versatile multi-phase design',
      'Secure seat for cross-country',
      'Forward flaps for jumping',
      'Durable construction',
      'Competition tested'
    ],
  };

  const placeholderImages: Record<string, string> = {
    'saddles': '/assets/generated/prod-placeholder-saddle.dim_1200x800.png',
    'bridles-headgear': '/assets/generated/prod-placeholder-bridle.dim_1200x800.png',
    'halters-leads': '/assets/generated/prod-placeholder-bridle.dim_1200x800.png',
    'bags-leather-goods': '/assets/generated/prod-placeholder-leather.dim_1200x800.png',
    'stirrups-accessories': '/assets/generated/prod-placeholder-leather.dim_1200x800.png',
    'horse-care-stable-accessories': '/assets/generated/prod-placeholder-grooming.dim_1200x800.png',
    'saddle-pads-blankets': '/assets/generated/prod-placeholder-textile.dim_1200x800.png',
    'horse-rugs-clothing': '/assets/generated/prod-placeholder-textile.dim_1200x800.png',
    'bits-spurs-control-gear': '/assets/generated/prod-placeholder-hardware.dim_1200x800.png',
    'harness-driving-equipment': '/assets/generated/prod-placeholder-hardware.dim_1200x800.png',
  };

  const defaultDescription = `Premium ${productName.toLowerCase()} crafted with quality materials and expert attention to detail. Our ${productName.toLowerCase()} combines traditional craftsmanship with modern design principles to deliver exceptional performance and durability. Each piece is carefully constructed to meet the demanding standards of equestrian professionals and enthusiasts alike.`;

  const defaultFeatures = [
    'Premium quality materials',
    'Expert craftsmanship',
    'Durable construction',
    'Available in multiple sizes',
    'Customization options available'
  ];

  return {
    name: productName,
    description: descriptions[productName] || defaultDescription,
    features: features[productName] || defaultFeatures,
    image: placeholderImages[categorySlug] || '/assets/generated/prod-placeholder-saddle.dim_1200x800.png',
  };
}
