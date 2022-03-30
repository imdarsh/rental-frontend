import Home from './Pages/Home';
import Register from './Pages/Register';
import RenterLogin from './Pages/Renter/RenterLogin';
import RenterRegister from './Pages/Renter/RenterRegister';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Renter/Dashboard';
import CreateProduct from './Pages/Renter/CreateProduct';
import { getUser, getToken } from './utils/session';
import {PrivateRoute, UserPrivateRoute } from './Components/PrivateRoute';
import ErrorPage from './Pages/ErrorPage';
import { useState } from 'react';
import UpdateProduct from './Pages/Renter/UpdateProduct';
import DetailsPage from './Pages/DetailsPage';
import Agreement from './Pages/Agreement';
import Order from './Pages/Order';
import Success from './Pages/Success';
import MyOrders from './Pages/MyOrders';
import MyProfile from './Pages/MyProfile';
import EditProfile from './Pages/EditProfile';
import ChangePassword from './Pages/ChangePassword';

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
                  <Route path="/details/:id" element={<DetailsPage />}></Route>
                  <Route element={<PrivateRoute />}>
                    <Route exact path="/renter/dashboard" element={<Dashboard  />} />
                    <Route path="/renter/create-product" element={<CreateProduct />}></Route>
                    <Route path="/renter/edit-product/:id" element={<UpdateProduct />}></Route>
                    <Route path="/agreement/:id" element={<Agreement />}></Route>
                    <Route path="/orders/:id" element={<Order />}></Route>
                    <Route path="/success" element={<Success />}></Route>
                    <Route path="/my-orders" element={<MyOrders />}></Route>
                    <Route path="/my-profile" element={<MyProfile />}></Route>
                    <Route path="/edit-profile/:id" element={<EditProfile />}></Route>
                    <Route path="/change-password/:id" element={<ChangePassword />}></Route>
                  </Route>
                  <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
      </Router>
    </div>
  );
}
 
export default App;
