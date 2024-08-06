import mysql from "mysql";

const conection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Marcus2020@",
  database: "db_team",
});

conection.connect();

export const makeRequest = (sql, msg, values = "") => {
  return new Promise((resolve, reject) => {
    conection.query(sql, values, (error, result) => {
      if (error) return reject(msg);
      const res = JSON.parse(JSON.stringify(result));
      return resolve(res);
    });
  });
};

export default conection;
