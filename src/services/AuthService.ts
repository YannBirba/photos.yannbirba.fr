import { Login, Register } from "../types/User";
import { httpGet, httpPost } from "../utils/httpCall";

export const login = (data: Login) => {
    return httpGet("sanctum/csrf-cookie").then(() => httpPost("login", data));
};

export const register = (data: Register) => {
    return httpPost("register", data);
};

export const logout = () => {
    return httpPost("logout");
};
