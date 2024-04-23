const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    FoodName: { type: String },
    FoodCode: { type: String },
    Img: { type: String },
    Price: { type: String },
    Qty: { type: String },
    Category: { type: String },
    CreateDate: { type: Date, default: Date.now() }
  },
  { versionKey: false }
);


const FoodsModel = mongoose.model('foods', DataSchema)
module.exports = FoodsModel;