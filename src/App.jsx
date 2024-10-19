import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Footer, GotTopButton, Header, Loader, MobileMenu } from "./components";
import { About, Hero, Porfolio, Testimonials, Skills, Contact, Faq, Imprint, Process } from "./views";
import { HashLink } from 'react-router-hash-link';  

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    document.body.classList.add("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <Header onToggleMenu={handleToggleMenu} />
      <Routes>
        {/* Route für die Hauptseite */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Porfolio />
              <Process />
              <Testimonials />
              <Faq />
              <Contact />
              <GotTopButton />
            </>
          }
        />

        {/* Route für das Impressum */}
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <MobileMenu isOpen={isMenuOpen} isClose={handleCloseMenu} />
      <Loader isLoading={isLoading} />
      <Footer />
    </Router>
  );
};
