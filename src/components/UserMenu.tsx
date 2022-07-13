import {
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { httpPost } from "../utils/httpCall";

const UserMenu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    const toast = useToast();

    const handleLogout = async () => {
        await httpPost("logout")
            .then((message) => {
                console.log(message);

                toast({
                    description: JSON.stringify(message),
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                    icon: <FaUserCircle />,
                });
            })
            .catch((error) => {
                console.log(error);

                toast({
                    description: JSON.stringify(error),
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                    icon: <FaUserCircle />,
                });
            });
    };
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                as={IconButton}
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                icon={<FaUserCircle />}
                aria-label="Menu utilisateur"
            />
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <Link
                    _activeLink={{ fontWeight: "bold" }}
                    as={NavLink}
                    to={"/mon-compte"}
                >
                    <MenuItem>Mon compte</MenuItem>
                </Link>
                <Link
                    _activeLink={{ fontWeight: "bold" }}
                    onClick={handleLogout}
                >
                    <MenuItem>Se déconnecter</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
