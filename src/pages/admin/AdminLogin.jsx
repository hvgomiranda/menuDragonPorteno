import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import "./admin.css";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/admin");
        } catch (err) {
            setError("Email o contraseña incorrectos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin_login">
            <form className="admin_login_form" onSubmit={handleSubmit}>
                <h1>Ingreso administrador</h1>

                <label htmlFor="admin-email">Email</label>
                <input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="username"
                    required
                />

                <label htmlFor="admin-password">Contraseña</label>
                <input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                />

                {error && <p className="admin_login_error">{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Ingresando..." : "Ingresar"}
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
