import app from "./src/app.js";
import conection from "./infra/conection.js";

const PORT = 3000;

// Conectar DB
conection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Conexão feita com sucesso!");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  }
});
