import db from "../models/index";

let getHome = (req, res) => {
  res.render("home.ejs");
};

let getAbout = (req, res) => {
  res.render("about.ejs");
};

let apiGetUser = async (req, res) => {
  try {
    let data = await db["User"].findAll();
    console.log(data);
    res.end();
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getHome: getHome,
  getAbout: getAbout,
  apiGetUser: apiGetUser,
};
