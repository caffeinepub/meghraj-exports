import { useNavigate } from '@tanstack/react-router';
import { Subcategory } from '../data/productTaxonomy';
import { toSlug } from '../utils/slug';
import { ChevronRight } from 'lucide-react';

interface CategoryHierarchyProps {
  subcategories: Subcategory[];
  categorySlug: string;
}

export default function CategoryHierarchy({ subcategories, categorySlug }: CategoryHierarchyProps) {
  const navigate = useNavigate();

  const handleSubcategoryClick = (subcategoryName: string) => {
    const subcategorySlug = toSlug(subcategoryName);
    navigate({ 
      to: '/products/$categorySlug/$subcategorySlug', 
      params: { categorySlug, subcategorySlug } 
    });
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {subcategories.map((subcategory, index) => (
        <button
          key={index}
          onClick={() => handleSubcategoryClick(subcategory.name)}
          className="glass-card glass-card-hover group relative overflow-hidden p-6 text-left"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg md:text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
              {subcategory.name}
            </h3>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {subcategory.productTypes.length} product {subcategory.productTypes.length === 1 ? 'type' : 'types'}
            </p>
            
            {/* Show first few product types as preview */}
            <div className="pt-2" style={{ borderTop: '1px solid rgba(199, 154, 82, 0.2)' }}>
              <ul className="space-y-1.5">
                {subcategory.productTypes.slice(0, 3).map((productType, ptIndex) => (
                  <li
                    key={ptIndex}
                    className="flex items-start text-sm text-muted-foreground"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: '#C79A52' }} />
                    <span className="leading-relaxed">{productType.name}</span>
                  </li>
                ))}
                {subcategory.productTypes.length > 3 && (
                  <li className="text-sm text-primary font-medium pt-1">
                    + {subcategory.productTypes.length - 3} more
                  </li>
                )}
              </ul>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
