let users = []; // Simulação de DB

function statusApi(req, res) {
  return res.status(200).json("Minha API está On");
}

function createUser(req, res) {
  const { name, idade } = req.body;
  const id = crypto.randomUUID();

  const newUser = {
    id,
    name,
    idade,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
}

function listAllUsers(req, res) {
  return res.status(200).json(users);
}

function listUser(req, res) {
  const findedUser = users.find((user) => user.id === req.params.id);
  if (!findedUser) return res.status(404).json("Não encontrado");
  return res.status(200).json(findedUser);
}

function deleteUser(req, res) {
  const findedUser = users.find((user) => user.id === req.params.id);
  if (!findedUser) return res.status(404).json("Não encontrado para deleção");
  users = users.filter((user) => user.id !== req.params.id);
  return res.status(200).json("Usuário excluido");
}

function updateUser(req, res) {
  const { name, idade } = req.body;

  const index = users.findIndex((user) => user.id === req.params.id);

  if (index === -1) {
    return res.status(404).json("Não encontrado para atualização");
  }

  const updatedUser = {
    id: req.params.id,
    name,
    idade,
  };

  users[index] = updatedUser;

  return res.status(200).json(updatedUser);
}

module.exports = {
  statusApi,
  createUser,
  listAllUsers,
  listUser,
  deleteUser,
  updateUser,
};
