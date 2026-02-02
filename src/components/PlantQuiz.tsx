import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { quizQuestions, plants } from '@/data/plants';
import { Plant } from '@/types';
import PlantCard from './PlantCard';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PlantQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Plant[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      const spaceAnswer = answers['space'] || answer;
      const careAnswer = answers['care'] || 'medium';
      
      let filtered = plants;
      
      // Filter by space/category
      if (spaceAnswer === 'indoor') {
        filtered = filtered.filter(p => p.category === 'indoor');
      } else if (spaceAnswer === 'outdoor') {
        filtered = filtered.filter(p => p.category === 'outdoor');
      } else {
        filtered = filtered.filter(p => p.category === 'mountain');
      }
      
      // If minimal care, prioritize hardy plants
      if (careAnswer === 'low') {
        filtered = filtered.filter(p => 
          p.name.includes('Snake') || 
          p.name.includes('ZZ') || 
          p.careGuide.watering.includes('2-3 weeks')
        );
        if (filtered.length === 0) filtered = plants.slice(0, 2);
      }
      
      setResults(filtered.slice(0, 3));
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults([]);
    setIsComplete(false);
  };

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-16 md:py-24 bg-gradient-ocean">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-4">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Plant Finder Quiz</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Find Your Perfect Plant
            </h2>
            <p className="text-lg text-muted-foreground font-display">ابحث عن نبتتك المثالية</p>
          </div>

          {!isComplete ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-leaf transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Question {currentStep + 1} of {quizQuestions.length}
                </p>
              </div>

              {/* Question Card */}
              <Card className="bg-card shadow-medium">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-center mb-2">
                    {currentQuestion.question}
                  </h3>
                  <p className="text-muted-foreground text-center mb-8">
                    {currentQuestion.questionAr}
                  </p>

                  <div className="grid gap-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                          "hover:border-primary hover:bg-primary/5",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                          answers[currentQuestion.id] === option.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card"
                        )}
                      >
                        <p className="font-medium">{option.label}</p>
                        <p className="text-sm text-muted-foreground">{option.labelAr}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Results */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf/20 text-leaf mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  We Found Your Perfect Matches!
                </h3>
                <p className="text-muted-foreground">
                  Based on your answers, here are our top recommendations
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {results.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" onClick={resetQuiz} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Take Quiz Again
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
