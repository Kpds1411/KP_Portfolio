import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Navbar,
  HeroSection,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
  Achivements,
  Certifications,
  Education,
  Publications,
} from "./component";

export default function App() {
  const isDarkMode = false;

  return (
    <div className="transition-all">
      <Navbar />
      <HeroSection isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Achivements isDarkMode={isDarkMode} />
      <Publications isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
