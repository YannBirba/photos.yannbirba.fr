import http from "./HttpClient";

export const httpGet = (url: string) => {
    return http
        .get(url === "sanctum/csrf-cookie" ? url : `api/${url}`)
        .then((data) => {
            return data.data.data ?? data.data.message;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};

export const httpPost = (url: string, data?: any) => {
    return http
        .post(`api/${url}`, data)
        .then((data) => {
            console.log(data);

            return data.data.data ?? data.data.message;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};

export const httpPut = (url: string, data?: any) => {
    return http
        .put(`api/${url}`, data)
        .then((data) => {
            return data.data.data ?? data.data.message;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};

export const httpDelete = (url: string) => {
    return http
        .delete(`api/${url}`)
        .then((data) => {
            return data.data.data ?? data.data.message;
        })
        .catch((error) => {
            return error.response.data.message ?? error.response.data.error;
        });
};
