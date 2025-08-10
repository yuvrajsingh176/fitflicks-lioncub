import Image from "next/image";
import { Button } from "../../components/ui/button";
import { BadgeCheck, PhoneCall } from "lucide-react";
import CaraouselHero from "./CaraouselHero";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent py-20 md:py-28 flex justify-center items-center"
    >
      {/* No background image, just gradient */}

      <div className="container relative z-10 flex flex-col items-center justify-center ">
        {/* Text Column */}
        <div className="text-center lg:text-left text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl">
            LionCubs Fitness
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-center md:text-2xl opacity-90">
            Evening Sports & Fitness Academy for ages 2.5–12. Build strength, stamina, discipline & joy!
          </p>
          <div className="mt-8  flex-wrap  flex items-center w-full justify-center gap-4">
            <div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button variant="hero" size="lg" className="font-semibold">
                  Book Free Demo
                </Button>
              </a>
            </div>
            <div>
              <a href="tel:+919818387498">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <PhoneCall className="mr-2" /> Call Now
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4 mx-2">
            {[
              "Safe & Structured",
              "Expert Trainers",
              "Age-Specific Programs",
              "Fun Meets Fitness!",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-md bg-white/10 backdrop-blur md:p-3 p-2 border border-white/20 min-w-0"
              >
                <BadgeCheck className="text-accent flex-shrink-0 size-4" />
                <span className="font-medium text-white text-xs sm:text-sm truncate">
                  {text}
                </span>
              </div>

            ))}
          </div>

          {/* Carousel Column */}
          {/* <CaraouselHero /> */}
        </div>
      </div>
    </section>
  );
}
