<<<<<<< HEAD
import Portfolio from "./components/Portfolio.jsx";

export default function App() {
  return <Portfolio />;
}
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Academics } from "./components/Academics";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Academics />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
>>>>>>> f19592eea51f4e9db0bfbba53241b06c4ba8b589
