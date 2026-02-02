import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { deliveryAreas } from '@/data/plants';
import { Minus, Plus, Trash2, Gift, MessageCircle, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    updateGiftMessage,
    selectedArea,
    setSelectedArea,
    subtotal,
    deliveryFee,
    total
  } = useCart();

  const [showGiftMessage, setShowGiftMessage] = useState<string | null>(null);

  const handleWhatsAppOrder = () => {
    const orderItems = items.map(item => 
      `• ${item.plant.name} x${item.quantity} - AED ${item.plant.price * item.quantity}${item.giftMessage ? ` (Gift: ${item.giftMessage})` : ''}`
    ).join('\n');
    
    const message = encodeURIComponent(
      `🌿 New Order from Coastal Greens\n\n${orderItems}\n\nSubtotal: AED ${subtotal}\nDelivery (${selectedArea?.name}): AED ${deliveryFee}\nTotal: AED ${total}`
    );
    
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display text-xl">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Discover our beautiful plants and bring nature into your home
            </p>
            <Button onClick={() => setIsCartOpen(false)} className="bg-primary hover:bg-primary/90">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.plant.id} className="flex gap-4 p-3 rounded-lg bg-muted/30">
                  <img
                    src={item.plant.image}
                    alt={item.plant.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.plant.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.plant.nameAr}</p>
                    <p className="text-sm font-semibold text-primary mt-1">
                      AED {item.plant.price}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.plant.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.plant.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-muted-foreground hover:text-accent"
                        onClick={() => setShowGiftMessage(
                          showGiftMessage === item.plant.id ? null : item.plant.id
                        )}
                      >
                        <Gift className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(item.plant.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {showGiftMessage === item.plant.id && (
                      <Textarea
                        placeholder="Add a gift message..."
                        value={item.giftMessage || ''}
                        onChange={(e) => updateGiftMessage(item.plant.id, e.target.value)}
                        className="mt-2 text-sm h-20"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              {/* Delivery Area Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">Delivery Area</label>
                <Select
                  value={selectedArea?.id}
                  onValueChange={(id) => setSelectedArea(deliveryAreas.find(a => a.id === id) || null)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery area" />
                  </SelectTrigger>
                  <SelectContent>
                    {deliveryAreas.map((area) => (
                      <SelectItem key={area.id} value={area.id}>
                        <span className="flex items-center justify-between w-full">
                          <span>{area.name} ({area.nameAr})</span>
                          <span className="text-muted-foreground ml-4">
                            {area.fee === 0 ? 'Free' : `AED ${area.fee}`}
                          </span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedArea && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated delivery: {selectedArea.estimatedDays}
                  </p>
                )}
              </div>

              <Separator />

              {/* Order Summary */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>AED {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>{deliveryFee === 0 ? 'Free' : `AED ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">AED {total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full bg-leaf hover:bg-leaf/90 text-leaf-foreground gap-2"
                size="lg"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                We'll confirm your order and arrange delivery
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
