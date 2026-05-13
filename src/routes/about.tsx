import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Microscope, Users } from "lucide-react";
import portrait from "@/assets/dentist-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Dr. Amira Ben Salah" },
      {
        name: "description",
        content:
          "Découvrez le parcours et la philosophie du Dr. Amira Ben Salah, chirurgien-dentiste à Tunis.",
      },
      { property: "og:title", content: "À propos — Dr. Amira Ben Salah" },
      {
        property: "og:description",
        content: "Chirurgien-dentiste diplômée à Tunis.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Écoute & bienveillance",
    text: "Chaque patient est unique. Nous prenons le temps d'écouter et d'expliquer.",
  },
  {
    icon: Microscope,
    title: "Technologie de pointe",
    text: "Radiographie numérique, caméra intra-orale et stérilisation aux normes.",
  },
  {
    icon: GraduationCap,
    title: "Formation continue",
    text: "Mise à jour régulière des compétences pour les meilleurs traitements.",
  },
  {
    icon: Users,
    title: "Famille bienvenue",
    text: "Soins adaptés des plus petits aux seniors, dans un cadre rassurant.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">
              À propos
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl">
              Dr. Amira Ben Salah,
              <br />
              <span className="italic text-primary">chirurgien-dentiste</span>
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Diplômée de la Faculté de Médecine Dentaire de Monastir, le Dr.
                Ben Salah exerce depuis plus de 15 ans à Tunis. Spécialisée en
                dentisterie esthétique et implantologie, elle a complété sa
                formation par plusieurs diplômes universitaires en France.
              </p>
              <p>
                Sa philosophie : allier rigueur médicale et approche humaine
                pour offrir des soins durables, esthétiques et adaptés à chaque
                patient.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-50 blur-2xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <img
              src={portrait}
              alt="Dr. Amira Ben Salah, chirurgien-dentiste"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl">Nos valeurs</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
