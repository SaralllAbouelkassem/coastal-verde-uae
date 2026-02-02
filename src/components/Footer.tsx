import { Leaf, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { deliveryAreas } from '@/data/plants';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Coastal Greens</h3>
                <p className="text-xs text-primary-foreground/70">خورفكان</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6">
              Bringing the beauty of coastal mountain greenery to homes across 
              Khor Fakkan, Kalba, and Fujairah since 2024.
            </p>
            <a 
              href="https://wa.me/971501234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-leaf text-leaf-foreground rounded-full text-sm font-medium hover:bg-leaf/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#indoor" className="hover:text-primary-foreground transition-colors">Indoor Plants</a></li>
              <li><a href="#outdoor" className="hover:text-primary-foreground transition-colors">Outdoor Plants</a></li>
              <li><a href="#mountain" className="hover:text-primary-foreground transition-colors">Mountain Garden</a></li>
              <li><a href="#quiz" className="hover:text-primary-foreground transition-colors">Plant Finder Quiz</a></li>
            </ul>
          </div>

          {/* Delivery Areas */}
          <div>
            <h4 className="font-display font-semibold mb-4">We Deliver To</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {deliveryAreas.map((area) => (
                <li key={area.id} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {area.name}
                  </span>
                  <span className="text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                    {area.fee === 0 ? 'Free' : `AED ${area.fee}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +971 50 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@coastalgreens.ae
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Corniche Road, Khor Fakkan<br />
                  Sharjah, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Coastal Greens. All rights reserved.</p>
          <p className="font-display">صنع بحب في خورفكان 🌿</p>
        </div>
      </div>
    </footer>
  );
}
