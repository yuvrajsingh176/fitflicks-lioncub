import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const programs = [
  {
    title: "Mini Cubs (2.5–4)",
    desc: "Playful movement & gross-motor development. Perfect for toddlers and preschoolers.",
    items: ["Animal walks", "Soft obstacle courses", "Freeze dance & games", "Multi-sport play"],
    image: "/minicubs.webp",
    alt: "Toddlers playing and exercising"
  },
  {
    title: "Junior Cubs (5–7)",
    desc: "Agility, coordination and team-based challenges for curious movers.",
    items: ["Recreational sports", "Multi-sport play", "Strength games"],
    image: "/juniorcubs.webp",
    alt: "Children aged 5-7 doing sports activities"
  },
  {
    title: "Super Cubs (8–12)",
    desc: "Level up with stamina, speed and mental toughness — fun stays alive!",
    items: ["Cardio circuits (HIIT for kids)", "Multi-sport play", "Reaction drills", "Team missions"],
    image: "/supercubs.webp",
    alt: "Older children in sports training"
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 px-2">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Programs</h2>
          <p className="mt-3 text-muted-foreground">
            We divide our programs by age and energy level to match every child's development stage.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.title} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5">
              <div className="relative h-48 w-full flex justify-center items-center bg-black overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="  transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>



              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-sm bg-accent" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
