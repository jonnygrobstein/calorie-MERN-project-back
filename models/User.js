import mongoose from "../db/connection.js";

const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  username: String,
  firstname: String,
  lastname: String,
  city: String,
  state_province: String,
  country: String,
});

export default mongoose.model("User", User);
