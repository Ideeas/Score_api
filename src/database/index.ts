import { Sequelize } from 'sequelize'

const databaseConfig = {
  database: process.env.DB_DATABASE || '',
  password: process.env.DB_PASSWORD || '',
  user: process.env.USER || '',
}

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.user,
  databaseConfig.password,
  {
    host: process.env.HOST || 'localhost',
    dialect: 'mysql',
  }
)

;(async () => {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    sequelize.close()
  }
})()

export default sequelize
