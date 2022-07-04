import {
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserMenu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
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
                    onClick={() => {
                        //TODO: logout and redirect to login
                    }}
                >
                    <MenuItem>Se déconnecter</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
