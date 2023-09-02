let getHomePage = (req, res) => {
  return res.render('homePage.ejs');// không cần thêm đường dẫn là do chúng ta đã set view ở patch mặc định
};
module.exports = {
  getHomePage: getHomePage,
};
