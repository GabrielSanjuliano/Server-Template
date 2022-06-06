import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { name, number, address, document } = req.body;

    const client = await prismaClient.client.create({
      data: {
        name,
        number,
        address,
        document,
      },
    });
    return res.json(client);
  }
}
