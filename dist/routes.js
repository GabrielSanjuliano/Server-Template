"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateClientController_1 = require("./controllers/CreateClientController");
var CreateLendingController_1 = require("./controllers/CreateLendingController");
var router = (0, express_1.Router)();
exports.router = router;
var createClient = new CreateClientController_1.CreateClientController();
var createLending = new CreateLendingController_1.CreateLendingController();
router.post("/client", createClient.handle);
router.post("/lending", createLending.handle);
//# sourceMappingURL=routes.js.map