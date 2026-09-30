import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  { label: "À PROPOS", to: "/a-propos" },
  { label: "VISION", to: "/vision" },
  { label: "PILIERS", to: "/piliers" },
  { label: "PARCOURS", to: "/parcours" },
  { label: "RÉFLEXIONS", to: "/reflexions" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-[2px]"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-5">
        <Link
          to="/"
          className="min-w-0 truncate font-sans text-[0.7rem] tracking-[0.3em] text-foreground"
          onClick={() => setOpen(false)}
        >
          GABRIEL STEVE LUMENGO
        </Link>

        <nav className="hidden shrink-0 items-center gap-10 lg:flex">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="eyebrow link-underline text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="eyebrow border border-border px-5 py-2.5 text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            SUIVRE →
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="eyebrow shrink-0 text-foreground lg:hidden"
          aria-expanded={open}
        >
          {open ? "FERMER" : "MENU"}
        </button>
      </div>

      {open && (
        <div className="shell flex flex-col gap-5 border-t border-border bg-background pb-10 pt-8 lg:hidden">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={() => setOpen(false)}
              className="display-md text-foreground"
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="eyebrow mt-4 border border-border px-5 py-3 text-center text-foreground"
          >
            SUIVRE →
          </Link>
        </div>
      )}
    </header>
  );
}
