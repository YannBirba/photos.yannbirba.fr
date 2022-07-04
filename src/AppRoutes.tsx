import { Button } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./types/User";
import CurrentUserView from "./views/CurrentUserView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import RegisterView from "./views/RegisterView";

const AppRoutes: React.FC = () => {
    const [user, setUser] = React.useState<User | null>(null);

    const handleLogin = () =>
        setUser({
            id: 1,
            group: {
                id: 1,
                name: "Group test",
            },
            name: "Name test",
            email: "test@test.fr",
            is_admin: true,
        });
    const handleLogout = () => setUser(null);

    return (
        <>
            {user ? (
                <Button
                    position={"fixed"}
                    bottom={0}
                    right={0}
                    onClick={handleLogout}
                >
                    Sign Out
                </Button>
            ) : (
                <Button
                    position={"fixed"}
                    bottom={0}
                    right={0}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
            )}
            <Routes>
                <Route index element={<HomeView />} />
                <Route path="se-connecter" element={<LoginView />} />
                <Route path="creer-un-compte" element={<RegisterView />} />
                <Route path="mon-compte" element={<CurrentUserView />} />
                <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route path="accueil" element={<HomeView />} />
                    <Route
                        element={
                            <ProtectedRoute
                                isAllowed={!!user && user.is_admin}
                            />
                        }
                    >
                        <Route path="admin" element={""}>
                            <Route path="utilisateurs" element={""} />
                            <Route path="groupes" element={""} />
                            <Route path="evenements" element={""} />
                        </Route>
                    </Route>
                    <Route path="evenements" element={""}>
                        <Route path=":eventId" element={""} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFoundView />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
