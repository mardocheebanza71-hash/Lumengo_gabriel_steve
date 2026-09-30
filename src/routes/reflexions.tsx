import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/reflexions")({
  head: () => ({
    meta: [
      { title: "Réflexions — Gabriel Steve Lumengo" },
      {
        name: "description",
        content:
          "Notes et essais sur la discipline, l'ambition et la construction de soi.",
      },
      { property: "og:title", content: "Réflexions — Gabriel Steve Lumengo" },
      { property: "og:description", content: "Notes et essais sur la construction de soi." },
    ],
  }),
  component: Page,
});

const notes = [
  ["001", "La patience est une stratégie", "Sur le temps long comme avantage compétitif."],
  ["002", "Écrire pour penser", "Pourquoi la page révèle les idées faibles."],
  ["003", "Construire sans public", "Le travail qui n'est pas encore vu compte double."],
];

function Page() {
  return (
    <>
      <PageHeader
        index="06"
        label="RÉFLEXIONS"
        title="Notes et essais."
        lead="Des textes courts, écrits en chemin."
      />
      <Section index="—" label="JOURNAL">
        <div className="flex flex-col">
          {notes.map(([n, t, d]) => (
            <article
              key={n}
              className="group grid gap-4 border-t border-border py-10 md:grid-cols-[minmax(0,6rem)_minmax(0,1fr)]"
            >
              <span className="eyebrow text-gold">{n}</span>
              <div className="min-w-0">
                <h3 className="display-md text-foreground transition-colors group-hover:text-gold">
                  {t}
                </h3>
                <p className="body-lg mt-3 max-w-xl text-base">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
