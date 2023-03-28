import mongoose from "../db/connection.js";

const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  email: String,
  password: String,
  user_firstname: String,
  user_lastname: String,
  user_city: String,
  user_state_province: String,
  user_country: String,
});

export default mongoose.model("User", User);
