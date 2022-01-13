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

  const contentFile = JSON.stringify(newData);
  const filename = "db.json";

  fs.writeFile(filename, contentFile, (err) => {
    if (err) console.log(err);
    else {
      // console.log("File written successfully\n");
      // console.log("The written has the following contents:");
      // console.log(fs.readFileSync(filename, "utf8"));
      res.status(201).send(`Requisição recebida com sucesso! `);
    }
  });
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
