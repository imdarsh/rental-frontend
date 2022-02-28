import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/renter/renter-login" />
}

export default PrivateRoute;