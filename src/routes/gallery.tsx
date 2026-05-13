import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Star } from "lucide-react";

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
  {
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900",
    alt: "Salle de soins moderne",
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900",
    alt: "Équipement dentaire",
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900",
    alt: "Salle d'attente",
  },
  {
    url: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900",
    alt: "Consultation",
  },
  {
    url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900",
    alt: "Stérilisation",
  },
  {
    url: "https://images.unsplash.com/photo-1551192317-d2f7acedd25b?w=900",
    alt: "Sourire",
  },
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
          {images.map((img) => (
            <div key={img.url} className="overflow-hidden rounded-2xl">
              <img
                src={img.url}
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
