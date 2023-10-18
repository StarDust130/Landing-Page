import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";

import HomePage from "./pages/HomePage";
import MissionPage from "./pages/MissionPage";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <About />
      <MissionPage />
      <Projects />

      <Footer />
    </>
  );
}

export default App;
