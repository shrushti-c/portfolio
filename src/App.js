
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Skills from './pages/Skills';
function App() {
  return (
   <>
   <Router>
   <Navbar />
  <Routes>

    <Route path='/' exact element={<Home/>} />

    <Route path='/projects' element={<Projects/>} />
  
    <Route path='/skills' element={<Skills/>} />
  </Routes>


   <Footer />
   </Router>
   
   </>
  );
}

export default App;
