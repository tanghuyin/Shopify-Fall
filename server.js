import express from 'express';
import bodyParser from 'body-parser';
import { initializeDB } from './src/config/firebase.js';
import inventoryRoutes from './src/inventory/routes.js';
import shipmentRoutes from './src/shipment/routes.js';
import { errorhandler } from './src/middlewares/errorhandler.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

inventoryRoutes(app);
shipmentRoutes(app);

app.set('view engine', 'ejs');
app.use(errorhandler);
app.listen(3000, function () {
  console.log('listening on 3000');
  initializeDB();
});
