let USERS = [
  { id: 1, name: "Usuario 1", email: "usuario1@example.com" },
  { id: 2, name: "Usuario 2", email: "usuario2@example.com" },
  { id: 3, name: "Usuario 3", email: "usuario3@example.com" },
];

const getUsers = (req, res) => {
  res.send(USERS);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = USERS.find((user) => user.id === userId);
  if (user) {
    res.send(`Soy el nombre ${user.name}. Soy el email ${user.email}`);
  } else {
    res.status(404).send("Usuario no encontrado");
  }
};
const UpdateById = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = USERS.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).send("El usuario no existe");
  }

  if (name) {
    USERS[userIndex].name = name;
  }

  if (email) {
    USERS[userIndex].email = email;
  }

  res.send(USERS[userIndex]);
};

const deleteByID = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = USERS.filter((user) => user.id === userId);
  if (user) {
    res.send(
      `SE ha eliminado el nombre ${user.name}. Soy el email ${user.email}`
    );
  } else {
    res.status(404).send("Usuario no encontrado");
  }
};
const addUser = (req, res) => {
  const { name, email } = req.body;
  const newIndex = USERS.length;
  let arrayContador = [];
  for (let index = 0; index < newIndex; index++) {
    arrayContador[index] = index;
  }
  const newUser = { id: newIndex, name: name, email: email };
  USERS.push(newUser);
  res.send(newUser);
};

module.exports = { getUsers, getUserById, UpdateById, deleteByID, addUser };

// router.post("/", (req, res) => {
//   res.send(`Soy post crear  ${JSON.stringify(req.body)}`);
// });
