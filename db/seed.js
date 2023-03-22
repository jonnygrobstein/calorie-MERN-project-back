import Food from '../models/Food'
import Meals from '../models/MealPlans'
import testFood from './testfood.json' assert { type: 'json' }

Food.remove({})

Food.collection.insert(testFood)
    .then(test => {
        console.log(testFood)
    })
    .catch(err => {
        console.log(err)
    })