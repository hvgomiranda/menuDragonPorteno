import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import useAdminProducts from "../../dataBase/useAdminProducts";
import TIPOS from "../../dataBase/categorias";
import ProductRow from "./ProductRow.jsx";
import AddProductForm from "./AddProductForm.jsx";
import "./admin.css";

const AdminPage = () => {
    const { user } = useOutletContext();
    const { products, loading, error } = useAdminProducts();

    const productosPorCategoria = useMemo(() => {
        const grouped = {};
        products.forEach((product) => {
            (grouped[product.categoria] ??= []).push(product);
        });
        Object.values(grouped).forEach((items) =>
            items.sort((a, b) => a.nombre.localeCompare(b.nombre))
        );
        return grouped;
    }, [products]);

    const categorias = useMemo(() => {
        const extra = Object.keys(productosPorCategoria).filter((tipo) => !TIPOS.includes(tipo));
        return [...TIPOS, ...extra];
    }, [productosPorCategoria]);

    return (
        <div className="admin_page">
            <div className="admin_panel">
                <header className="admin_panel_header">
                    <p>Sesión iniciada como {user.email}</p>
                    <button onClick={() => signOut(auth)}>Cerrar sesión</button>
                </header>

                <AddProductForm />

                {loading && <p>Cargando productos...</p>}
                {error && <p>No se pudieron cargar los productos.</p>}

                {!loading && !error && categorias.map((categoria) => (
                    productosPorCategoria[categoria]?.length > 0 && (
                        <section key={categoria} className="admin_category">
                            <h2>{categoria}</h2>
                            <table className="admin_table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Disponible</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productosPorCategoria[categoria].map((product) => (
                                        <ProductRow key={product.id} product={product} />
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    )
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
