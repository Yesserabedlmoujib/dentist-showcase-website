import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-serif text-xl">Dr. Amira Ben Salah</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Chirurgien-dentiste à Tunis. Soins dentaires modernes et
              personnalisés pour toute la famille.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-foreground">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>15 Avenue Habib Bourguiba, Tunis 1000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+21671234567" className="hover:text-foreground">
                  +216 71 234 567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:contact@cabinet-bensalah.tn"
                  className="hover:text-foreground"
                >
                  contact@cabinet-bensalah.tn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Horaires</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Lun – Ven : 9h – 19h</span>
              </li>
              <li className="pl-6">Sam : 9h – 14h</li>
              <li className="pl-6">Dim : Urgences</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cabinet Dr. Ben Salah. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
