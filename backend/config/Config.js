const dotenv = require("dotenv");

dotenv.config();

const Config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.SERVER_PORT) || 8846,
  //   jwt: {
  //     secret: process.env.JWT_SECRET || 'boomer',
  //   },
  app: {
    name: process.env.APP_NAME || "certification-app",
    version: process.env.APP_VERSION || "1.0.0",
    build: Number(process.env.BUILD_VERSION) || 1,
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(3306),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = Config;
