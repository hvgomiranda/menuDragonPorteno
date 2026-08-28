import { useState } from "react";
import { addProduct } from "../../dataBase/productsApi";
import TIPOS from "../../dataBase/categorias";

const AddProductForm = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState(TIPOS[0]);
    const [precio, setPrecio] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [aclaracion, setAclaracion] = useState("");
    const [disponible, setDisponible] = useState(true);
    const [error, setError] = useState(null);
    const [saving, setSaving] = useState(false);

    const resetForm = () => {
        setId("");
        setNombre("");
        setCategoria(TIPOS[0]);
        setPrecio("");
        setIngredientes("");
        setAclaracion("");
        setDisponible(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSaving(true);
        try {
            await addProduct(id.trim(), {
                nombre: nombre.trim(),
                categoria,
                precio: Number(precio),
                precio350: null,
                ingredientes: ingredientes.trim(),
                aclaracion: aclaracion.trim(),
                disponible,
            });
            resetForm();
        } catch (err) {
            setError(err.message || "No se pudo agregar el producto.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <form className="admin_add_form" onSubmit={handleSubmit}>
            <h2>Agregar producto</h2>
            <div className="admin_add_fields">
                <label>
                    Número
                    <input value={id} onChange={(event) => setId(event.target.value)} required />
                </label>
                <label>
                    Nombre
                    <input value={nombre} onChange={(event) => setNombre(event.target.value)} required />
                </label>
                <label>
                    Categoría
                    <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                        {TIPOS.map((tipo) => (
                            <option key={tipo} value={tipo}>{tipo}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Precio
                    <input type="number" min="0" value={precio} onChange={(event) => setPrecio(event.target.value)} required />
                </label>
                <label>
                    Ingredientes
                    <input value={ingredientes} onChange={(event) => setIngredientes(event.target.value)} />
                </label>
                <label>
                    Aclaración
                    <input value={aclaracion} onChange={(event) => setAclaracion(event.target.value)} />
                </label>
                <label className="admin_add_checkbox">
                    Disponible
                    <input type="checkbox" checked={disponible} onChange={(event) => setDisponible(event.target.checked)} />
                </label>
            </div>
            {error && <p className="admin_login_error">{error}</p>}
            <button type="submit" disabled={saving}>
                {saving ? "Agregando..." : "Agregar producto"}
            </button>
        </form>
    );
};

export default AddProductForm;
