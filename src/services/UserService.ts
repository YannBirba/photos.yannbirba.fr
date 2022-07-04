import http from "../utils/HttpClient";

export const getCurrentUser = async () => {
    return await http
        .get("user")
        .then((user) => {
            return user.data.data;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};
