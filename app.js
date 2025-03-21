import express from "express";

const app = express();
app.use(express.json());

const users = ["Jani", "Anna", "Bob", "Cedrik"];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= users.length) {
    return res.status(404).json({ message: "Nem található" });
  }
  res.status(200).json(users[id]);
});

app.post("/users", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ message: "Invalid data" });
  }
  users.push(name);
  res.status(200).json(name);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= users.length) {
    return res.status(404).json({ message: "Nem található" });
  }
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ message: "Invalid data" });
  }
  users[id] = name;
  res.status(200).json(name);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= users.length) {
    return res.status(404).json({ message: "Not found" });
  }
  users.splice(id, 1);
  res.status(200).json({ message: "Sikeres törlés" });
});

app.listen(3000, () => {
  console.log("Müködik");
});
