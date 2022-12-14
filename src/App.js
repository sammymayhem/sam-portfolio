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
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';

import Header2 from './components/Header2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header2 />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='skills' element={<Skills />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
