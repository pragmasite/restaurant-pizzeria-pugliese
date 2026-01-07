import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Chez Enzo
          </span>
          <span className={`text-xs tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#a-propos" className={`text-sm font-medium transition ${isScrolled ? "" : "text-white/90"}`}>
            {t.nav.about}
          </a>
          <a href="#services" className={`text-sm font-medium transition ${isScrolled ? "" : "text-white/90"}`}>
            {t.nav.services}
          </a>
          <a href="#galerie" className={`text-sm font-medium transition ${isScrolled ? "" : "text-white/90"}`}>
            {t.nav.gallery}
          </a>
          <a href="#horaires" className={`text-sm font-medium transition ${isScrolled ? "" : "text-white/90"}`}>
            {t.nav.hours}
          </a>
          <a href="#contact" className={`text-sm font-medium transition ${isScrolled ? "" : "text-white/90"}`}>
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link to={otherLangPath} className={`flex items-center gap-1.5 text-sm font-medium ${isScrolled ? "" : "text-white/90"}`}>
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild className="ml-4">
            <a href="tel:+41324227700">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#a-propos" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#services" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#galerie" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.gallery}
            </a>
            <a href="#horaires" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.hours}
            </a>
            <a href="#contact" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.contact}
            </a>
            <Link to={otherLangPath} className="flex items-center gap-1.5 text-sm font-medium">
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full">
              <a href="tel:+41324227700">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
