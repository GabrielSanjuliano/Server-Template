import { Request, Response } from "express";
import { request } from "http";
import { prismaClient } from "../database/prismaClient";

export class FindClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const client = await prismaClient.client.findFirst({
      where: {
        id,
      },
    });
    return res.json(client);
  }
}
