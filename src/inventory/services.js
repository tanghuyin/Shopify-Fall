import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  deleteDoc,
  query,
  getDocs,
} from 'firebase/firestore';

const getInventories = async (next) => {
  const db = getFirestore();
  const q = query(collection(db, 'shopify'));
  const querySnapShot = await getDocs(q);
  const resArr = [];
  querySnapShot.forEach(async (doc) => {
    resArr.push({ id: doc.id, ...doc.data() });
  });
  return { inventories: resArr };
};

const createInventory = async (body, next) => {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, 'shopify'), body);
    return { message: 'Successfully create an inventory' };
  } catch (e) {
    next(e);
  }
};

const updateInventory = async (body, id, next) => {
  const db = getFirestore();
  try {
    await setDoc(doc(db, 'shopify', id), body);
    return { message: 'Successfully update an inventory' };
  } catch (e) {
    next(e);
  }
};

const deleteInventory = async (id, next) => {
  const db = getFirestore();
  try {
    await deleteDoc(doc(db, 'shopify', id));
    return { message: 'Successfully delete an inventory' };
  } catch (e) {
    next(e);
  }
};

export { getInventories, createInventory, updateInventory, deleteInventory };
