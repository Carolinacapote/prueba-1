const baseRate = 5;
const costPerKm = 0.5;

export const calculateShippingFee = (distance: number): number => {
  return baseRate + (distance * costPerKm);
};
