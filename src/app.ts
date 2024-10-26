import express from 'express';
import bodyParser from 'body-parser';
import db from './database';
import shippingRouter from './routes/shippingRoutes';
import { PORT } from './config/environment';

const app = express();
app.use(bodyParser.json());

const apiPaths = {
  shippings: '/envios',
};

app.use(apiPaths.shippings, shippingRouter);

db.sync().then(() => {
  console.log('DB running');
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
