const data = require("../../db.json");
const fs = require("fs");

exports.get = (req, res, next) => {
  const { players } = data;

  res.status(200).send(players);
};

exports.post = (req, res, next) => {
  const player = req.body;
  const { players } = data;

  players.push(player);
  const newData = { ...data, players };

  console.log("data", newData);

  fs.writeFileSync("../../db.json", JSON.stringify(newData), (err, data) => {
    if (err) {
      return console.log(err);
    }

    return res
      .status(201)
      .send("Requisição recebida com sucesso!" + JSON.stringify(player));
  });
  // fs.writeFileSync()
  fs.close();
};
exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
