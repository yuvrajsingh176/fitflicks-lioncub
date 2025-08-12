"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function ZumbaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative  h-screen md:w-screen w-full">
        <Image
          src="/zumba-hero.avif"
          alt="zumba Class"
          fill
          className="object-cover w-fit"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-3">Zumba: Dance Your Way to Fitness</h1>
          <p className="max-w-xl text-lg">
            High-energy, music-filled workouts that make you forget you’re exercising.
          </p>
        </div>
      </section>

      {/* Why Choose Our Zumba */}
      <section className=" py-16 px-2 w-full flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Zumba?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <div className=" rounded-xl bg-pink-50 :bg-neutral-900 shadow hover:shadow-lg transition w-full max-w-sm">
            <Image
              src="/zumba-fun.avif"
              alt="Fun Zumba Classes"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-[250px] mb-4"
            />
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold mb-2">Fun & Energetic Classes</h3>
              <p className="text-muted-foreground">
                Every session is a party! Our instructors keep the beats pumping and the moves exciting so you never get bored.
              </p>
            </div>
          </div>

          <div className=" rounded-xl bg-pink-50 :bg-neutral-900 shadow hover:shadow-lg transition w-full max-w-sm">
            <Image
              src="/zumba-calories.avif"
              alt="Burn Calories"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-[250px] mb-4"
            />
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold mb-2">Burn Calories & Tone Up</h3>
              <p className="text-muted-foreground">
                Zumba can burn up to 600 calories per class while improving your strength, flexibility, and stamina.
              </p>
            </div>
          </div>

          <div className=" rounded-xl bg-pink-50 :bg-neutral-900 shadow hover:shadow-lg transition w-full max-w-sm">
            <Image
              src="/zumba-community.avif"
              alt="Zumba Community"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-[250px] mb-4"
            />
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold mb-2">A Welcoming Community</h3>
              <p className="text-muted-foreground">
                Dance alongside supportive classmates and make fitness friends who’ll cheer you on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-pink-100 :bg-pink-900/20 py-12 flex justify-center items-center">
        <div className=" ">
          <h2 className="text-2xl font-bold text-center mb-8">
            What You’ll Get
          </h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              "High-energy dance workouts",
              "Easy-to-follow routines for all levels",
              "Music from around the world",
              "Full-body toning and cardio boost",
              "Positive, motivating environment",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-pink-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Zumba Party!</h2>
        <p className="mb-6 text-muted-foreground">
          Book your free demo class and experience the energy.
        </p>
        <a
          href="https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20Zumba%20class."
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            Book Free Demo
          </Button>
        </a>
      </section>
    </div>
  );
}
