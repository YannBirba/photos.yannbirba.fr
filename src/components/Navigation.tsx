import {
    Flex,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    return (
        <Flex
            as={"nav"}
            justify="center"
            align={"center"}
            wrap="wrap"
            gap={"2rem"}
        >
            <Link _activeLink={{ fontWeight: "bold" }} as={NavLink} to={"/"}>
                {" "}
                Accueil
            </Link>
            <Link
                _activeLink={{ fontWeight: "bold" }}
                as={NavLink}
                to={"/evenements"}
            >
                Evénements
            </Link>
            <Link
                _activeLink={{ fontWeight: "bold" }}
                as={NavLink}
                to={"/admin"}
            >
                <Menu isOpen={isOpen}>
                    <MenuButton
                        as={Link}
                        variant={"ghost"}
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                    >
                        Administration
                    </MenuButton>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <Link
                            _activeLink={{ fontWeight: "bold" }}
                            as={NavLink}
                            to={"/admin/utilisateurs"}
                        >
                            <MenuItem>Utilisateurs</MenuItem>
                        </Link>
                        <Link
                            _activeLink={{ fontWeight: "bold" }}
                            as={NavLink}
                            to={"/admin/groupes"}
                        >
                            <MenuItem>Groupes</MenuItem>
                        </Link>
                        <Link
                            _activeLink={{ fontWeight: "bold" }}
                            as={NavLink}
                            to={"/admin/evenements"}
                        >
                            <MenuItem>Evénements</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Link>
        </Flex>
    );
};

export default Navigation;
