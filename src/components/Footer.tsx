import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const Footer = () => {
  const { t, otherLang, otherLangPath } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Chez Enzo</h3>
            <p className="text-background/80 text-sm">{t.footer.tagline}</p>
            <p className="text-background/70 text-xs mt-3">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#a-propos" className="hover:text-background transition">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-background transition">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-background transition">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="tel:+41324227700" className="hover:text-background transition">
                  +41 32 422 77 00
                </a>
              </li>
              <li>
                <a href="mailto:restaurant.pugliese.vb@gmail.com" className="hover:text-background transition break-all">
                  restaurant.pugliese.vb@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.facebook.com/RestaurantPugliese"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition text-sm"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Language & Hours */}
          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <div className="space-y-3 text-sm text-background/80">
              <p>
                <strong>Route de la Communance 12</strong><br />
                2800 Délémont, CH
              </p>
              <Link
                to={otherLangPath}
                className="flex items-center gap-2 hover:text-background transition w-fit"
              >
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© 2025 Chez Enzo. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
