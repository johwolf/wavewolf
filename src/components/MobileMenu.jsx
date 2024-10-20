import { useEffect } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { BsXLg, BsGithub, BsLinkedin } from "react-icons/bs";

/*
 * MobileMenu component responsible for displaying the mobile menu.
 * @param {boolean} isOpen Flag indicating whether the mobile menu is open.
 * @param {function} isClose Function to close the mobile menu.
 */
export const MobileMenu = ({ isOpen, isClose }) => {
  // Function to handle window resize events and close the mobile menu if the window width exceeds 1023px.
  const handleResize = ({ target }) => {
    if (target.innerWidth > 1023) {
      isClose();
    }
  };

  // Function to handle click events on the overlay and close the mobile menu.
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      isClose();
    }
  };

  useEffect(() => {
    // Add event listener for window resize events when the component mounts.
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // Remove event listener when the component unmounts to avoid memory leaks.
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween" }}
          className=" fixed inset-0 z-50 flex h-screen w-screen bg-black/30"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5 }}
            className="relative mr-auto flex h-full w-[288px] min-w-[250px] flex-col bg-white/80 shadow-lg backdrop-blur"
          >
            <button
              className="absolute right-5 top-5 p-[3px]"
              onClick={isClose}
            >
              <BsXLg className="text-xl" />
            </button>
            <div className="my-auto flex flex-col items-center gap-10 ">
              <nav className="nav">
                <ul className="flex flex-col items-center gap-5">
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="intro"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      Intro
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      Über mich
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      Referenzen
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer px-2 py-1"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={isClose}
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex gap-5">
                <a href="https://de.linkedin.com/in/johannes-wolf-3b5702203" className="hover:animate-zoom">
                  <BsLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
