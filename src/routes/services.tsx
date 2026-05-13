import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services dentaires — Cabinet Dr. Ben Salah" },
      {
        name: "description",
        content:
          "Découvrez tous nos soins : implants, orthodontie, blanchiment, urgences et plus à Tunis.",
      },
      {
        property: "og:title",
        content: "Services dentaires — Cabinet Dr. Ben Salah",
      },
      {
        property: "og:description",
        content: "Tous nos soins dentaires à Tunis.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary">
            Nos services
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl">
            Tous nos soins dentaires
          </h1>
          <p className="mt-4 text-muted-foreground">
            Du soin de routine aux interventions les plus pointues, notre
            cabinet propose une prise en charge globale et personnalisée.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/contact">
              Prendre rendez-vous <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
