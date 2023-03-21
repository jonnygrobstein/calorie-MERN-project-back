import mongoose from "../db/connection.js";
const Schema = mongoose.Schema

const Meals = new Schema({
    foods: [String],
    calculatedCalories: Number,
    calculatedFat: Number,
    calculatedProtein: Number,
    calculatedCarbs: Number
})


export default mongoose.model('Meals', Meals)