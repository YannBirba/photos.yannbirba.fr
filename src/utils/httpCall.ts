import http from "./HttpClient";

export const httpGet = (url: string) => {
    return http
        .get(url)
        .then((data) => {
            return data.data.data;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};

export const httpPost = (url: string, data?: any) => {
    return http
        .post(url, data)
        .then((data) => {
            return data.data.data;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};

export const httpDelete = (url: string) => {
    return http
        .delete(url)
        .then((data) => {
            return data.data.data;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};
