import Food from '../models/Food.js'
// import Meals from '../models/MealPlans.js'
import foodData from './MyFoodData.json' assert { type: 'json' }

// Food.remove({})

Food.insertMany(foodData)
    .then(test => {
        console.log(foodData)
    })
    .catch(err => {
        console.log(err)
    })

