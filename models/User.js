import mongoose from "../db/connection.js";
import Meals from "./MealPlans"

const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String, required: true, unique: true },
    user_email: { type: String, required: true, unique: true },
    user_firstname: { type: String, required: true },
    user_lastname: { type: String, required: true },
    user_city: String,
    user_state_province: String,
    user_country: String,
    user_mealPlans: [{ type: Schema.Types.ObjectId, ref: `Meals` }]  
})


export default mongoose.model("User", User);
