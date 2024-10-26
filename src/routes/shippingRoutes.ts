import { Router } from 'express';
import { createShipping, getAllShippings } from '../controllers/shippingController';


const shippingRouter = Router();

shippingRouter
  .post('/', createShipping)
  .get('/', getAllShippings);

export default shippingRouter;
