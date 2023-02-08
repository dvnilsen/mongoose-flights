const express = require("express");
const router = express.Router();
const destinationsCtrl = require("../controllers/destinations");

// all routes start with root
router.post("/flights/:id/destinations", destinationsCtrl.create);


module.exports = router;