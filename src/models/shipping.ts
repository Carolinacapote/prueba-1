import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Shipping extends Model {
  id_envio!: number;
  destinatario!: string;
  remitente!: string;
  contenido!: string;
  fecha_envio!: Date;
  distancia!: number;
  tarifa!: number;
}

Shipping.init(
  {
    id_envio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    destinatario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    remitente: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contenido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_envio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    distancia: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tarifa: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Shipping',
    tableName: 'shipping',
    timestamps: false,
  }
);

export default Shipping;
