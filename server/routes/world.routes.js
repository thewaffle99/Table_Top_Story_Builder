const WorldController = require("../controllers/world.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.get("/api/worlds", WorldController.getAllWorlds);
  app.post("/api/worlds", authenticate, WorldController.createWorld);
  app.get(
    "/api/worldsByUser/:userName",
    authenticate,
    WorldController.findAllWorldsByUser
  );
  app.get("/api/world/:id", WorldController.getWorld);
  app.put("/api/world/:id", WorldController.updateWorld);
  app.delete("/api/world/:id", WorldController.deleteWorld);
};
