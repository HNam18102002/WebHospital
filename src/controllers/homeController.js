import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage",{data: JSON.stringify(data)});
  } catch (e) {
    console.log(e);
  }
};

let getPage = (req, res) => {
  return res.send("Hello");
};

module.exports = {
  getHomePage: getHomePage,
  getPage: getPage,
};
