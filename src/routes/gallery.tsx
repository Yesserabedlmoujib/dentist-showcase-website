import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Star } from "lucide-react";

import dentist1 from "@/assets/dentist1.jpg";
import mouth from "@/assets/mouth.jpg";
import mouth1 from "@/assets/mouth1.jpg";
import tools12 from "@/assets/tools12.jpg";
import material from "@/assets/material.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerie & témoignages — Cabinet Dr. Ben Salah" },
      {
        name: "description",
        content:
          "Découvrez notre cabinet et les témoignages de nos patients à Tunis.",
      },
      { property: "og:title", content: "Galerie & témoignages" },
      {
        property: "og:description",
        content: "Notre cabinet en images et avis patients.",
      },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: dentist1, alt: "Salle de soins moderne" },
  { src: mouth, alt: "Équipement dentaire" },
  { src: mouth1, alt: "Salle d'attente" },
  { src: tools12, alt: "Consultation" },
  { src: material, alt: "Sourire" },
];

const testimonials = [
  {
    name: "Sonia M.",
    text: "Une équipe à l'écoute et très professionnelle. Les soins sont indolores et le résultat parfait.",
  },
  {
    name: "Karim B.",
    text: "J'ai posé deux implants chez Dr. Ben Salah. Tout s'est très bien passé, je recommande vivement.",
  },
  {
    name: "Inès T.",
    text: "Cabinet moderne et hygiène irréprochable. Mes enfants n'ont plus peur d'aller chez le dentiste !",
  },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary">
            Galerie
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl">Notre cabinet en images</h1>
          <p className="mt-4 text-muted-foreground">
            Un espace pensé pour votre confort et votre sécurité.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl md:text-4xl">
            Ils nous font confiance
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-muted-foreground">
                  "{t.text}"
                </p>
                <div className="mt-4 text-sm font-medium">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
