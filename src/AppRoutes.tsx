import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./types/User";
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
            // eslint-disable-next-line camelcase
            is_admin: true,
        });
    const handleLogout = () => setUser(null);

    return (
        <>
            {user ? (
                <button onClick={handleLogout}>Sign Out</button>
            ) : (
                <button onClick={handleLogin}>Sign In</button>
            )}
            <Routes>
                <Route index element={<HomeView />} />
                <Route path="se-connecter" element={<LoginView />} />
                <Route path="creer-un-compte" element={<RegisterView />} />
                <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route path="accueil" element={<HomeView />} />
                    <Route path="mon-compte" element={""} />
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
