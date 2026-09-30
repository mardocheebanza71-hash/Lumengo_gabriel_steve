import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gabriel Steve Lumengo" },
      {
        name: "description",
        content:
          "Collaborations, interventions et échanges éditoriaux avec Gabriel Steve Lumengo.",
      },
      { property: "og:title", content: "Contact — Gabriel Steve Lumengo" },
      { property: "og:description", content: "Collaborations et échanges éditoriaux." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        index="08"
        label="CONTACT"
        title="Rester en contact."
        lead="Collaborations, conférences, échanges éditoriaux."
      />
      <Section index="—" label="ÉCRIRE">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="body-lg">
            Les coordonnées officielles ne sont pas encore renseignées. Indique-moi l'adresse
            e-mail et les réseaux à afficher, et je les intègre ici.
          </p>
          <div className="flex flex-col gap-4 border-t border-border pt-6">
            <p className="eyebrow text-gold">À VENIR</p>
            <span className="text-base text-foreground/85">E-mail</span>
            <span className="text-base text-foreground/85">LinkedIn</span>
            <span className="text-base text-foreground/85">Instagram</span>
          </div>
        </div>
      </Section>
    </>
  );
}
