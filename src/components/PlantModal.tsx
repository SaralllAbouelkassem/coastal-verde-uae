import { Plant } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Droplets, Sun, Thermometer, Wind, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface PlantModalProps {
  plant: Plant;
  isOpen: boolean;
  onClose: () => void;
}

export default function PlantModal({ plant, isOpen, onClose }: PlantModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(plant, quantity);
    setQuantity(1);
    onClose();
  };

  const categoryLabels = {
    indoor: 'Indoor (AC-Friendly)',
    outdoor: 'Outdoor (Heat Resistant)',
    mountain: 'Mountain Garden Special'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-square md:aspect-auto">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col">
            <DialogHeader className="text-left">
              <Badge variant="outline" className="w-fit mb-2 text-xs">
                {categoryLabels[plant.category]}
              </Badge>
              <DialogTitle className="font-display text-2xl md:text-3xl font-semibold">
                {plant.name}
              </DialogTitle>
              <p className="text-lg text-muted-foreground font-display">{plant.nameAr}</p>
            </DialogHeader>

            <p className="text-muted-foreground mt-4 mb-6">{plant.description}</p>

            {/* Care Guide */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-lg">🌱</span>
                UAE Care Guide
              </h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Droplets className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Watering</p>
                    <p className="text-sm text-muted-foreground">{plant.careGuide.watering}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Sun className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sunlight</p>
                    <p className="text-sm text-muted-foreground">{plant.careGuide.sunlight}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                    <Thermometer className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Temperature</p>
                    <p className="text-sm text-muted-foreground">{plant.careGuide.temperature}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Wind className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Humidity</p>
                    <p className="text-sm text-muted-foreground">{plant.careGuide.humidity}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div className="mt-auto pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-display font-bold text-primary">
                    {plant.price}
                  </span>
                  <span className="text-lg text-muted-foreground ml-1">AED</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 gap-2"
                size="lg"
                onClick={handleAddToCart}
                disabled={!plant.inStock}
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart - AED {plant.price * quantity}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
