import { Express } from "express";
import { handleCreateUser } from "../controllers/user.controller";

const userRoutes = (app: Express) => {
  app.get("/user", handleCreateUser);
};

export default userRoutes;
