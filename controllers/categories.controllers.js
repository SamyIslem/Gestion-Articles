const categoriesServices = require("../services/categories.services");

const createCategory = async (req, res) => {
  const { name, createdBy } = req.body;

  const category = {
    name,
    createdBy,
  };

  try {
    const response = await categoriesServices.createCategory(category);

    res.status(201).json({ success: true, category: response.category });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoriesServices.getCategories();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoriesServices.getCategory(id);
    res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await categoriesServices.deleteCategory(id);
    console.log(response);
    const categories = await categoriesServices.getCategories();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



module.exports = {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
};
