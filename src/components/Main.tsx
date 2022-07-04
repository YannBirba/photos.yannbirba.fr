import { Flex, useColorModeValue } from "@chakra-ui/react";
import type React from "react";

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    const bg = useColorModeValue("gray.100", "gray.900");
    return (
        <Flex
            flex={"1 0 100%"}
            bg={bg}
            minHeight={"calc(100vh - 8rem)"}
            as="main"
            padding={"5"}
        >
            {children}
        </Flex>
    );
};

export default Main;
