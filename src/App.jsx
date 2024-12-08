import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Navbar,
  HeroSection,
  About,
  Experience,
  Contact,
  Footer,
  Achivements,
  Certifications,
  Education,
} from "./component";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className={`transition-all ${isDarkMode ? "dark" : ""}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Achivements isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
