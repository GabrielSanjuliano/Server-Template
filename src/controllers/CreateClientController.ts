import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, number, address, document } = request.body;

    const client = await prismaClient.client.create({
      data: {
        name,
        number,
        address,
        document,
      },
    });
    return response.json(client);
  }
}
