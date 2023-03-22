import mongoose from "../db/connection.js";
const Schema = mongoose.Schema

const Food = new Schema({
    food_id: String,
    serving_id: String,
    food_entry_id: String,
    dateint: Number, 
    food_type: String,
    brand_type: String,
    meal_type: String,
    calories: Number,
    carbohydrate: String,
    fiber: String,
    sugar: String,
    added_sugars: String,
    protein: String,
    fat: String,
    saturated_fat: String,
    polyunsaturated_fat: String,
    monounsaturated_fat: String,
    trans_fat: String,
    cholesterol: Number,
    sodium: Number,
    potassium: Number,
    vitamin_d: Number,
    vitamin_a: Number,
    vitamin_c: String,
    calcium: Number,
    iron: String,
    targetCalories: Number,
    targetProteins: Number,
    targetCarbohydrates: Number,
    targetFat: Number
})

export default mongoose.model('Food', Food)