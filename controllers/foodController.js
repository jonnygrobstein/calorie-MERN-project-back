import Food from "../models/Food.js";

const foodController = {
  index: (req, res) => {
    Food.find({})
      .then((food) => {
        res.json(food);
    });
  },
  findFood: (req, res) => {
    Food.find({food_name: req.query.food})
    .then((food) => {
      res.json(food)
    })
    .catch((error) => {
      console.log(error)
    })
  },
  create: async(req, res) => {
    console.log(req.body)
    const food = await Food.create(req.body)
      res.json(food)
      
  },
  edit: (req, res) => {
    Food.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(food => {
        res.json(food)
      })
  },
  delete: (req, res) => {
    Food.findOneAndRemove({_id: req.params.id})
      .then(food => {
        res.json(food)
      })
  }
};

export default foodController;
