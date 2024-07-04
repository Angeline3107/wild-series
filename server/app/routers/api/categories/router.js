// server/app/routers/categories/router.js

const express = require("express");
const {
  getAllCategories,
  getCategoryById,
} = require("../../../controllers/categoryActions");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

module.exports = router;
