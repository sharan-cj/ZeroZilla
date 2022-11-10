import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (err: any) {
      return res.status(400).json({ type: err.name, message: err.message });
    }
  };

const client = yup.object({
  name: yup.string().required().max(100),
  agencyId: yup.string().required().max(100),
  clientId: yup.string().required().max(100),
  email: yup.string().required().max(100),
  phoneNumber: yup.string().required().max(100),
  totalBill: yup.number().required(),
});

const agency = yup.object({
  agencyId: yup.string().required().max(100),
  name: yup.string().required().max(100),
  address1: yup.string().required().max(255),
  address2: yup.string().max(255),
  state: yup.string().required().max(255),
  city: yup.string().required().max(255),
  phoneNumber: yup.string().required().max(100),
});

export const createAgencyAndClientBody = yup.object({ client, agency });

export const updateClientDetailBody = yup.object({
  name: yup.string().max(100),
  agencyId: yup.string().max(100),
  clientId: yup.string().max(100),
  email: yup.string().max(100),
  phoneNumber: yup.string().max(100),
  totalBill: yup.number(),
});
