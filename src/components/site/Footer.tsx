export function Footer() {
  return (
    <footer className="scroll-reveal border-t border-border" data-scroll-reveal>
      <div className="shell grid gap-12 py-20 md:grid-cols-[1.2fr_1fr_1fr]" data-reveal-item>
        <div><p className="display-md text-foreground">Un parcours en construction.</p><p className="eyebrow mt-6">GABRIEL STEVE LUMENGO</p></div>
        <div className="flex flex-col gap-3"><p className="eyebrow text-gold">NAVIGATION</p>{[
          ["À propos", "#a-propos"], ["Parcours", "#parcours"], ["Positionnement", "#positionnement"], ["Mission", "#mission"], ["Vision", "#vision"], ["Engagements", "#engagements"],
        ].map(([label, href]) => <a key={href} href={href} className="link-underline w-fit text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}</div>
        <div className="flex flex-col gap-3"><p className="eyebrow text-gold">CONTACT</p><p className="text-sm text-muted-foreground">Pour toute collaboration ou échange éditorial.</p><a href="mailto:stevelumengo@gmail.com" className="link-underline w-fit text-sm text-foreground">Écrire →</a></div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-[0.7rem] tracking-[0.15em] text-muted-foreground md:flex-row md:justify-between" data-reveal-item><span>© {new Date().getFullYear()} GABRIEL STEVE LUMENGO</span><span>ENTREPRENEUR · AUTEUR · ÉTUDIANT</span></div>
    </footer>
  );
}
