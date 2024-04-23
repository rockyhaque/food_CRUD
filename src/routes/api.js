const express = require('express');
const FoodsController = require('../controllers/FoodsController');
const router = express.Router();

// Create
router.post("/CreateFood", FoodsController.CreateFood);

// Read
router.get("/ReadFood", FoodsController.ReadFood);
router.get("/ReadFood/:id", FoodsController.readOne);

// Update
router.post("/UpdateFood/:id", FoodsController.UpdateFood);

// Delete
router.get("/DeleteFood/:id", FoodsController.DeleteFood);


module.exports = router;