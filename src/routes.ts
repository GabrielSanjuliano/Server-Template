import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";
import { CreateLendingController } from "./controllers/CreateLendingController";
import { FindAllClientController } from "./controllers/FindAllClientsController";
import { FindAllLendingController } from "./controllers/FindAllLendingsController";
import { FindClientController } from "./controllers/FindClientController";
import { FindLendingController } from "./controllers/FindLendingController";

const router = Router();

//POST
const createClient = new CreateClientController();
const createLending = new CreateLendingController();

//GET
const findClient = new FindClientController();
const findLending = new FindLendingController();
const findAllClients = new FindAllClientController();
const findAllLendings = new FindAllLendingController();
//POST
router.post("/client", createClient.handle);
router.post("/lending", createLending.handle);

//GET
router.get("/client/:id", findClient.handle);
router.get("/lending/:id", findLending.handle);
router.get("/clients", findAllClients.handle);
router.get("/lendings", findAllLendings.handle);

export { router };
