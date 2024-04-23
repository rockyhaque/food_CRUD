const FoodsModel = require("../models/FoodsModel");

// Create
exports.CreateFood = (req, res) => {
  let reqBody = req.body;
  FoodsModel.create(reqBody)
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({ status: err });
    });
};

// Read
exports.ReadFood = (req, res) => {
  let Query = {};
  let Projection = "FoodName FoodCode Img Price Qty TotalPrice FoodCategory";
  FoodsModel.find(Query, Projection)
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({ status: err });
    });
};
exports.readOne = (req, res) => {
  let reqBody = req.body;
  let { id } = req.params;
  FoodsModel.findOne({ _id: id }, reqBody)
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(400).json({ status: err });
    });
};

// Update
exports.UpdateFood = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  let reqBody = req.body;

  FoodsModel.updateOne(Query, reqBody)
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({ status: err });
    });
};

// Delete
exports.DeleteFood = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };

  FoodsModel.deleteOne(Query)
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({ status: err });
    });
};
