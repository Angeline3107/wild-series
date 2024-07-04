// server/app/controllers/categories.js

// Some data to make the trick
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

const getAllCategories = (req, res) => {
  res.json(categories);
};

const getCategoryById = (req, res) => {
  const { id } = req.params;
  const category = categories.find((cat) => cat.id === parseInt(id, 10));
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
};
