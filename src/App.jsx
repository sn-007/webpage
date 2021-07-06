import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <div className="app">
     <Topbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu  menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testmonials/>
       <Contact/>

     </div>
     
   </div>
  );
}

export default App;
