import { DataTypes, Model } from 'sequelize'
import sequelize from '../database'

class Score extends Model {}

Score.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    dateTimeBegin: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    dateTimeIntervalBegin: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    dateTimeIntervalFinish: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    dateTimeExtraBegin: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    dateTimeExtraFinish: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
)

export default Score
