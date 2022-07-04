import type React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    isAllowed: boolean;
    redirectPath?: string;
    children?: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    isAllowed,
    redirectPath = "/se-connecter",
    children,
}) => {
    const location = useLocation();
    if (!isAllowed) {
        return (
            <Navigate to={redirectPath} replace state={{ from: location }} />
        );
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
