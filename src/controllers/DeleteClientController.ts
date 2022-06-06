import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeleteClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const client = await prismaClient.client.delete({
      where: {
        id,
      },
    });

    return res.json(client);
  }
}
