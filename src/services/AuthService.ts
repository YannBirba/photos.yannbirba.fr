import { Login, Register } from "../types/User";
import { httpPost } from "../utils/httpCall";

export const login = (data: Login) => {
    return httpPost("login", data);
};

export const register = (data: Register) => {
    return httpPost("register", data);
};

export const logout = () => {
    return httpPost("logout");
};
