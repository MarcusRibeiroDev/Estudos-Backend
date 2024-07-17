import dotenv from "dotenv";
dotenv.config();

export default {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  db_port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
