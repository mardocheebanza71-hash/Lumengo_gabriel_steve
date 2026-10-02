import { createFileRoute } from "@tanstack/react-router";
import lumengoSuitBust from "@/assets/lumengo-suit-bust.png";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Steve Lumengo — Un parcours en construction" },
      {
        name: "description",
        content:
          "Entrepreneur, auteur et étudiant en Administration des affaires. Un manifeste personnel : un parcours en construction.",
      },
    ],
  }),
  component: Index,
});

const positioning = [
  { title: "ENTREPRENEUR", text: "Créer." },
  { title: "AUTEUR", text: "Réfléchir." },
  { title: "ÉTUDIANT", text: "Apprendre." },
];

const engagements = [
  ["ENTREPRENEURIAT", "Créer et construire."],
  ["LEADERSHIP", "Inspirer et guider."],
  ["DÉVELOPPEMENT PERSONNEL", "Apprendre et évoluer."],
  ["JEUNESSE & ENGAGEMENT CITOYEN", "S’engager et contribuer."],
  ["ÉCRITURE & RÉFLEXION", "Observer, questionner et transmettre."],
];

function Index() {
  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-card">
          <div className="hero-content-box">
            <div className="mb-6 flex items-center gap-2 reveal sm:mb-8">
              <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-normal text-white/85">Éveiller</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-normal text-white/85">Créer</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-normal text-white/85">Transmettre</span>
            </div>

            <h1 className="hero-execora-title reveal">LUMENGO<br />GABRIEL<br />STEVE</h1>

            <p className="hero-execora-subtitle reveal" style={{ animationDelay: "120ms" }}>
              On n’a jamais dit que ça allait être facile,<br className="hidden sm:block" /> mais personne n’a dit que ça allait aussi être impossible.
            </p>

            <div className="hero-cta-wrap reveal" style={{ animationDelay: "220ms" }}>
              <a href="#parcours" className="hero-execora-cta">
                <span>Suivre mon parcours</span>
                <span className="hero-cta-arrow-badge" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="hero-portrait-container">
            <img src={lumengoSuitBust} alt="Portrait de Gabriel Steve Lumengo en veste" width={920} height={950} className="hero-suit-img" loading="eager" />
          </div>

          <div className="hero-execora-badge reveal" style={{ animationDelay: "330ms" }}>
            <div className="badge-avatars" aria-hidden="true">
              <img className="badge-avatar-item" src={lumengoSuitBust} alt="" />
              <span className="badge-avatar-plus">+</span>
            </div>
            <span className="badge-stat">En mouvement.</span>
            <span className="badge-desc">Une trajectoire qui se construit, jour après jour.</span>
          </div>
        </div>
      </section>

      <Section id="a-propos" index="01" label="QUI EST GABRIEL STEVE LUMENGO ?">
        <p className="display-md mt-2 max-w-4xl italic text-foreground">
          “On n’a jamais dit que ça allait être facile,<br className="hidden md:block" /> mais personne n’a dit que ça allait aussi être impossible.”
        </p>
      </Section>

      <Section id="parcours" index="02" label="SON PARCOURS" title="Un parcours en construction.">
        <p className="body-lg mt-8 max-w-2xl">GABRIEL STEVE LUMENGO est un entrepreneur, auteur, étudiant en Administration des affaires.</p>
        <p className="body-lg mt-6 max-w-2xl">Son parcours se construit à la croisée de l’entrepreneuriat, de la réflexion et de l’engagement citoyen, avec une attention particulière portée au leadership et au développement de la jeunesse.</p>
      </Section>

      <Section id="positionnement" index="03" label="POSITIONNEMENT" title="Faire, penser, apprendre.">
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {positioning.map((item, index) => (
            <div key={item.title} className="bg-background p-8 md:p-10">
              <span className="eyebrow text-gold">0{index + 1}</span>
              <h3 className="eyebrow mt-8 text-foreground">{item.title}</h3>
              <p className="display-md mt-4 text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="mission" index="04" label="MISSION" title="ÉVEILLER · CRÉER · TRANSMETTRE">
        <p className="body-lg mt-8 max-w-2xl">Éveiller les consciences, créer des initiatives porteuses de sens et transmettre des idées, des expériences et des valeurs capables d’inspirer l’action.</p>
      </Section>

      <Section id="vision" index="05" label="VISION" title="CONSTRUIRE UN PARCOURS QUI DÉPASSE MA PROPRE RÉUSSITE.">
        <p className="body-lg mt-8 max-w-2xl">Construire une trajectoire dont la valeur ne se mesure pas uniquement à la réussite personnelle, mais également à la capacité de contribuer, d’inspirer et de créer un impact durable autour de soi.</p>
      </Section>

      <Section id="engagements" index="06" label="DOMAINES D’ENGAGEMENT" title="Là où l’action prend forme.">
        <div className="mt-12 flex flex-col">
          {engagements.map(([title, text], index) => (
            <div key={title} className="grid gap-4 border-t border-border py-7 md:grid-cols-[minmax(0,4rem)_minmax(0,1fr)_minmax(0,1fr)] md:gap-6">
              <span className="eyebrow text-gold">0{index + 1}</span>
              <h3 className="eyebrow text-foreground">{title}</h3>
              <p className="text-base text-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" index="07" label="SUIVRE MON PARCOURS" title="SUIVRE MON PARCOURS.">
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
          <a href="https://wa.me/243824095627" className="link-underline text-sm text-gold">WhatsApp →</a>
          <a href="mailto:stevelumengo@gmail.com" className="link-underline text-sm text-gold">Email →</a>
          <a href="https://www.instagram.com/gabriel_steve_lumengo?stkn=ZGM3cTRkd3M4amxw" target="_blank" rel="noreferrer" className="link-underline text-sm text-gold">Instagram →</a>
          <a href="https://www.linkedin.com/in/gabriel-steve-lumengo-977952283?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="link-underline text-sm text-gold">LinkedIn →</a>
        </div>
      </Section>
    </>
  );
}
