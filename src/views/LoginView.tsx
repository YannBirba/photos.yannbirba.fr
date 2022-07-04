import { Flex, useToast } from "@chakra-ui/react";
import type React from "react";
import { IoMdCheckmarkCircle, IoMdWarning } from "react-icons/io";
import { NavigateFunction, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import http from "../utils/HttpClient";

const LoginView: React.FC = () => {
    const toast = useToast();

    const navigate: NavigateFunction = useNavigate();

    const onSubmit = (values: unknown) => {
        http.post("login", values)
            .then((response: { data: { message: any } }) => {
                console.log(response.data);
                toast({
                    description: response.data.message,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                    icon: <IoMdCheckmarkCircle />,
                    onCloseComplete() {
                        navigate("/");
                    },
                });
            })
            .catch((error: { message: any }) => {
                console.error(error);
                toast({
                    description: error.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top-right",
                    icon: <IoMdWarning />,
                });
            });
    };

    return (
        <Flex justifyContent={"center"} alignItems={"center"} width={"full"}>
            <LoginForm onSubmit={onSubmit} />
        </Flex>
    );
};

export default LoginView;
