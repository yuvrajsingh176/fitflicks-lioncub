"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function YogaPage() {
    return (
        <div className="bg-white ">
            {/* Hero Section */}
            <section className="relative  h-screen md:w-screen w-full">
                <Image
                    src="/yoga-hero.avif"
                    alt="Yoga Class"
                    fill
                    className="object-cover w-fit"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl font-bold mb-3">Yoga for Mind & Body</h1>
                    <p className="max-w-xl text-lg">
                        Experience the balance of body, mind, and soul with our certified
                        yoga programs.
                    </p>
                </div>
            </section>

            {/* About Our Yoga */}
            <div className="w-full py-16 px-2  flex flex-col">
                <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    <div className="p-6 rounded-xl bg-gray-100 shadow hover:shadow-lg transition w-full max-w-sm">
                        <Image
                            src="/yoga-class.jpg"
                            alt="Yoga Classes"
                            width={250}
                            height={250}
                            className="rounded-lg object-cover w-full h-[250px] mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Yoga Classes</h3>
                        <p className="text-muted-foreground">
                            Join our daily yoga sessions designed for beginners to advanced
                            practitioners, focusing on flexibility, strength, and inner
                            peace.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-100 shadow hover:shadow-lg transition w-full max-w-sm">
                        <Image
                            src="/yoga-certification.jpg"
                            alt="Yoga Certification"
                            width={400}
                            height={250}
                            className="rounded-lg object-cover w-full h-[250px] mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Certification</h3>
                        <p className="text-muted-foreground">
                            Get certified by experienced yoga masters. Our programs are
                            internationally recognized, ensuring quality and authenticity.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-100 shadow hover:shadow-lg transition w-full max-w-sm">
                        <Image
                            src="/yoga-teachers.jpg"
                            alt="Experienced Teachers"
                            width={400}
                            height={250}
                            className="rounded-lg object-cover w-full h-[250px] mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Experienced Teachers</h3>
                        <p className="text-muted-foreground">
                            Learn from certified and highly knowledgeable instructors with
                            years of teaching experience and a passion for yoga.
                        </p>
                    </div>
                </div>
            </div>


            {/* Features List */}
            <section className="bg-green-50 py-12">
                <div className="container">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        What You’ll Get
                    </h2>
                    <div className="max-w-3xl mx-auto grid gap-4 px-4">
                        {[
                            "Daily yoga sessions for all levels",
                            "Certification upon completion",
                            "Personal guidance from expert instructors",
                            "Focus on health, posture, and breathing",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle className="text-green-600 flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Start Your Yoga Journey Today</h2>
                <p className="mb-6 text-muted-foreground">
                    Book your free demo class and feel the transformation.
                </p>
                <a
                    href="https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20Yoga%20class."
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                        Book Free Demo
                    </Button>
                </a>
            </section>
        </div>
    );
}
