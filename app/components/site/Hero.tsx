import { Button } from "../../components/ui/button";
import { BadgeCheck, PhoneCall } from "lucide-react";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent py-20 md:py-28 flex justify-center items-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-black/20">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center" 
          alt="Kids playing sports background" 
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left text-primary-foreground">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              LionCubs Fitness
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl opacity-90">
              Evening Sports & Fitness Academy for ages 2.5–12. Build strength, stamina, discipline & joy!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="font-semibold">
                  Book Free Demo
                </Button>
              </a>
              <a href="tel:+919818387498">
                <Button variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <PhoneCall className="mr-2" /> Call Now
                </Button>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {[
                "Safe & Structured",
                "Expert Trainers", 
                "Age-Specific Programs",
                "Fun Meets Fitness!",
              ].map((text) => (
                <div key={text} className="flex items-center justify-center gap-2 rounded-md bg-white/10 backdrop-blur px-3 py-2 border border-white/20">
                  <BadgeCheck className="text-accent size-4" />
                  <span className="font-medium text-white text-xs sm:text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=400&fit=crop&crop=center" 
                alt="Children exercising and playing sports" 
                className="h-[400px] w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
