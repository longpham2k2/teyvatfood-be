const { Sequelize } = require("sequelize");

/**
 * Option 1: Passing a connection URI
 */
// const sequelize = new Sequelize("sqlite::memory:"); // SQLite
// const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname"); // Postgres

/**
 * Option 2.1: Passing parameters separately (SQLite)
 */
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "path/to/database.sqlite",
// });

/**
 * Option 2.2: Passing parameters separately (other dialects)
 */
const sequelize = new Sequelize("teyvatfoods", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
  } catch (error) {
    console.error('An error occured when connecting to database:' , error);
  }
}

module.exports = connectDB;