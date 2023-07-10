import './App.css';
import Home from "./componates/Home/Home"
import AbountMe from './componates/aboutMe/AbountMe';
import GithubLinks from './componates/GithubLinks/GithubLinks';
import Skill from './componates/Skills/SkillPage/Skill'
import NavBar from './NavBar';
import ContactForm from './componates/ContactMe/Contactme';
import HamburgerMenu from './componates/Hambar/HamburgerMenu';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <NavBar /> 
      <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/about" element={<AbountMe />} />
     <Route exact path="/projects" element={<GithubLinks /> }/>
     <Route exact path="/skills" element={<Skill />}/>
     <Route exact path="/Contactme" element={<ContactForm/>}/>
     </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
