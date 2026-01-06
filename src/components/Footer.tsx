import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-4">Maler Häfliger</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#uber-uns"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#dienstleistungen"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41792184809"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +41 79 218 4809
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@maler-hafliger.ch"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@maler-hafliger.ch
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Kirchgasse 74
                <br />
                3812 Wilderswil
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} Maler Häfliger.{" "}
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
