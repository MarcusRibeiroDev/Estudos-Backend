import { response } from "express";
import { makeRequest } from "../database/conection.js";

class TeamsRepositories {
  findAll() {
    return makeRequest(
      "SELECT * FROM db_team.teams;",
      "Não foi possível recuperar todos os times"
    );
  }

  // findById(id) {
  //   let sql = "SELECT * FROM db_team.teams WHERE id=?;";
  //   return new Promise((resolve, reject) => {
  //     conection.query(sql, id, (error, result) => {
  //       result = result[0];
  //       if (error) {
  //         return reject(`A busca individual do time com id ${id} falhou`);
  //       } else {
  //         const res = JSON.parse(JSON.stringify(result));
  //         return resolve(res);
  //       }
  //     });
  //   });
  // }

  // create(newTeam) {
  //   let sql = "INSERT INTO db_team.teams SET ?;";
  //   return new Promise((resolve, reject) => {
  //     conection.query(sql, newTeam, (error, result) => {
  //       if (error) {
  //         return reject(`A criação do time ${newTeam.team} falhou`);
  //       } else {
  //         const res = JSON.parse(JSON.stringify(result));
  //         return resolve(res);
  //       }
  //     });
  //   });
  // }

  // delete(id) {
  //   let sql = "DELETE FROM db_team.teams WHERE id=?;";
  //   return new Promise((resolve, reject) => {
  //     conection.query(sql, id, (error, result) => {
  //       if (error) {
  //         return reject(`A deleção do objeto com id ${id} falhou`);
  //       } else {
  //         const res = JSON.parse(JSON.stringify(result));
  //         return resolve(res);
  //       }
  //     });
  //   });
  // }

  // update(id, newTeam) {
  //   let sql = "UPDATE db_team.teams SET ? WHERE id=?;";
  //   return new Promise((resolve, reject) => {
  //     conection.query(sql, [newTeam, id], (error, result) => {
  //       if (error) {
  //         return reject(`A atualização do time com id ${id} falhou`);
  //       } else {
  //         const res = JSON.parse(JSON.stringify(result));
  //         return resolve(res);
  //       }
  //     });
  //   });
  // }
}

export default new TeamsRepositories();
