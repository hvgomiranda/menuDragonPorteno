import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const COLLECTION_NAME = process.env.REACT_APP_FIRESTORE_MENU_COLLECTION || "menu";

const formatPrecio = (value) => {
    if (value === null || value === undefined || value === "") return "";
    return `$${Number(value).toLocaleString("es-AR")}`;
};

const mapDocToItem = (docSnapshot) => {
    const item = docSnapshot.data();
    return {
        ID: item.id ?? docSnapshot.id,
        Nombre: item.nombre,
        Precio: formatPrecio(item.precio),
        "Precio 350": formatPrecio(item.precio350),
        Tipo: item.categoria,
        Ingredientes: item.ingredientes,
        "Aclaración": item.aclaracion,
    };
};

const useMenuData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchMenu = async () => {
            try {
                const menuQuery = query(collection(db, COLLECTION_NAME), where("disponible", "==", true));
                const snapshot = await getDocs(menuQuery);
                if (!isMounted) return;
                setData(snapshot.docs.map(mapDocToItem));
            } catch (err) {
                if (isMounted) setError(err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchMenu();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, loading, error };
};

export default useMenuData;
