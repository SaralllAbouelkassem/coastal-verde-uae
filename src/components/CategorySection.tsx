import { Plant } from '@/types';
import PlantCard from './PlantCard';
import { Snowflake, Sun, Mountain } from 'lucide-react';

interface CategorySectionProps {
  category: 'indoor' | 'outdoor' | 'mountain';
  plants: Plant[];
}

const categoryConfig = {
  indoor: {
    id: 'indoor',
    title: 'Indoor Plants',
    titleAr: 'نباتات داخلية',
    subtitle: 'AC-Friendly Beauties',
    description: 'Perfect for UAE homes with air conditioning. These plants thrive in consistent indoor temperatures.',
    icon: Snowflake,
    iconColor: 'text-secondary'
  },
  outdoor: {
    id: 'outdoor',
    title: 'Outdoor Plants',
    titleAr: 'نباتات خارجية',
    subtitle: 'Heat Resistant Champions',
    description: 'Built for the UAE sun. These tough plants flourish on balconies and in villa gardens.',
    icon: Sun,
    iconColor: 'text-accent'
  },
  mountain: {
    id: 'mountain',
    title: 'Mountain Garden',
    titleAr: 'حديقة جبلية',
    subtitle: 'Khor Fakkan Specials',
    description: 'Native and adapted plants perfect for the unique microclimate of our mountain region.',
    icon: Mountain,
    iconColor: 'text-primary'
  }
};

export default function CategorySection({ category, plants }: CategorySectionProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <section id={config.id} className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Icon className={`h-6 w-6 ${config.iconColor}`} />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {config.subtitle}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {config.title}
            </h2>
            <p className="text-lg text-muted-foreground font-display">{config.titleAr}</p>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0 md:text-right">
            {config.description}
          </p>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
