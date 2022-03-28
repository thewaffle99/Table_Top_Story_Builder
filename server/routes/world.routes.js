const WorldController = require("../controllers/world.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/worlds", WorldController.createWorld);
  app.get("/api/worlds", authenticate, WorldController.getAllWorlds);
  app.get("/api/world/:id", WorldController.getWorld);
  app.put("/api/world/:id", WorldController.updateWorld);
  app.delete("/api/world/:id", WorldController.deleteWorld);
};
