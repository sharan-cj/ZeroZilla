import { Router } from "express";
import { createAgencyAndClientBody, validate } from "../common/validations";
import { addAgencyAndClient, fetchAgenciesWithClients } from "./controller";

export const initAgencyRouter = (router: Router) => {
  router.post("/", validate(createAgencyAndClientBody), addAgencyAndClient);

  router.get("/top-clients", fetchAgenciesWithClients);
};
