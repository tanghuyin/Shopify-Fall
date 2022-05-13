import {
  getInventories,
  createInventory,
  deleteInventory,
  updateInventory,
} from './services.js';

export default function (app) {
  app.get('/inventory', async (req, res) => {
    const data = await getInventories();
    res.render('inventory', data);
  });

  app.post('/inventory', async (req, res, next) => {
    const data = await createInventory(req.body, next);
    res.status(200).send(data);
  });

  app.put('/inventory/:inventoryID', async (req, res, next) => {
    const id = req.params.inventoryID;
    const data = await updateInventory(req.body, id, next);
    res.status(200).send(data);
  });

  app.delete('/inventory/:inventoryID', async (req, res, next) => {
    const id = req.params.inventoryID;
    const data = await deleteInventory(id, next);
    res.status(200).send(data);
  });
}
