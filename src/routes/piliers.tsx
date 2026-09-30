import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/piliers")({
  head: () => ({
    meta: [
      { title: "Piliers — Gabriel Steve Lumengo" },
      {
        name: "description",
        content:
          "Discipline, entrepreneuriat, écriture et transmission : les quatre piliers du parcours de Gabriel Steve Lumengo.",
      },
      { property: "og:title", content: "Piliers — Gabriel Steve Lumengo" },
      {
        property: "og:description",
        content: "Discipline, entrepreneuriat, écriture, transmission.",
      },
    ],
  }),
  component: Page,
});

const piliers = [
  ["01", "Discipline", "La constance avant l'inspiration. Bâtir jour après jour."],
  ["02", "Entrepreneuriat", "Créer de la valeur là où d'autres voient une contrainte."],
  ["03", "Écriture", "Penser clairement, écrire pour laisser une trace."],
  ["04", "Transmission", "Ce qui est appris n'a de sens que partagé."],
];

function Page() {
  return (
    <>
      <PageHeader
        index="04"
        label="PILIERS"
        title="Quatre fondations."
        lead="Les principes qui structurent chaque décision."
      />
      <Section index="—" label="FONDATIONS">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {piliers.map(([n, t, d]) => (
            <div key={n} className="bg-background p-8 md:p-12">
              <span className="eyebrow text-gold">{n}</span>
              <h3 className="display-md mt-5 text-foreground">{t}</h3>
              <p className="body-lg mt-4 text-base">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
