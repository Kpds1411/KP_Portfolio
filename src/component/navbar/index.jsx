import { navOptions, colors, transition } from "../../constants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { background, link, buttonHover } = colors.light;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(() => window.location.hash || "#home-section");

  useEffect(() => {
    const syncSection = () => setActiveSection(window.location.hash || "#home-section");
    window.addEventListener("hashchange", syncSection);
    return () => window.removeEventListener("hashchange", syncSection);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`w-full h-20 flex items-center justify-center px-8 lg:px-20 py-4 border-b-2 sticky top-0 z-10 ${background} transition-all ${transition.duration}`}
    >
      <ul
        id="portfolio-nav-links"
        className={`xl:flex gap-x-5 ${
          isMobileMenuOpen
            ? `flex flex-col fixed top-20 right-0 w-full p-8 z-20 transition-all transform duration-300 ease-in-out items-center justify-center ${background} `
            : "hidden"
        } xl:flex xl:flex-row xl:gap-0 xl:items-center`}
      >
        {navOptions.map((option) => (
          <li
            key={option.key}
            className={`w-full py-3 px-4 text-lg lg:text-base xl:text-lg font-semibold text rounded-md transition-all cursor-pointer ${transition.duration} text-center lg:px-2 xl:px-3 lg:w-fit`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a
              href={option.href}
              className={`${link} ${transition.duration}`}
              aria-current={activeSection === option.href ? "location" : undefined}
            >
              {option.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-auto xl:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`text-2xl p-2 border-none cursor-pointer transition-all ${transition.duration}`}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="portfolio-nav-links"
        >
          <i
            className={`!bg-transparent fas transition-all text-black ${transition.duration} ${
              isMobileMenuOpen ? "fa-times" : "fa-bars"
            } ${buttonHover}`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
