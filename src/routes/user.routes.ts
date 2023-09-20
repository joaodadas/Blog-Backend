import { Express } from "express";

const userRoutes = (app: Express) => {
  app.get("/teste", () => console.log("chegou na rota"));
};

export default userRoutes;
