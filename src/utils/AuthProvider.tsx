import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AuthProviderProps {
    children: React.ReactElement;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = React.useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const AuthContext = React.createContext(null);

    const handleLogin = async () => {
        const token = await Promise.resolve("token");

        setToken(token);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };
    const LocationState: any = location.state;
    const origin: string = LocationState?.from?.pathname || "/";
    navigate(origin);

    return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
