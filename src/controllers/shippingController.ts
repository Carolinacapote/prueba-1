import { Request, Response } from 'express';
import ShippingService from '../services/shippingService';
const shippingService = new ShippingService();

export const createShipping = async (req: Request, res: Response) => {
  try {
    const shipping = await shippingService.create(req.body);
    res.status(201).json({
      msg: 'Envío creado con éxito.',
      shipping
    });
  } catch (error: any) {
    res.status(500).json({
      msg: 'Error al crear el envío',
      error: error?.message || 'Unknown Error',
    });
  }
};

export const getAllShippings = async (req: Request, res: Response) => {
  try {
    const shippings = await shippingService.getAll();
    res.status(200).json(shippings);
  } catch (error: any) {
    res.status(500).json({
      msg: 'Error al obtener envíos',
      error: error?.message || 'Unknown Error',
    });
  }
};
