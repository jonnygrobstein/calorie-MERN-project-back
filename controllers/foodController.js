import Food from "../models/Food.js";

const foodController = {
    index: (req, res) => {
        Food.find({}).then((food) => {
            res.json(food)
        })
    }
};

export default foodController;
