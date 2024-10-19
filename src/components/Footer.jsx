import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <footer className="bg-primary-500 py-5">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center text-sm uppercase">
        <p>&#169; 2024 Johannes Wolf. Alle Rechte vorbehalten.</p>
          <HashLink to="/imprint" className="text-primary-50 hover:underline">
            Impressum
          </HashLink>
        </div>
      </div>
    </footer>
  );
};
