import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import "./admin.css";

const RequireAuth = () => {
    const [user, setUser] = useState(null);
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setCheckingAuth(false);
        });
        return unsubscribe;
    }, []);

    if (checkingAuth) {
        return <p className="admin_loading">Cargando...</p>;
    }

    if (!user) {
        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet context={{ user }} />;
};

export default RequireAuth;
