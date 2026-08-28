import { useState } from "react";
import { updateProduct, deleteProduct } from "../../dataBase/productsApi";

const ProductRow = ({ product }) => {
    const [nombre, setNombre] = useState(product.nombre);
    const [precio, setPrecio] = useState(product.precio ?? "");
    const [ingredientes, setIngredientes] = useState(product.ingredientes ?? "");
    const [aclaracion, setAclaracion] = useState(product.aclaracion ?? "");
    const [disponible, setDisponible] = useState(product.disponible);
    const [saving, setSaving] = useState(false);

    const trimmedNombre = nombre.trim();
    const trimmedIngredientes = ingredientes.trim();
    const trimmedAclaracion = aclaracion.trim();
    const parsedPrecio = Number(precio);
    const isValid = trimmedNombre.length > 0 && Number.isFinite(parsedPrecio) && parsedPrecio >= 0;
    const isDirty =
        trimmedNombre !== product.nombre ||
        parsedPrecio !== product.precio ||
        trimmedIngredientes !== (product.ingredientes ?? "") ||
        trimmedAclaracion !== (product.aclaracion ?? "") ||
        disponible !== product.disponible;

    const handleGuardar = async () => {
        setSaving(true);
        try {
            await updateProduct(product.id, {
                nombre: trimmedNombre,
                precio: parsedPrecio,
                ingredientes: trimmedIngredientes,
                aclaracion: trimmedAclaracion,
                disponible,
            });
        } finally {
            setSaving(false);
        }
    };

    const handleEliminar = () => {
        if (!window.confirm(`¿Eliminar "${product.nombre}" (#${product.id})? Esta acción no se puede deshacer.`)) return;
        deleteProduct(product.id);
    };

    return (
        <tr>
            <td>{product.id}</td>
            <td>
                <input value={nombre} onChange={(event) => setNombre(event.target.value)} />
            </td>
            <td className="admin_table_description">
                <input
                    value={ingredientes}
                    placeholder="Ingredientes"
                    onChange={(event) => setIngredientes(event.target.value)}
                />
                <input
                    value={aclaracion}
                    placeholder="Aclaración"
                    onChange={(event) => setAclaracion(event.target.value)}
                />
            </td>
            <td>
                <input type="number" min="0" value={precio} onChange={(event) => setPrecio(event.target.value)} />
            </td>
            <td className="admin_table_checkbox">
                <input type="checkbox" checked={disponible} onChange={(event) => setDisponible(event.target.checked)} />
            </td>
            <td className="admin_table_actions">
                <button onClick={handleGuardar} disabled={!isDirty || !isValid || saving}>
                    {saving ? "Guardando..." : "Guardar"}
                </button>
                <button onClick={handleEliminar} className="admin_delete_btn">Eliminar</button>
            </td>
        </tr>
    );
};

export default ProductRow;
