import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Dumbbell, Trophy, Users, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";

const activityItems = [
  {
    icon: <Dumbbell />,
    text: "Football • Basketball • Cricket • Tennis",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&crop=center",
    alt: "Various sports equipment"
  },
  {
    icon: <Sparkles />,
    text: "Rugby • Self-defense • Archery • Gymnastics (Basics)",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=200&fit=crop&crop=center",
    alt: "Martial arts and gymnastics training"
  },

];

const highlights = [
  {
    icon: <Trophy />,
    text: "Monthly Friendly Matches",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=200&fit=crop&crop=center",
    alt: "Children in friendly sports match"
  },
  {
    icon: <ShieldCheck />,
    text: "Quarterly Fitness Report Card",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=200&fit=crop&crop=center",
    alt: "Fitness progress tracking"
  },
];

export default function Highlights() {
  return (
    <section id="activities" className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Activities & Highlights</h2>
          <p className="mt-3 text-muted-foreground">
            Comprehensive sports training with special features designed for your child's growth
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 p-2">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Activities Offered</h3>
            <div className="space-y-4">
              {activityItems.map((a) => (
                <Card key={a.text} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex">
                    <div className="relative w-32 h-24 overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-accent mt-1">{a.icon}</div>
                        <p className="font-medium">{a.text}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Special Highlights</h3>
            <div className="space-y-4">
              {highlights.map((h) => (
                <Card key={h.text} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex">
                    <div className="relative w-32 h-24 overflow-hidden">
                      <img
                        src={h.image}
                        alt={h.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-accent mt-1">{h.icon}</div>
                        <p className="font-medium">{h.text}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
