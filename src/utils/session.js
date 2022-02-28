import axios from "axios";

export const getUser = () => {
    // const userStr = localStorage.getItem("user");
    // if (userStr) return JSON.parse(userStr);
    // else return null;
    return axios.get('http://localhost:4000/api/v1/showMe')
    .then(function(response){
        console.log(true)
    })
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const setUserSession = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}