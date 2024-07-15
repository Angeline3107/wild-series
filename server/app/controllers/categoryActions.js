const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll(); // Assurez-vous que cette ligne fonctionne et que `tables.category.readAll()` existe.
  res.json(categoriesFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { browse, read };
