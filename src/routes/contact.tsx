import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Rendez-vous — Cabinet Dr. Alouani Ahmed Salah" },
      { name: "description", content: "Prenez rendez-vous au cabinet Dr. Alouani Ahmed Salah à Kasserine. Adresse, téléphone, horaires." },
      { property: "og:title", content: "Contact & Rendez-vous" },
      { property: "og:description", content: "Réservez votre consultation à Kasserine." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Demande envoyée !", {
        description: "Nous vous recontacterons sous 24h pour confirmer votre RDV.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary">Contact</div>
          <h1 className="mt-3 text-4xl md:text-5xl">Prenez rendez-vous</h1>
          <p className="mt-4 text-muted-foreground">
            Remplissez le formulaire ou appelez-nous directement. Nous
            répondons sous 24h.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" name="name" required placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+216 ..." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="vous@example.com" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Date souhaitée</Label>
                  <Input id="date" name="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Motif</Label>
                  <Input id="reason" name="reason" placeholder="Consultation, urgence..." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Décrivez brièvement votre demande" />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Envoi..." : "Envoyer ma demande"}
              </Button>
            </form>
          </div>

          <aside className="space-y-4 md:col-span-2">
            <InfoCard icon={MapPin} title="Adresse">
              Centre Commercial Al Baraka<br />3ème étage, Kasserine, Tunisie
            </InfoCard>
            <InfoCard icon={Phone} title="Téléphone">
              <a href="tel:+21677000000" className="hover:text-primary">+216 77 000 000</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href="mailto:contact@cabinet-alouani.tn" className="hover:text-primary">
                contact@cabinet-alouani.tn
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Horaires">
              Lun – Ven : 9h – 19h<br />
              Samedi : 9h – 14h<br />
              Dimanche : Urgences uniquement
            </InfoCard>
          </aside>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Localisation du cabinet"
            src="https://www.openstreetmap.org/export/embed.html?bbox=8.81%2C35.15%2C8.86%2C35.18&layer=mapnik&marker=35.1675%2C8.8363"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
