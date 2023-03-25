import Meals from "../models/MealPlans.js";

const mealsController = {
  index: (req, res) => {
    Meals.find({}).then((meal) => {
      res.json(meal);
    });
  },
};

export default mealsController;
