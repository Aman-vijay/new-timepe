// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import SignUp from './Pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/Navbar" element={<Navbar/>} />
              <Route path="/Footer" element={<Footer/>} />
              <Route path="/Signup" element={<SignUp/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
