import http from "./HttpClient";

export const httpGet = (url: string): Promise<any> => {
    return http
        .get(url === "sanctum/csrf-cookie" ? url : `api/${url}`)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const httpPost = (url: string, data?: any) => {
    return http
        .post(`api/${url}`, data)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const httpPut = (url: string, data?: any) => {
    return http
        .put(`api/${url}`, data)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const httpDelete = (url: string) => {
    return http
        .delete(`api/${url}`)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};
