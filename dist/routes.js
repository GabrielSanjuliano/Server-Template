"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateClientController_1 = require("./controllers/CreateClientController");
var CreateLendingController_1 = require("./controllers/CreateLendingController");
var DeleteClientController_1 = require("./controllers/DeleteClientController");
var DeleteLendingController_1 = require("./controllers/DeleteLendingController");
var FindAllClientsController_1 = require("./controllers/FindAllClientsController");
var FindAllLendingsController_1 = require("./controllers/FindAllLendingsController");
var FindClientController_1 = require("./controllers/FindClientController");
var FindLendingController_1 = require("./controllers/FindLendingController");
var router = (0, express_1.Router)();
exports.router = router;
//POST
var createClient = new CreateClientController_1.CreateClientController();
var createLending = new CreateLendingController_1.CreateLendingController();
//GET
var findClient = new FindClientController_1.FindClientController();
var findLending = new FindLendingController_1.FindLendingController();
var findAllClients = new FindAllClientsController_1.FindAllClientController();
var findAllLendings = new FindAllLendingsController_1.FindAllLendingController();
//DELETE
var deleteClient = new DeleteClientController_1.DeleteClientController();
var deleteLending = new DeleteLendingController_1.DeleteLendingController();
//POST
router.post("/client", createClient.handle);
router.post("/lending", createLending.handle);
//GET
router.get("/client/:id", findClient.handle);
router.get("/lending/:id", findLending.handle);
router.get("/clients", findAllClients.handle);
router.get("/lendings", findAllLendings.handle);
//DELETE
router["delete"]("/client/:id", deleteClient.handle);
router["delete"]("/lending/:id", deleteLending.handle);
//# sourceMappingURL=routes.js.map