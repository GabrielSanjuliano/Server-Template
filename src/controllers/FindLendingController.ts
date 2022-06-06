import { Request, Response } from "express";
import { request } from "http";
import { prismaClient } from "../database/prismaClient";

export class FindLendingController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const lending = await prismaClient.lending.findFirst({
      where: {
        id,
      },
    });
    return res.json(lending);
  }
}
