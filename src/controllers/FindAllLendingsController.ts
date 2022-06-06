import { Request, Response } from "express";
import { request } from "http";
import { prismaClient } from "../database/prismaClient";

export class FindAllLendingController {
  async handle(req: Request, res: Response) {
    const lendings = await prismaClient.lending.findMany();
    return res.json(lendings);
  }
}
