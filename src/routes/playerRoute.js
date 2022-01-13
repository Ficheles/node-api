const express = require("express");
const { route } = require(".");
const router = express.Router();
const controller = require("../controllers/playerController");
router.get("/", controller.get);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
module.exports = router;
