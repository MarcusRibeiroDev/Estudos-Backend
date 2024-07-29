import mysql from "mysql";

const conection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Marcus2020@",
  database: "db_team",
});

conection.connect();

export default conection;
