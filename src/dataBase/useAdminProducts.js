import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const COLLECTION_NAME = process.env.REACT_APP_FIRESTORE_MENU_COLLECTION || "menu";

const useAdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, COLLECTION_NAME),
            (snapshot) => {
                setProducts(snapshot.docs.map((docSnapshot) => ({
                    id: docSnapshot.id,
                    ...docSnapshot.data(),
                })));
                setLoading(false);
            },
            (err) => {
                setError(err);
                setLoading(false);
            }
        );
        return unsubscribe;
    }, []);

    return { products, loading, error };
};

export default useAdminProducts;
