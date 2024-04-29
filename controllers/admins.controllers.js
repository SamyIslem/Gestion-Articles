const adminsServices = require("../services/admins.services");
const { getArticleByTitle } = require("./articles.controllers");

const getAdmins = async (req, res) => {
  const admins = await adminsServices.getAdmins();
  res.status(200).json({
    admins,
  });
};

const getAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(id)) {
      res.status(400).json({
        success: false,
        message: "L'identifiant doit etre un entier  ",
      });
      return;
    }

    const admin = await adminsServices.getAdmin(id);
    res.status(200).json({
      success: true,
      admin,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createAdmin = async (req, res) => {
  const { firstname, lastname, createdby } = req.body;

  const admin = {
    firstname,
    lastname,
    createdby,
  };
  try {
    const response = await adminsServices.createAdmin(admin);

    if (!response) {
      res.status(400).json({ success: false, message: "Admin inexistant" });
    }

    res.status(201).json({ success: true, admin: response.admin });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const alterFirstName = async (req, res) => {
  try {
    const { firstname } = req.body;
    const { id } = req.params;

    if (isNaN(id)) {
      res.status(400).json({
        success: false,
        message: "L'identifiant doit etre un entier  ",
      });
      return;
    }
    await adminsServices.alterFirstName(id, firstname);

    res.status(200).json({
      success: true,
      message: "l'administrateur a été modifié avec succès ",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
    console.log(err);
  }
};

module.exports = {
  createAdmin,
  getAdmins,
  getAdmin,
  alterFirstName,
};
