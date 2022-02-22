const NPCController = require("../controllers/npc.controller");

module.exports = (app) => {
  app.post("/api/npcs", NPCController.createNPC);
  app.get("/api/npcs", NPCController.getAllNPCs);
  app.get("/api/npc/:id", NPCController.getNPC);
  app.put("/api/npc/:id", NPCController.updateNPC);
  app.delete("/api/npc/:id", NPCController.deleteNPC);
};
