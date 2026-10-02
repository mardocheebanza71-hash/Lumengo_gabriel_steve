import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logoLgs from "@/assets/logo-lgs.png";

const items = [
  { label: "À propos", href: "#a-propos" },
  { label: "Vision", href: "#vision" },
  { label: "Positionnement", href: "#positionnement" },
  { label: "Parcours", href: "#parcours" },
  { label: "Engagements", href: "#engagements" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 transition-all duration-300 sm:top-5 sm:px-6 lg:px-10">
      <div className="relative mx-auto w-full lg:max-w-[68rem]">
        <div className={`flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-all duration-300 sm:px-5 lg:grid lg:grid-cols-[auto_1fr_auto] ${scrolled ? "border-white/18 bg-[#1d1d1d]/72 shadow-[0_18px_50px_rgba(0,0,0,0.32)]" : "border-white/14 bg-[#1d1d1d]/48 shadow-[0_12px_38px_rgba(0,0,0,0.24)]"}`}>
          <Link to="/" className="flex items-center transition-opacity hover:opacity-85" onClick={closeMenu} aria-label="Accueil Lumengo Gabriel Steve">
            <img src={logoLgs} alt="LGS - Lumengo Gabriel Steve" className="h-7 w-auto object-contain invert sm:h-8" />
          </Link>

          <nav className="hidden items-center justify-self-center gap-6 lg:flex" aria-label="Navigation principale">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="font-sans text-sm font-medium text-white/72 transition-colors hover:text-white">{item.label}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink active:scale-[0.98]">Contact</a>
            <a href="#contact" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/16 bg-white/7 text-white transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink active:scale-[0.98]" aria-label="Contacter Gabriel Steve Lumengo"><Phone className="h-3.5 w-3.5 fill-current" /></a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href="#contact" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/16 text-white" aria-label="Contact"><Phone className="h-3.5 w-3.5 fill-current" /></a>
            <button type="button" onClick={() => setMobileOpen((value) => !value)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/16 text-white transition-colors hover:bg-white/10" aria-expanded={mobileOpen} aria-label="Ouvrir le menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-3xl border border-white/14 bg-[#1d1d1d]/82 px-6 pb-7 pt-6 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-4">
              {items.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="text-base font-medium text-white/75 hover:text-white">{item.label}</a>)}
              <div className="mt-4 flex flex-col gap-2 border-t border-white/12 pt-4">
                <a href="#contact" onClick={closeMenu} className="flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 py-2.5 text-sm font-medium text-white hover:bg-gold hover:text-ink"><Phone className="h-4 w-4 fill-current" /><span>Contact</span></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
