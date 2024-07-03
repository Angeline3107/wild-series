const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/Welcome", sayWelcome);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
