import { Button, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { getCurrentUser } from "../services/UserService";
import User from "../types/User";

import { IoMdRefreshCircle } from "react-icons/io";

const HomeView: React.FC = () => {
    const queryKey: string[] = ["currentUser"];
    const { isLoading, data, error, isSuccess, isError, refetch, isFetching } =
        useQuery(queryKey, () => getCurrentUser(), { staleTime: 10000 });
    const currentUser: User = data || ({} as User);
    const errors = error as any;

    return (
        <>
            <Button
                aria-label="Rafraîchir"
                title="Rafraîchir"
                isLoading={isFetching}
                onClick={() => refetch()}
            >
                <IoMdRefreshCircle size={"2rem"} fill={"#222"} />
            </Button>
            {(isFetching || isLoading) && (
                <Flex
                    height={"100vh"}
                    width={"100vw"}
                    justify={"center"}
                    align={"center"}
                    position={"fixed"}
                    bg={"whiteAlpha.700"}
                >
                    <Spinner />
                </Flex>
            )}
            {isSuccess && <pre>{JSON.stringify(currentUser, null, 2)}</pre>}
            {isError && (
                <p>
                    Erreur lors de la requete :{" "}
                    {JSON.stringify(errors, null, 2)}
                </p>
            )}
        </>
    );
};

export default HomeView;
