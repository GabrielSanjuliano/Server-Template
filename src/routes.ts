import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";
import { CreateLendingController } from "./controllers/CreateLendingController";

const router = Router();

const createClient = new CreateClientController();
const createLending = new CreateLendingController();

router.post("/client", createClient.handle);
router.post("/lending", createLending.handle);

export { router };
