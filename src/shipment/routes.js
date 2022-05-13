import { doc, getFirestore, runTransaction } from 'firebase/firestore';
import { updateInventoryForShipment } from './services.js';

export default function (app) {
  app.post('/shipment/:inventoryID', async (req, res, next) => {
    const id = req.params.inventoryID;
    const body = req.body;
    const data = await updateInventoryForShipment(id, body, next);
    res.status(200).send(data);
  });
}
