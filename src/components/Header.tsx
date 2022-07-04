import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {
    const bg = useColorModeValue("white", "gray.700");

    return (
        <Flex
            justify={"space-between"}
            as="header"
            bg={bg}
            h="4rem"
            alignItems={"center"}
            paddingX={"5"}
        >
            <Navigation />
            <Flex align={"center"} justify="center">
                <ColorModeSwitcher />
                <UserMenu />
            </Flex>
        </Flex>
    );
};

export default Header;
