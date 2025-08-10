import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, MapPin, PhoneCall, Instagram } from "lucide-react";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="text-muted-foreground">
                Join the pride today! Build a future full of movement, smiles and strength — one cub at a time.
              </p>
              <div className="flex items-center gap-3"><PhoneCall className="text-accent" /> <span className="font-semibold">Call/WhatsApp:</span> +91 98183 87498</div>
              <div className="flex items-center gap-3"><Mail className="text-accent" /> <span className="font-semibold">Email:</span> <a className="underline" href="mailto:lioncubsfitness@gmail.com">lioncubsfitness@gmail.com</a></div>
              <div className="flex items-start gap-3"><MapPin className="mt-1 text-accent" /> <span>
                <span className="font-semibold">Locations:</span> Jagriti Enclave (Delhi) • Palam Vihar (Gurugram)
              </span></div>
              <div className="flex items-center gap-3"><Instagram className="text-accent" /> <span className="font-semibold">Instagram:</span> <a className="underline" href="https://instagram.com/lioncubsfitness" target="_blank" rel="noreferrer">@lioncubsfitness</a></div>
              <div className="pt-2">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Button variant="hero">Book Free Demo</Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
            <CardHeader>
              <CardTitle>Taglines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Get Your Cub Moving! Book a Free Trial",
                "Start Roaring with Confidence – Join LionCubs Today!",
                "New Camp Alert: Limited Spots — Enroll Now!",
                "Small Steps, Big Roars — Join Our Fitness Family!",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-2 size-2 rounded-sm bg-accent" />
                  <p className="font-medium">{t}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
