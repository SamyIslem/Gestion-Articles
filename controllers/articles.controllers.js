const articlesServices = require("../services/articles.services");

const createArticle = async (req, res) => {
  const { titre, contenu, id_categorie, created_at } = req.body;

  const article = {
    titre,
    contenu,
    id_categorie,
    created_at: new Date(),
  };
  try {
    const response = await articlesServices.createArticle(article);

    res.status(201).json({ success: true, article: response.article });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

const getTotalNumber = async (req, res) => {
  try {
    const number = await articlesServices.getTotalNumber();
    res.status(200).json({
      success: true,
      number,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const getArticleByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const article = await articlesServices.getArticleByTitle(title);
    res.status(200).json({
      success: true,
      article,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await articlesServices.getArticles();
    res.status(200).json({
      success: true,
      articles,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const deleteArticles = async (req, res) => {
  try {
    const articles = await articlesServices.deleteArticles();
    res.status(200).json({
      success: true,
      articles,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { title } = req.params;
    const result = await articlesServices.deleteArticle(title);
    console.log(result);
    const articles = await articlesServices.getArticles();
    res.status(200).json({
      success: true,
      articles,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const editArticle = async (req, res) => {
  const { id } = req.params;
  const { titre, contenu, id_categorie,} = req.body;
  const article = {
    titre,
    contenu,
    id_categorie
  };
  try {
    const response = await articlesServices.editArticle(id,article);

    res.status(201).json({ success: true, article: response.article });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
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
