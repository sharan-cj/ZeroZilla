import Express from "express";
import { initAgencyRouter } from "./features/Agency";
import { initClientRouter } from "./features/Client/router";

const app = Express();
app.use(Express.json());

// initialize all routes

(() => {
  const agencyRouter = Express.Router();
  initAgencyRouter(agencyRouter);
  app.use("/agency", agencyRouter);

  const clientRouter = Express.Router();
  initClientRouter(clientRouter);
  app.use("/client", clientRouter);
})();

export default app;
