import mongoose from "../db/connection.js";
import Food from './Food.js'
const Schema = mongoose.Schema

const Meals = new Schema({
    date: String,
    mealType: { type: String, required: true },
    foods: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
    calculatedCalories: { type: Number, required: true },
    calculatedFat: Number,
    calculatedProtein: Number,
    calculatedCarbs: Number
})


export default mongoose.model('Meals', Meals)