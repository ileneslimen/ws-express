const express = require("express");

const app = express();

var users = [
  { id: 0, name: "ali" },
  { id: 1, name: "salah" },
  { id: 2, name: "ahmed" },
];
// to translate to json
app.use(express.json());

// method get  to read the list
// path /users
app.get("/users", (req, res) => {
  res.send({ msg: "list of users", users });
});

//method post   to create a new object
//   /users/add
//req.body
app.post("/users/add", (req, res) => {
  console.log(req.body);
  users = [...users, req.body];
  res.send({ msg: "user added", users });
});

// method delete
//  req.params
//  /users/:id

app.delete("/users/:id", (req, res) => {
  console.log(req.params);
  users = users.filter((el) => el.id != req.params.id);
  res.send({ msg: "_user deleted", users });
});

// method put update
// req.body req.params
//   / users/:id

app.put("/users/:id", (req, res) => {
  users = users.map((el) =>
    el.id == req.params.id ? { ...el, ...req.body } : el
  );

  res.send({ msg: "user updated", users });
});

// method get
// req.params
//  /users/:id
app.get("/users/:id", (req, res) => {
  user = users.find((el) => el.id == req.params.id);
  res.send({ msg: "your user", user });
});
const port = 8080;
app.listen(port, () => console.log(`port is running on port ${port}`));
