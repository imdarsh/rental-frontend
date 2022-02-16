import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Routes from './Components/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
                <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
