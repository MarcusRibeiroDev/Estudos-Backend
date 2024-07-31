import conection from "../database/conection.js";
import TeamsRepositories from "../repositories/TeamsRepositories.js";

class TeamsControllers {
  async index(req, res) {
    const result = await TeamsRepositories.findAll();
    res.json(result);
  }

  show(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM db_team.teams WHERE id=?;";
    conection.query(sql, id, (error, result) => {
      let response = result[0];

      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(response);
      }
    });
  }

  store(req, res) {
    let newTeam = req.body;
    let sql = "INSERT INTO db_team.teams SET ?;";
    conection.query(sql, newTeam, (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(201).json(result);
      }
    });
  }

  delete(req, res) {
    let id = req.params.id;
    let sql = "DELETE FROM db_team.teams WHERE id=?;";
    conection.query(sql, id, (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }

  update(req, res) {
    let id = req.params.id;
    let newTeam = req.body;
    let sql = "UPDATE db_team.teams SET ? WHERE id=?;";
    conection.query(sql, [newTeam, id], (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

export default new TeamsControllers();
