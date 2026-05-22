import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { services } from "@/lib/services-data";
import {
  ArrowRight,
  Phone,
  Award,
  Users,
  Clock,
  ShieldCheck,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Alouani Ahmed Salah — Cabinet Dentaire à Kasserine" },
      {
        name: "description",
        content:
          "Cabinet dentaire à Kasserine : soins, Hollywood Smile, blanchiment, implants et prothèses. Prenez rendez-vous avec Dr. Alouani Ahmed Salah.",
      },
      {
        property: "og:title",
        content: "Dr. Alouani Ahmed Salah — Cabinet Dentaire à Kasserine",
      },
      {
        property: "og:description",
        content: "Soins dentaires modernes à Kasserine. Prenez rendez-vous.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cabinet dentaire à Kasserine
            </div>
            <h1 className="text-4xl leading-[1.05] md:text-6xl">
              Un sourire en bonne santé,
              <br />
              <span className="italic text-primary">pour toute la vie.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Soins dentaires modernes, esthétiques et personnalisés. Notre
              cabinet vous accueille dans un environnement chaleureux avec un
              équipement de dernière génération.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Prendre rendez-vous{" "}
                  <ArrowRight className="ml-1 h-4 w-4 text-green-600" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+21677000000">
                  <Phone className="mr-1 h-4 w-4 text-green-600" /> +216 77 000
                  000
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400 "
                  />
                ))}
              </div>
              <span>+ de 1 200 patients satisfaits</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <img
              src={heroImage}
              alt="Cabinet dentaire moderne à Kasserine"
              width={1536}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { icon: Award, value: "15+", label: "Années d'expérience" },
            { icon: Users, value: "1 200+", label: "Patients suivis" },
            { icon: ShieldCheck, value: "100%", label: "Stérilisation" },
            { icon: Clock, value: "6j/7", label: "Disponibilité" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-2 font-serif text-3xl">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-primary">
            Nos services
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Une expertise complète pour votre santé bucco-dentaire
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/services">
              Voir tous les services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl md:text-4xl">
            Prêt à retrouver votre sourire ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Réservez votre première consultation. Nous vous accueillons avec
            attention et écoute.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+21677000000">Appeler maintenant</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
