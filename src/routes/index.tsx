import { createFileRoute, Link } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Steve Lumengo — Un parcours en construction" },
      {
        name: "description",
        content:
          "Entrepreneur, auteur et étudiant en administration des affaires. Un manifeste personnel : un parcours en construction.",
      },
      { property: "og:title", content: "Gabriel Steve Lumengo — Un parcours en construction" },
      {
        property: "og:description",
        content: "Entrepreneur · Auteur · Étudiant en administration des affaires.",
      },
    ],
  }),
  component: Index,
});

const piliers = [
  { n: "01", t: "Discipline", d: "La constance avant l'inspiration. Bâtir jour après jour." },
  { n: "02", t: "Entrepreneuriat", d: "Créer de la valeur là où d'autres voient une contrainte." },
  { n: "03", t: "Écriture", d: "Penser clairement, écrire pour laisser une trace." },
  { n: "04", t: "Transmission", d: "Ce qui est appris n'a de sens que partagé." },
];

function Index() {
  return (
    <>
      <section className="shell grid items-end gap-12 pb-24 pt-40 md:pt-52 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div className="min-w-0">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-gold">01</span>
            <span className="rule max-w-20" />
            <span className="eyebrow">ACCUEIL</span>
          </div>
          <h1 className="display-xl reveal mt-10 text-foreground">
            Un parcours
            <br />
            en <em className="font-normal italic text-gold">construction</em>.
          </h1>
          <p className="body-lg mt-10 max-w-xl">
            Gabriel Steve Lumengo — entrepreneur, auteur et étudiant en administration des
            affaires. Un espace de pensée, de méthode et de construction personnelle.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link
              to="/a-propos"
              className="eyebrow border border-border px-7 py-4 text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              DÉCOUVRIR LE PARCOURS →
            </Link>
            <Link to="/reflexions" className="link-underline text-sm text-muted-foreground">
              Lire les réflexions
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroPortrait}
            alt="Portrait éditorial de Gabriel Steve Lumengo"
            width={1280}
            height={1600}
            className="w-full object-cover grayscale-[35%]"
          />
          <p className="eyebrow mt-4">ENTREPRENEUR · AUTEUR · ÉTUDIANT</p>
        </div>
      </section>

      <Section index="02" label="À PROPOS" title="Bâtir avant d'être vu.">
        <p className="body-lg mt-8 max-w-2xl">
          Je documente une trajectoire en cours : les décisions, les échecs utiles et la méthode
          qui se dessine entre les études, l'écriture et l'entreprise.
        </p>
        <Link to="/a-propos" className="link-underline mt-10 inline-block text-sm text-gold">
          Lire la suite →
        </Link>
      </Section>

      <Section index="03" label="MISSION & VISION" title="Une ambition longue.">
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-gold">MISSION</p>
            <p className="body-lg mt-4">
              Transformer la discipline personnelle en projets durables, et rendre visible le
              travail qui précède le résultat.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-gold">VISION</p>
            <p className="body-lg mt-4">
              Une génération qui construit avec rigueur, lucidité et ambition — sans raccourci.
            </p>
          </div>
        </div>
      </Section>

      <Section index="04" label="PILIERS" title="Quatre fondations.">
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {piliers.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10">
              <span className="eyebrow text-gold">{p.n}</span>
              <h3 className="display-md mt-5 text-foreground">{p.t}</h3>
              <p className="body-lg mt-3 text-base">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="05" label="PARCOURS" title="Chronologie.">
        <div className="mt-12 flex flex-col">
          {[
            ["2022", "Premiers projets entrepreneuriaux"],
            ["2024", "Entrée en administration des affaires"],
            ["2025", "Écriture du premier ouvrage"],
            ["2026", "Construction d'une plateforme éditoriale"],
          ].map(([year, text]) => (
            <div
              key={year}
              className="grid grid-cols-[minmax(0,5rem)_minmax(0,1fr)] gap-6 border-t border-border py-7"
            >
              <span className="eyebrow text-gold">{year}</span>
              <span className="text-base text-foreground/85">{text}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section index="06" label="RÉFLEXIONS" title="Notes et essais.">
        <p className="body-lg mt-8 max-w-2xl">
          Des textes courts sur la discipline, l'ambition et la construction de soi.
        </p>
        <Link to="/reflexions" className="link-underline mt-10 inline-block text-sm text-gold">
          Entrer dans le journal →
        </Link>
      </Section>

      <Section index="07" label="PROJETS" title="Travaux en cours.">
        <p className="body-lg mt-8 max-w-2xl">
          Une sélection de projets, publications et initiatives — bientôt détaillée.
        </p>
      </Section>

      <Section index="08" label="CONTACT" title="Rester en contact.">
        <p className="body-lg mt-8 max-w-2xl">
          Collaborations, interventions, échanges éditoriaux.
        </p>
        <Link
          to="/contact"
          className="eyebrow mt-10 inline-block border border-border px-7 py-4 text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          SUIVRE →
        </Link>
      </Section>
    </>
  );
}
