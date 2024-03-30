import './App.css';
import { NavBar } from './components/Navbar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills'
import {Projects} from './components/Projects';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
