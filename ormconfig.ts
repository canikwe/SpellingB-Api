module.exports = {
  "type": process.env.TYPE,
  "host": process.env.HOST,
  "port": process.env.PORT,
  "username": process.env.USERNAME,
  "password": process.env.PASSWORD,
  "database": process.env.DB,
  "entities": [
    "dist/**/*.entity.js"
  ],
  "synchronize": false,
  "migrations": [
    "dist/migration/*.js"
  ],
  "cli": {
    "migrationsDir": "migration"
  }
}