"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateClientController_1 = require("./controllers/CreateClientController");
var CreateLendingController_1 = require("./controllers/CreateLendingController");
var FindClientController_1 = require("./controllers/FindClientController");
var router = (0, express_1.Router)();
exports.router = router;
//POST
var createClient = new CreateClientController_1.CreateClientController();
var createLending = new CreateLendingController_1.CreateLendingController();
//GET
var findClient = new FindClientController_1.FindClientController();
var findLending = new FindClientController_1.FindClientController();
var findAllClients = new FindClientController_1.FindClientController();
var findAllLendings = new FindClientController_1.FindClientController();
//POST
router.post("/client", createClient.handle);
router.post("/lending", createLending.handle);
//GET
router.get("/client/:id", findClient.handle);
router.get("/lending/:id", findLending.handle);
router.get("/clients", findAllClients.handle);
router.get("/lendings", findAllLendings.handle);
//# sourceMappingURL=routes.js.map