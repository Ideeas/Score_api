import { DataTypes, Model } from 'sequelize'
import sequelize from '../database'
import Score from './Score'
import User from '../global/classes/User'

type UserModelTypes = Required<User>

class UserModel extends Model<UserModelTypes | {}> {}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'user' }
)

UserModel.hasMany(Score)
Score.belongsTo(UserModel)

export default UserModel
