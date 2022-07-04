import { httpGet } from "../utils/httpCall";

export const getCurrentUser = async () => {
    return await httpGet("user");
};

export const getUser = async (id: string) => {
    return await httpGet(`user/${id}`);
};

export const getUserList = async () => {
    return await httpGet("user/userlist");
};
