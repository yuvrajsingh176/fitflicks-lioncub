import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Activity, Brain, HeartHandshake, Music, ShieldCheck, Target, Trophy, Users } from "lucide-react";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

const leftReasons = [
  { icon: ShieldCheck, text: "Certified Trainers" },
  { icon: Brain, text: "Child Psychology Integrated Programs" },
  { icon: Music, text: "Music, Movement & Mindfulness" },
  { icon: Activity, text: "Multi‑sports sessions inspired by global best practices" },
];

const rightReasons = [
  { icon: HeartHandshake, text: "Safe, inclusive environment" },
  { icon: Target, text: "Quarterly Physical Fitness Report Card" },
  { icon: Trophy, text: "Monthly friendly matches" },
  { icon: Users, text: "Bond & Bloom – parent‑child sessions" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/60 to-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At Lion Cubs Fitness, a strong body builds a strong mind. We bring kids back to the basics — movement,
            imagination and joy. Sessions are collaborative, not competitive, helping children cheer for themselves and for each other.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="transition-all hover:-translate-y-0.5 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To build a generation of healthy, happy and active kids who grow up strong — inside and out.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:-translate-y-0.5 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where every child develops fitness habits early — with love, laughter and pride in their own strength.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
            <ul className="mt-6 space-y-4">
              {leftReasons.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 animate-fade-in">
                  <Icon className="mt-0.5 size-5 text-accent" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">What You Get</h3>
            <ul className="mt-6 space-y-4">
              {rightReasons.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 animate-fade-in">
                  <Icon className="mt-0.5 size-5 text-accent" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">Book Free Demo</Button>
          </a>
          <a href="tel:+919818387498">
            <Button variant="soft" size="lg">Call Now</Button>
          </a>
        </div>
      </div>
    </section>
  );
}