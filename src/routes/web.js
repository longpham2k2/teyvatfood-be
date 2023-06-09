import express from "express";
import homeController from "../controllers/homeController";
import foodController from "../controllers/foodController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHome);
  router.get("/about", homeController.getAbout);

  // API
  router.get("/api/user", homeController.apiGetUser);
  
  router.get("/api/food/", foodController.getAll);
  router.post("/api/food/", foodController.create);
  router.get("/api/food/:id", foodController.get);
  router.put("/api/food/:id", foodController.update);
  router.patch("/api/food/:id", foodController.patch);
  router.delete("/api/food/:id", foodController.destroy);

  router.get("/api/food/types", foodController.getAllTypes);

  return app.use("/", router);
};

module.exports = initWebRoutes;
