import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logooo.jpg";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "À propos" },
  { to: "/gallery", label: "Galerie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-primary">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg">Dr. Alouani Ahmed Salah</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Cabinet Dentaire
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/contact">
              <Phone className="mr-1 h-4 w-4 text-green-600" /> Prendre RDV
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{
                  className: "bg-muted text-foreground font-medium",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2" onClick={() => setOpen(false)}>
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" /> Prendre RDV
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
