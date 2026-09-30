import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Mission & Vision — Gabriel Steve Lumengo" },
      {
        name: "description",
        content:
          "La mission et la vision de Gabriel Steve Lumengo : transformer la discipline personnelle en projets durables.",
      },
      { property: "og:title", content: "Mission & Vision — Gabriel Steve Lumengo" },
      {
        property: "og:description",
        content: "Transformer la discipline personnelle en projets durables.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        index="03"
        label="MISSION & VISION"
        title="Une ambition longue."
        lead="Construire lentement ce qui doit durer, et documenter le chemin."
      />
      <Section index="—" label="MANIFESTE">
        <div className="flex flex-col">
          {[
            ["Mission", "Rendre visible le travail qui précède le résultat."],
            ["Vision", "Une génération qui bâtit avec rigueur et lucidité."],
            ["Méthode", "Répéter, mesurer, corriger. Sans raccourci."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="grid gap-4 border-t border-border py-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
            >
              <h3 className="display-md text-foreground">{t}</h3>
              <p className="body-lg max-w-2xl">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
