const { db } = require("../utils/db");
const { promisify } = require("util");
const query = promisify(db.query).bind(db);

const createArticle = async (article) => {
  const result = await query(`insert into articles 
    (titre,contenu,id_categorie,created_at)
    values ("${article.titre}", "${article.contenu}"," ${article.id_categorie}", "${article.created_at} " ) `);

  if (!result) {
    return false;
  }
  return article;
};

const getTotalNumber = async () => {
  const number = await query("select count(id) as count from articles");
  console.log(number);
  return number[0].count;
};

const getArticleByTitle = async (title) => {
  const article = await query(`select * from articles where titre=${title}`);
  console.log(article);
  return article[0];
};

const getArticles = async (req, res) => {
  const articles = await query("select * from articles");
  return articles;
};

const deleteArticles = async () => {
  await query("delete from articles");
};

const deleteArticle = async (title) => {
  try {
    const result = await query(`DELETE FROM articles where titre=${title}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

const editArticle = async (id, article) => {
  const sqlQuery = `UPDATE articles SET ${
    article.titre ? `titre =  "${article.titre}",` : ""
  } ${article.contenu ? `contenu = "${article.contenu}",` : ""} 
  ${article.id_categorie ? `id_categorie =  ${article.id_categorie},` : ""}
    updated_at = NOW()
    WHERE id = ${id}
   `;

  console.log(sqlQuery);

  const response = await query(sqlQuery);
  if (!response) return false;
  return article;
};

module.exports = {
  createArticle,
  getTotalNumber,
  getArticleByTitle,
  getArticles,
  deleteArticles,
  deleteArticle,
  editArticle,
};
