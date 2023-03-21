import mongoose from "../db/connection.js";
const Schema = mongoose.Schema

const Food = new Schema({
    food_id: String,
    serving_id:
    food_entry_id:
    brand_type: String,
    meal_type: String,
    calories: Number,
    carbohydrate: Number,
    protein: Number,
    fat: Number,
    targetCalories: Number,
    targetProteins: Number,
    targetCarbohydrates: Number,
    targetFat: Number
})

export default mongoose.model('Food', Food)