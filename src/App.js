import Home from './Pages/Home';
import Register from './Pages/Register';
import RenterLogin from './Pages/Renter/RenterLogin';
import RenterRegister from './Pages/Renter/RenterRegister';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Renter/Dashboard';
import CreateProduct from './Pages/Renter/CreateProduct';

// import Routes from './Components/Routes';

function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/renter/renter-login" element={<RenterLogin />}></Route>
                  <Route path="/renter/renter-register" element={<RenterRegister />}></Route>
                  <Route path="/renter/dashboard" element={<Dashboard />}></Route>
                  <Route path="/renter/create-product" element={<CreateProduct />}></Route>
                </Routes>
      </Router>
    </div>
  );
}

export default App;
