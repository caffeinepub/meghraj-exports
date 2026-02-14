import { Subcategory } from '../data/productTaxonomy';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CategoryHierarchyProps {
  subcategories: Subcategory[];
}

export default function CategoryHierarchy({ subcategories }: CategoryHierarchyProps) {
  return (
    <div className="space-y-4">
      <Accordion type="multiple" className="w-full space-y-4">
        {subcategories.map((subcategory, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg bg-card overflow-hidden shadow-soft border-none"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/20">
              <span className="text-lg md:text-xl font-serif font-medium text-foreground">
                {subcategory.name}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <div className="pt-2 border-t border-gold-muted/30">
                <ul className="space-y-3 mt-4">
                  {subcategory.productTypes.map((productType, ptIndex) => (
                    <li
                      key={ptIndex}
                      className="flex items-start text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover:shadow-gold-glow" />
                      <span className="text-base leading-relaxed">{productType.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
