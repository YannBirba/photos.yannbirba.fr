import { Flex, useToast } from "@chakra-ui/react";
import type React from "react";
import { IoMdCheckmarkCircle, IoMdWarning } from "react-icons/io";
import { NavigateFunction, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import useMutate from "../hooks/useMutate";
import { login } from "../services/AuthService";
import { Login } from "../types/User";

const LoginView: React.FC = () => {
    const toast = useToast();
    const queryKey = ["login"];
    const navigate: NavigateFunction = useNavigate();

    const onError = (error: string) => {
        toast({
            description: error,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            icon: <IoMdWarning />,
        });
    };
    const onSuccess = (message: string) => {
        toast({
            description: message,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
            icon: <IoMdCheckmarkCircle />,
        });
        navigate("/");
    };

    const { mutateAsync } = useMutate<Login>(
        queryKey,
        login,
        onSuccess,
        onError,
    );

    const onSubmit = async (data: Login) => {
        await mutateAsync(data);
    };

    return (
        <Flex justifyContent={"center"} alignItems={"center"} width={"full"}>
            <LoginForm submitLogin={onSubmit} />
        </Flex>
    );
};

export default LoginView;
