import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Truck, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-plants.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lush plants on a Khor Fakkan terrace overlooking the Arabian Gulf"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-6 animate-fade-up">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Khor Fakkan, UAE</span>
            <span className="text-sm text-muted-foreground">خورفكان</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Bring the
            <span className="text-gradient-leaf block">Coastal Mountain</span>
            Greenery Home
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Curated plants for UAE homes. From AC-friendly indoor beauties to heat-resistant outdoor champions, 
            delivered across Khor Fakkan, Kalba, and Fujairah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 text-base px-8">
              Shop Collection
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8">
              <Leaf className="h-5 w-5" />
              Take Plant Quiz
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span>Free delivery in Khor Fakkan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌱</span>
              <span>UAE Climate Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💬</span>
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
