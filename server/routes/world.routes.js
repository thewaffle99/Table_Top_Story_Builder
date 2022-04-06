const WorldController = require("../controllers/world.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/worlds", authenticate, WorldController.createWorld);
  app.get(
    "/api/worlds/:userName",
    authenticate,
    WorldController.findAllWorldsByUser
  );
  app.get("/api/worlds", authenticate, WorldController.getAllWorlds);
  app.get("/api/world/:id", WorldController.getWorld);
  app.put("/api/world/:id", WorldController.updateWorld);
  app.delete("/api/world/:id", WorldController.deleteWorld);
};
