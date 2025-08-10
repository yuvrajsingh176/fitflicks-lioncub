import { Button } from "../../components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#activities", label: "Activities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

export default function Navbar() {
  return (
    <header className="sticky top-0 flex justify-center items-center z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="text-lg">LionCubs Fitness</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">Book Free Demo</Button>
          </a>
        </div>
        <button className="md:hidden p-2" aria-label="Open menu">
          <Menu />
        </button>
      </nav>
    </header>
  );
}
