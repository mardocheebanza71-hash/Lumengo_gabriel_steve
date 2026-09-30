import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/parcours")({
  head: () => ({
    meta: [
      { title: "Parcours — Gabriel Steve Lumengo" },
      {
        name: "description",
        content:
          "Chronologie du parcours de Gabriel Steve Lumengo : projets, études et écriture.",
      },
      { property: "og:title", content: "Parcours — Gabriel Steve Lumengo" },
      { property: "og:description", content: "Chronologie d'un parcours en construction." },
    ],
  }),
  component: Page,
});

const steps = [
  ["2022", "Premiers projets entrepreneuriaux", "Apprendre en construisant, sans filet."],
  ["2024", "Administration des affaires", "Structurer l'intuition par la méthode."],
  ["2025", "Écriture du premier ouvrage", "Mettre la pensée à l'épreuve de la page."],
  ["2026", "Plateforme éditoriale", "Documenter publiquement la construction."],
];

function Page() {
  return (
    <>
      <PageHeader
        index="05"
        label="PARCOURS"
        title="Chronologie."
        lead="Une suite d'étapes, pas une ligne droite."
      />
      <Section index="—" label="ÉTAPES">
        <div className="flex flex-col">
          {steps.map(([year, title, text]) => (
            <div
              key={year}
              className="grid gap-4 border-t border-border py-10 md:grid-cols-[minmax(0,8rem)_minmax(0,1fr)]"
            >
              <span className="eyebrow text-gold">{year}</span>
              <div className="min-w-0">
                <h3 className="display-md text-foreground">{title}</h3>
                <p className="body-lg mt-3 max-w-xl text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
