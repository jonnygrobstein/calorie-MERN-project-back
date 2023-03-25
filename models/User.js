import mongoose from "../db/connection.js";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.model("User", UserSchema);
