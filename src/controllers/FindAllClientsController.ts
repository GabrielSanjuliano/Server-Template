import { Request, Response } from "express";
import { request } from "http";
import { prismaClient } from "../database/prismaClient";

export class FindAllClientController {
  async handle(req: Request, res: Response) {
    const clients = await prismaClient.client.findMany();
    return res.json(clients);
  }
}
