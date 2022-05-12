import express from 'express';
import { initializeDB } from './src/config/firebase.js';
import inventoryRoutes from './src/inventory/routes.js';
import shipmentRoutes from './src/inventory/routes.js';
const app = express();

inventoryRoutes(app);
shipmentRoutes(app);

app.listen(3000, function () {
  console.log('listening on 3000');
  initializeDB();
});
