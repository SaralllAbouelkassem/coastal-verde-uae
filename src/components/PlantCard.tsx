import { Plant } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Droplets, Sun, Thermometer } from 'lucide-react';
import { useState } from 'react';
import PlantModal from './PlantModal';

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryColors = {
    indoor: 'bg-secondary/10 text-secondary border-secondary/20',
    outdoor: 'bg-leaf/10 text-leaf border-leaf/20',
    mountain: 'bg-accent/10 text-accent border-accent/20'
  };

  const categoryLabels = {
    indoor: 'AC-Friendly',
    outdoor: 'Heat Resistant',
    mountain: 'Mountain Garden'
  };

  return (
    <>
      <div className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
        {/* Image */}
        <div 
          className="aspect-[3/4] overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {plant.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-accent text-accent-foreground border-0 shadow-sm">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className={categoryColors[plant.category]}>
              {categoryLabels[plant.category]}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2">
            <h3 
              className="font-display text-lg font-semibold text-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              {plant.name}
            </h3>
            <p className="text-sm text-muted-foreground">{plant.nameAr}</p>
          </div>

          {/* Quick Care Icons */}
          <div className="flex gap-3 mb-4 text-muted-foreground">
            <div className="flex items-center gap-1" title="Watering">
              <Droplets className="h-4 w-4 text-secondary" />
              <span className="text-xs">Weekly</span>
            </div>
            <div className="flex items-center gap-1" title="Sunlight">
              <Sun className="h-4 w-4 text-accent" />
              <span className="text-xs">Indirect</span>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-display font-bold text-primary">
                {plant.price}
              </span>
              <span className="text-sm text-muted-foreground ml-1">AED</span>
            </div>
            <Button
              size="sm"
              onClick={() => addToCart(plant)}
              disabled={!plant.inStock}
              className="bg-primary hover:bg-primary/90 gap-1"
            >
              <ShoppingBag className="h-4 w-4" />
              Add
            </Button>
          </div>

          {!plant.inStock && (
            <p className="text-sm text-destructive mt-2">Out of stock</p>
          )}
        </div>
      </div>

      <PlantModal 
        plant={plant} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
