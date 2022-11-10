import { Router } from "express";
import { updateClientDetailBody, validate } from "../common/validations";
import { updateClientDetails } from "./controller";

export const initClientRouter = (router: Router) => {
  router.patch(
    "/:clientId",
    validate(updateClientDetailBody),
    updateClientDetails
  );
};
