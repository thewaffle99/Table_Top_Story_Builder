const PlaceController = require("../controllers/place.controller");

module.exports = (app) => {
  app.post("/api/places", PlaceController.createPlace);
  app.get("/api/places", PlaceController.getAllPlaces);
  app.get("/api/place/:id", PlaceController.getPlace);
  app.put("/api/place/:id", PlaceController.updatePlace);
  app.delete("/api/place/:id", PlaceController.deletePlace);
};
