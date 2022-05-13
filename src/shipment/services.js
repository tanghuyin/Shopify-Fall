import { getFirestore, doc, runTransaction } from 'firebase/firestore';
import InternalServerError from '../resp/InternalServerError.js';

const updateInventoryForShipment = async (id, body, next) => {
  const db = getFirestore();
  try {
    await runTransaction(db, async (transaction) => {
      const ref = doc(db, 'shopify', id);
      const inventoryDoc = await transaction.get(ref);
      if (!inventoryDoc.exists()) {
        throw new InternalServerError('Document does not exist!');
      }
      const stock = inventoryDoc.data().stock - body.stock;
      if (stock < 0) {
        throw new InternalServerError('Cannot ship more than inventory');
      }
      transaction.update(ref, { stock });
    });
    return { message: 'Transaction successfully committed!' };
  } catch (e) {
    next(e);
  }
};

export { updateInventoryForShipment };
