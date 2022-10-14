module.exports = app => {
    const docentes = require("../controllers/docente.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", docentes.create);

    // Retrieve all Tutorials
    router.get("/", docentes.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", docentes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", docentes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", docentes.delete);
  
    app.use('/api/docentes', router);
  };