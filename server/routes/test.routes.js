const testController = require("../controllers/test.controller");

module.exports = function(app){
    app.get('/test',testController.test);
    app.post('/test/model', testController.createTest);
}