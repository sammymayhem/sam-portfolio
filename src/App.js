import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// import Loading from './components/Loading';
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
// import About from './components/pages/About';
import About2 from "./components/pages/About2";
// import Projects from './components/pages/Projects';
import Projects2 from './components/pages/Projects2';
import Skills from './components/pages/Skills';

import Header2 from './components/Header2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header2 />
        <div>
          <Routes>
            <Route exact path='/sam-portfolio' element={<Home />} />
            <Route path='about' element={<About2 />} />
            <Route path='projects' element={<Projects2 />} />
            <Route path='skills' element={<Skills />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
