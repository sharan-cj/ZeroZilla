import { Request, Response } from "express";
import { errorResponse } from "../common/helpers";
import { Clients } from "./models";

export const updateClientDetails = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  console.log(`Entering updateClientDetails: ${clientId}`);

  const client = await Clients.find({ clientId });
  if (!client) {
    errorResponse(res, `Client ${clientId} NOT FOUND `, 404);
  }

  await Clients.findOneAndUpdate({ clientId }, req.body);
  res.status(204).json({ message: "Success" });

  console.log(`Updated details for the client ${clientId}`);

  console.log(`EXITING updateClientDetails`);
};
