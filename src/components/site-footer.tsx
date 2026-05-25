import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-xl font-semibold">
              Dr. Alouani Ahmed Salah
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Chirurgien-dentiste à Kasserine spécialisé en esthétique dentaire
              et implantologie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="transition hover:text-primary">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition hover:text-primary">
                  À propos
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="transition hover:text-primary">
                  Galerie
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />

                <span>
                  Centre Commercial Al Baraka
                  <br />
                  Kasserine
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />

                <a
                  href="tel:+21677000000"
                  className="transition hover:text-primary"
                >
                  +216 77 000 000
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />

                <a
                  href="mailto:contact@cabinet-alouani.tn"
                  className="transition hover:text-primary"
                >
                  contact@cabinet-alouani.tn
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Horaires
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Lun – Ven : 9h – 19h</span>
              </li>

              <li className="pl-6">Sam : 9h – 14h</li>
              <li className="pl-6">Dim : Urgences</li>
            </ul>
          </div>
        </div>

        {/* Social Icons Centered */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/dentiste.77/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-background p-3 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <FaInstagram className="h-4 w-4" />
          </a>

          <a
            href="https://www.facebook.com/p/Cabinet-dentaire-Dr-Alouani-Ahmed-Salah-100092435431474/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-background p-3 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <FaFacebookF className="h-4 w-4" />
          </a>

          <a
            href="https://wa.me/21677000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-background p-3 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t border-border/50 pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cabinet Dr. Alouani Ahmed Salah. Tous
          droits réservés.
        </div>
      </div>
    </footer>
  );
}
