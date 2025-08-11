import Image from "next/image";
import { Button } from "../../components/ui/button";
import { BadgeCheck, PhoneCall } from "lucide-react";
import CaraouselHero from "./CaraouselHero";
import Link from "next/link";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

const programs = [
  {
    name: "Yoga",
    image: '/yoga.avif',
    link: 'yoga'
  },
  {
    name: "Zumba",
    image: '/zumba.avif',
    link: 'zumba'
  },
  {
    name: "Table Tennis",
    image: '/tt.avif',
    link: 'tabletennis'
  },
  {
    name: "Children Indoor Games",
    image: '/children.avif',
    link: 'funzone'
  }
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent py-10 md:py-28 flex justify-center items-center"
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
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-4 mx-2">
            {programs.map((program) => (
              <Link
                href={program.link}
                key={program.name}
              >
                <Image
                  src={program.image}
                  alt={program.name}
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-[150px] h-[150px] shadow-lg"
                />
              </Link>
            ))}

          </div>


          {/* Carousel Column */}
          {/* <CaraouselHero /> */}
        </div>
      </div>
    </section>
  );
}
