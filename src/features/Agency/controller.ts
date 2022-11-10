import { Request, Response } from "express";
import { Clients } from "../Client/models";
import { errorResponse } from "../common/helpers";
import { Agencies } from "./models";

export const addAgencyAndClient = async (req: Request, res: Response) => {
  console.log("Entering addAgencyAndClient");
  const { agency, client } = req.body;
  try {
    await Agencies.create(agency);
    await Clients.create(client);

    res.status(201).json({ message: "Client and Agency are created" });
  } catch (error: any) {
    errorResponse(res, error.message);
  }

  console.log("EXITING addAgencyAndClient");
};

export const fetchAgenciesWithClients = async (req: Request, res: Response) => {
  console.log("Entering fetchAgenciesWithClients");
  let limit = 3;
  const { top } = req.query;
  if (top) {
    limit = +top;
  }
  const clients = await Clients.find().sort({ totalBill: -1 }).limit(limit);

  const response = await Promise.all(
    clients.map(async (client) => {
      const agency = await Agencies.findOne({ agencyId: client.agencyId });
      return {
        AgencyName: agency?.name,
        ClientName: client.name,
        TotalBill: client.totalBill,
      };
    })
  );

  res.status(200).json({ data: response });

  console.log("EXITING fetchAgenciesWithClients");
};
