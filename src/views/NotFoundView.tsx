import { Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const NotFoundView: React.FC = () => {
    return (
        <>
            <h1>Page non trouvée, elle a pu être supprimée ou déplacée.</h1>
            <Link>
                <RouteLink to={"/"}>{"Se rendre à l'accueil"}</RouteLink>
            </Link>
        </>
    );
};

export default NotFoundView;
