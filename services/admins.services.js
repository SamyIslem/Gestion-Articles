const { db } = require("../utils/db");

const { promisify } = require("util");

const query = promisify(db.query).bind(db);

const getAdmins = async () => {
  const admins = await query(" select * from admins");
  return admins;
};

const getAdmin = async (id) => {
  const admin = await query(` SELECT * FROM admins 
  WHERE id=${id} `);

  return admin[0];
};

const isAdminExist = async (id) => {
  try {
    const admin = await query(` SELECT * FROM admins
  WHERE id=${id} `);

    if (!admin) return false;
    return true;
  } catch (err) {}
};

const createAdmin = async (admin) => {
  try {
    const exist = await isAdminExist(admin.createdby);

    if (!exist) return false;

    const results = await query(`insert into admins 
        (firstname,lastname,createdby)
        VALUES("${admin.firstname}" ,"${admin.lastname}", "${admin.createdby}" )`);

    if (!results) {
      return false;
    }
    return admin;
  } catch (err) {}
};

const alterFirstName = async (id, firstname) => {
  try {
    const exist = await isAdminExist(id);

    if (!exist) return false;
    await query(`UPDATE admins SET firstname="${firstname}" where id =${id} `);
  } catch (err) {
    throw new Error(err.message);
  }
};



module.exports = {
  createAdmin,
  getAdmins,
  isAdminExist,
  getAdmin,
  alterFirstName,
};
