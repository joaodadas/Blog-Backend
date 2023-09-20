import userRoutes from "./user.routes";
import { Express } from "express";
const routes = (app: Express) => {
  userRoutes(app);
};

export default routes;
