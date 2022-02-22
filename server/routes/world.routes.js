const WorldController = require("../controllers/world.controller");

module.exports = (app) => {
  app.post("/api/worlds", WorldController.createWorld);
  app.get("/api/worlds", WorldController.getAllWorlds);
  app.get("/api/world/:id", WorldController.getWorld);
  app.put("/api/world/:id", WorldController.updateWorld);
  app.delete("/api/world/:id", WorldController.deleteWorld);
};
