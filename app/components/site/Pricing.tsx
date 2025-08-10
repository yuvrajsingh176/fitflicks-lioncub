import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20I%20want%20to%20enroll.`;

const tiers = [
  {
    title: "Registration",
    price: "₹1,000",
    note: "Includes exclusive LionCubs Bib",
    cta: "Register",
  },
  {
    title: "Monthly",
    price: "₹3,500",
    note: "Pay as you go",
    cta: "Join Monthly",
  },
  {
    title: "Quarterly",
    price: "₹9,450",
    badge: "10% OFF",
    note: "Best to build routine",
    cta: "Join Quarterly",
    featured: true,
  },
  {
    title: "Half-Yearly",
    price: "₹17,850",
    badge: "15% OFF",
    note: "Max value",
    cta: "Join 6 Months",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Fee Structure</h2>
          <p className="mt-3 text-muted-foreground">Sibling Discount: extra 5% OFF</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <Card key={t.title} className={t.featured ? "ring-2 ring-accent" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{t.title}</CardTitle>
                  {t.badge && (
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {t.badge}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold">{t.price}</div>
                <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
              </CardContent>
              <CardFooter>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full">
                  <Button variant={t.featured ? "hero" : "soft"} className="w-full">{t.cta}</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
