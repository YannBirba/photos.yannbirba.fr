import { Flex, useColorModeValue } from "@chakra-ui/react";
import type React from "react";

const Footer: React.FC = () => {
    const bg = useColorModeValue("white", "gray.700");
    return (
        <Flex
            flex={"1 0 100%"}
            as="footer"
            h="4rem"
            bg={bg}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={"5"}
        >
            Footer
        </Flex>
    );
};

export default Footer;
