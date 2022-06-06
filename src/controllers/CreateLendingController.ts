import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateLendingController {
  async handle(request: Request, response: Response) {
    const { client_id, lending_value, received_value } = request.body;

    const lending = await prismaClient.lending.create({
      data: {
        client_id,
        lending_value,
        received_value,
      },
    });

    return response.json(lending);
  }
}
