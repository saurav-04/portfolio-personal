import './App.css';
import { NavBar } from './components/Navbar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default App;
