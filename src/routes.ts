import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";
import { CreateLendingController } from "./controllers/CreateLendingController";
import { DeleteClientController } from "./controllers/DeleteClientController";
import { DeleteLendingController } from "./controllers/DeleteLendingController";
import { FindAllClientController } from "./controllers/FindAllClientsController";
import { FindAllLendingController } from "./controllers/FindAllLendingsController";
import { FindClientController } from "./controllers/FindClientController";
import { FindLendingController } from "./controllers/FindLendingController";
import { UpdateClientController } from "./controllers/UpdateClientController";
import { UpdateLendingController } from "./controllers/UpdateLendingController";

const router = Router();

//POST
const createClient = new CreateClientController();
const createLending = new CreateLendingController();

//GET
const findClient = new FindClientController();
const findLending = new FindLendingController();
const findAllClients = new FindAllClientController();
const findAllLendings = new FindAllLendingController();

//put
const updateClient = new UpdateClientController();
const updateLending = new UpdateLendingController();

//DELETE
const deleteClient = new DeleteClientController();
const deleteLending = new DeleteLendingController();

//POST
router.post("/client", createClient.handle);
router.post("/lending", createLending.handle);

//GET
router.get("/client/:id", findClient.handle);
router.get("/lending/:id", findLending.handle);
router.get("/clients", findAllClients.handle);
router.get("/lendings", findAllLendings.handle);

//PUT
router.put("/client", updateClient.handle);
router.put("/lending", updateLending.handle);

//DELETE
router.delete("/client/:id", deleteClient.handle);
router.delete("/lending/:id", deleteLending.handle);

export { router };
