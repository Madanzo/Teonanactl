import { useState } from 'react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';

type CategoryFilter = 'all' | Product['category'];

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'Todos',
  thc: 'Microdosis',
  cacao: 'Cacao',
  accessories: 'Accesorios',
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProducts = activeCategory === 'all'
    ? products.filter(p => p.status === 'active')
    : products.filter(p => p.status === 'active' && p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="container-ceremonial">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-sage mb-4">Nuestra Selección</span>
          <h1 className="text-display text-4xl md:text-5xl mb-4">Productos Ceremoniales</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra colección de productos para bienestar, 
            creados con respeto a las tradiciones ancestrales mexicanas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(Object.keys(categoryLabels) as CategoryFilter[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
