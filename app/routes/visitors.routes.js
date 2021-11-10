module.exports = app => {
  const visitors = require("../controllers/visitors.controller.js");
  app.get('/visitors', visitors.setData);
  app.get('/refresh', visitors.offLoadData);
};
