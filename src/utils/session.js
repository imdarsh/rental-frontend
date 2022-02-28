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