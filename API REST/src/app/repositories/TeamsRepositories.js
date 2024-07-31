import conection from "../database/conection.js";

class TeamsRepositories {
  findAll() {
    const sql = "SELECT * FROM db_team.teams;";
    return new Promise((resolve, reject) => {
      conection.query(sql, (error, result) => {
        if (error) return reject("A busca de todos os times falhou");
        const res = JSON.parse(JSON.stringify(result));
        return resolve(res);
      });
    });
  }

  findById() {}

  create() {}

  delete() {}

  update() {}
}

export default new TeamsRepositories();
