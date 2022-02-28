import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/renter/renter-login" />
}

function UserPrivateRoute() {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />
}

export { PrivateRoute, UserPrivateRoute }