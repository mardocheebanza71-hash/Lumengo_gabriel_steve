import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell grid gap-12 py-20 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display-md text-foreground">Un parcours en construction.</p>
          <p className="eyebrow mt-6">GABRIEL STEVE LUMENGO</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-gold">NAVIGATION</p>
          {[
            { label: "À propos", to: "/a-propos" },
            { label: "Mission & Vision", to: "/vision" },
            { label: "Piliers", to: "/piliers" },
            { label: "Parcours", to: "/parcours" },
            { label: "Réflexions", to: "/reflexions" },
            { label: "Contact", to: "/contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-gold">CONTACT</p>
          <p className="text-sm text-muted-foreground">
            Pour toute collaboration, conférence ou échange éditorial.
          </p>
          <Link to="/contact" className="link-underline w-fit text-sm text-foreground">
            Écrire →
          </Link>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-[0.7rem] tracking-[0.15em] text-muted-foreground md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} GABRIEL STEVE LUMENGO</span>
        <span>ENTREPRENEUR · AUTEUR · ÉTUDIANT</span>
      </div>
    </footer>
  );
}
