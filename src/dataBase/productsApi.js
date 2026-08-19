import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const COLLECTION_NAME = process.env.REACT_APP_FIRESTORE_MENU_COLLECTION || "menu";

export const updateProduct = (id, changes) =>
    updateDoc(doc(db, COLLECTION_NAME, id), changes);

export const deleteProduct = (id) =>
    deleteDoc(doc(db, COLLECTION_NAME, id));

export const addProduct = async (id, data) => {
    const ref = doc(db, COLLECTION_NAME, id);
    const existing = await getDoc(ref);
    if (existing.exists()) {
        throw new Error(`Ya existe un producto con el número "${id}".`);
    }
    await setDoc(ref, data);
};
