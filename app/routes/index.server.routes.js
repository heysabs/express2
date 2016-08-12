module.exports = function(app) {

  var staticPageController = require('../controllers/staticpage.controller');

  //ROUTING

  app.get('/', staticPageController.renderHome);
  app.get('/about', staticPageController.renderAbout);
  app.get('/contact', staticPageController.renderContact);

};
