import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Spinner,
    useColorModeValue,
} from "@chakra-ui/react";
import type React from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import useGet from "../hooks/useGet";
import { getCurrentUser } from "../services/UserService";
import User from "../types/User";

const CurrentUserView: React.FC = () => {
    const bg = useColorModeValue("white", "gray.700");
    const { isLoading, isSuccess, isError, isFetching, data, errors, refetch } =
        useGet(getCurrentUser());
    const currentUser: User = data || ({} as User);

    return (
        <>
            <Button
                position={"fixed"}
                aria-label="Rafraîchir"
                title="Rafraîchir"
                isLoading={isFetching}
                onClick={() => refetch()}
            >
                <IoMdRefreshCircle size={"2rem"} fill={"#222"} />
            </Button>
            {(isFetching || isLoading) && (
                <Flex
                    height={"100%"}
                    width={"100%"}
                    justify={"center"}
                    align={"center"}
                    position={"fixed"}
                    bg={"whiteAlpha.700"}
                >
                    <Spinner />
                </Flex>
            )}
            {isSuccess && (
                <Flex align={"center"} justify={"center"} minH={"100%"}>
                    <Box
                        padding={"5rem"}
                        borderRadius={"2rem"}
                        bg={bg}
                        gap={"1rem"}
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Heading as="h1">Mon compte</Heading>
                        <Divider />
                        <Heading as="h2">{`Nom : ${currentUser.name}`}</Heading>
                        <Heading as="h2">{`E-mail : ${currentUser.email}`}</Heading>
                        <Heading as="h2">{`Nom du groupe : ${currentUser.group.name}`}</Heading>
                        {currentUser.is_admin ? (
                            <Heading as="h2">Administrateur</Heading>
                        ) : (
                            <Heading as="h2">Utilisateur</Heading>
                        )}
                    </Box>
                </Flex>
            )}
            {isError && (
                <p>
                    Erreur lors de la requete :{JSON.stringify(errors, null, 2)}
                </p>
            )}
        </>
    );
};

export default CurrentUserView;
