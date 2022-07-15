import { Button } from "@chakra-ui/react";
import type React from "react";
import { useEffect, useState } from "react";
import http from "../utils/HttpClient";

const HomeView: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<any | null>(null);
    const [data, setData] = useState<any>();
    const [refresh, setRefresh] = useState<boolean>(true);
    useEffect(() => {
        http.get("api/user")
            .then((data) => {
                setIsLoading(false);
                setData(data.data);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                setError(error);
                console.error(error);
            });
        setRefresh(false);
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(true);
    };
    return (
        <>
            <Button onClick={handleRefresh}>Refresh</Button>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <pre>{JSON.stringify(error, null, 4)}</pre>
            ) : (
                <pre>{JSON.stringify(data, null, 4)}</pre>
            )}
        </>
    );
};

export default HomeView;
