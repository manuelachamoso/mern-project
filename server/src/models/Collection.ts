import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const CollectionSchema = new Schema({
  title: String,
});

const CollectionModel = mongoose.model("Collection", CollectionSchema);

export default CollectionModel;