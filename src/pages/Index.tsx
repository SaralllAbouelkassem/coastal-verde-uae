import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import PlantQuiz from '@/components/PlantQuiz';
import Footer from '@/components/Footer';
import { plants } from '@/data/plants';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlants = useMemo(() => {
    if (!searchQuery.trim()) return plants;
    const query = searchQuery.toLowerCase();
    return plants.filter(
      plant =>
        plant.name.toLowerCase().includes(query) ||
        plant.nameAr.includes(query) ||
        plant.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const indoorPlants = filteredPlants.filter(p => p.category === 'indoor');
  const outdoorPlants = filteredPlants.filter(p => p.category === 'outdoor');
  const mountainPlants = filteredPlants.filter(p => p.category === 'mountain');

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={setSearchQuery} />
      
      <main>
        <Hero />
        
        {/* Search Results Indicator */}
        {searchQuery && (
          <div className="container py-8">
            <p className="text-muted-foreground">
              Showing results for "<span className="text-foreground font-medium">{searchQuery}</span>" 
              ({filteredPlants.length} plants found)
            </p>
          </div>
        )}
        
        {/* Categories */}
        {indoorPlants.length > 0 && (
          <CategorySection category="indoor" plants={indoorPlants} />
        )}
        
        {outdoorPlants.length > 0 && (
          <div className="bg-muted/30">
            <CategorySection category="outdoor" plants={outdoorPlants} />
          </div>
        )}
        
        {mountainPlants.length > 0 && (
          <CategorySection category="mountain" plants={mountainPlants} />
        )}

        {/* No Results */}
        {filteredPlants.length === 0 && searchQuery && (
          <div className="container py-24 text-center">
            <p className="text-2xl font-display text-muted-foreground mb-4">
              No plants found for "{searchQuery}"
            </p>
            <p className="text-muted-foreground">
              Try searching for "Monstera", "Snake Plant", or "Bougainvillea"
            </p>
          </div>
        )}
        
        {/* Plant Quiz */}
        <PlantQuiz />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
