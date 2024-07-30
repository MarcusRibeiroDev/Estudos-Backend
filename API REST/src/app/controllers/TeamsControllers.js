class TeamsControllers {
  index(req, res) {
    let sql = "SELECT * FROM db_team.teams;";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }

  show(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM db_team.teams WHERE id=?;";
    connection.query(sql, id, (error, result) => {
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
    connection.query(sql, newTeam, (error, result) => {
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
    connection.query(sql, id, (error, result) => {
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
    connection.query(sql, [newTeam, id], (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

export default new TeamsControllers();
