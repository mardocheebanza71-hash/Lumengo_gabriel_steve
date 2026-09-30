import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Gabriel Steve Lumengo" },
      {
        name: "description",
        content:
          "Entrepreneur, auteur et étudiant en administration des affaires : le récit d'un parcours en construction.",
      },
      { property: "og:title", content: "À propos — Gabriel Steve Lumengo" },
      {
        property: "og:description",
        content: "Le récit d'un parcours en construction.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        index="02"
        label="À PROPOS"
        title="Bâtir avant d'être vu."
        lead="Je ne présente pas un aboutissement, mais une trajectoire : ce qui se construit, se corrige et se répète."
      />
      <Section index="—" label="RÉCIT">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="body-lg">
            Entre les études en administration des affaires, l'écriture et les premiers projets
            entrepreneuriaux, je cherche une même chose : une méthode. Comprendre comment une
            idée devient une structure, et comment une structure tient dans le temps.
          </p>
          <p className="body-lg">
            Ce site est un carnet public. Il rassemble les principes que j'applique, les textes
            que j'écris et les projets que je construis — sans mise en scène, avec exigence.
          </p>
        </div>
      </Section>
    </>
  );
}
