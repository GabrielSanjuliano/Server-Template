import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateClientController {
  async handle(req: Request, res: Response) {
    const { id, name, number, address, document } = req.body;

    const client = await prismaClient.client.update({
      where: {
        id,
      },
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
