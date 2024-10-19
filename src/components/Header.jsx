import { useEffect, useState } from "react";
import { BsList, BsLinkedin } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";  // Verwende HashLink für Abschnitte auf der Hauptseite

export const Header = ({ onToggleMenu }) => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? "sticky top-0 z-40 shadow-lg" : "relative"} bg-primary-500 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center gap-10 px-2 py-4 sm:px-4">
        <figure>
          <HashLink to="/#intro">
            <img src="img/logo.png" alt="logo" class="responsive-logo" />
          </HashLink>
        </figure>
        <nav className="nav hidden lg:flex">
          <ul className="flex items-center gap-5">
            <li className="cursor-pointer hover:animate-zoom">
              <HashLink
                smooth
                to="/#intro"
                className="px-2 py-1"
              >
                Intro
              </HashLink>
            </li>
            <li className="cursor-pointer hover:animate-zoom whitespace-nowrap">
              <HashLink
                smooth
                to="/#about"
                className="px-2 py-1"
              >
                Über mich
              </HashLink>
            </li>
            <li className="cursor-pointer hover:animate-zoom">
              <HashLink
                smooth
                to="/#skills"
                className="px-2 py-1"
              >
                Skills
              </HashLink>
            </li>
            <li className="cursor-pointer hover:animate-zoom">
              <HashLink
                smooth
                to="/#portfolio"
                className="px-2 py-1"
              >
                Portfolio
              </HashLink>
            </li>
            <li className="cursor-pointer hover:animate-zoom">
              <HashLink
                smooth
                to="/#testimonials"
                className="px-2 py-1"
              >
                Referenzen
              </HashLink>
            </li>
            <li className="cursor-pointer hover:animate-zoom">
              <HashLink
                smooth
                to="/#faq"
                className="px-2 py-1"
              >
                FAQ
              </HashLink>
            </li>
            <li className="cursor-pointer hover:animate-zoom">
              <HashLink
                smooth
                to="/#contact"
                className="px-2 py-1"
              >
                Kontakt
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="ml-auto hidden gap-5 text-2xl lg:flex">
          <a href="https://de.linkedin.com/in/johannes-wolf-3b5702203" className="hover:animate-zoom">
            <BsLinkedin />
          </a>
        </div>
        <button className="ml-auto lg:hidden" onClick={onToggleMenu}>
          <BsList className="text-4xl" />
        </button>
      </div>
       {/* Rabattbanner */}
       <div className="bg-blue-700 text-white text-center py-1">
          <p className="text-sm">
          50 % Rabatt für die ersten drei Projekte - Exklusives Startangebot!
          <HashLink smooth to="/#contact" className="underline ml-1">Jetzt anfragen!</HashLink>
          </p>
        </div>
    </header>
  );
};
