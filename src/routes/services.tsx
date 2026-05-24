import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye } from "lucide-react";
import { useState } from "react";

import blanchiment from "@/assets/blanchiment.jpg";
import chirurgie from "@/assets/chirurgie-buccale.jpg";
import pediatrie from "@/assets/Dentisterie-pédiatrique.jpg";
import implantologie from "@/assets/implantologie.jpg";
import orthodontie from "@/assets/orthodontie.jpg";
import protheses from "@/assets/protheses-couronnes.jpg";
import soins from "@/assets/soins-conservateurs.jpg";
import urgences from "@/assets/Urgences-dentaires.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services dentaires — Cabinet Dr. Alouani Ahmed Salah" },
      {
        name: "description",
        content:
          "Découvrez tous nos soins : Hollywood Smile, blanchiment, implants, prothèses et urgences à Kasserine.",
      },
      {
        property: "og:title",
        content: "Services dentaires — Cabinet Dr. Alouani",
      },
      {
        property: "og:description",
        content: "Tous nos soins dentaires à Kasserine.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceImages: Record<string, string> = {
  "Urgences dentaires": urgences,
  "Chirurgie buccale": chirurgie,
  "Dentisterie pédiatrique": pediatrie,
  Orthodontie: orthodontie,
  Implantologie: implantologie,
  "Prothèses & couronnes": protheses,
  "Soins conservateurs": soins,
  "Blanchiment dentaire": blanchiment,
};

function ServicesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)] relative"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">{s.title}</h3>

                  <button
                    onClick={() => setSelectedImage(serviceImages[s.title])}
                    className="p-2 rounded-lg hover:bg-muted transition"
                  >
                    <Eye className="h-5 w-5 text-primary" />
                  </button>
                </div>

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
              Prendre rendez-vous
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
          />
        </div>
      )}
    </SiteLayout>
  );
}
