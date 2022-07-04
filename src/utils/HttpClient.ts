import axios, { type AxiosInstance } from "axios";

const throwEnvError = () => {
    console.warn("Please define REACT_APP_API_URL in env file");
    throw new Error("Please define REACT_APP_API_URL in env file");
};

const http: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
        ? process.env.REACT_APP_API_URL
        : throwEnvError(),
    withCredentials: true,
    headers: {
        Accept: "application/json",
        AcceptEncoding: "gzip, deflate, br",
    },
});

http.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: {
        request: { responseType: string };
        response: { data: Blob; date: string };
    }) => {
        if (
            error.request.responseType === "blob" &&
            error.response.data instanceof Blob &&
            error.response.data.type &&
            error.response.data.type.toLowerCase().indexOf("json") !== -1
        ) {
            return new Promise((resolve, reject) => {
                const reader: FileReader = new FileReader();
                reader.onload = () => {
                    if (
                        reader.result !== null &&
                        typeof reader.result === "string"
                    ) {
                        error.response.data = JSON.parse(reader.result);
                    } else {
                        error.response.date = JSON.stringify(reader.result);
                    }
                    resolve(Promise.reject(error));
                };

                reader.onerror = () => {
                    reject(error);
                };

                reader.readAsText(error.response.data);
            });
        }

        return Promise.reject(error);
    },
);

export default http;
