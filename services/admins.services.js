const { response } = require("express");
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



const editAdmin = async (id, admin) => {
  const sqlQuery = ` UPDATE admins SET ${
    admin.firstname ? `firstname = "${admin.firstname}", ` : " "
  } ${admin.lastname ? `lastname = "${admin.lastname}", ` : " "} 
  ${admin.createdby ? `createdby = "${admin.createdby}", ` : " "} 
  updated_at = NOW()
  WHERE id = ${id} `;

  const response = await query(sqlQuery)
  if (!response) return false;
  return admin;

};

module.exports = {
  createAdmin,
  getAdmins,
  isAdminExist,
  getAdmin,
  editAdmin
};
