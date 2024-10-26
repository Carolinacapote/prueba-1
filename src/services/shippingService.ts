import { calculateShippingFee } from '../helpers/shippingRate';
import Shipping from '../models/shipping';

class ShippingService {
  async create(data: Partial<Shipping>) {
    const tarifa = calculateShippingFee(data.distancia || 0);
    return await Shipping.create({ ...data, tarifa });
  }

  async getAll() {
    return await Shipping.findAll();
  };
};

export default ShippingService;
