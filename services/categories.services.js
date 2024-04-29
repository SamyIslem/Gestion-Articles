const { db } = require("../utils/db");
const { promisify } = require("util");
const query = promisify(db.query).bind(db);

const createCategory = async (category) => {
  const result = await query(`insert into categories (name,createdBy) 
  values("${category.name}", " ${category.createdBy} " ) `);

  if (!result) return false;
  return category;
};

const getCategories = async () => {
  try {
    const categories = await query("select * from categories ");
    return categories;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getCategory = async (id) => {
  try {
    const category = await query(` select * from categories where id =${id} `);
    return category[0];
    console.log(admin);
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteCategory = async (id) => {
  try {
    const response = await query(`DELETE FROM categories where id =${id}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
};
