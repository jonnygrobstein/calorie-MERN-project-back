import Food from "../models/Food.js";

const foodController = {
  index: (req, res) => {
    Food.find({}).then((food) => {
      res.json(food);
    });
  },
  findFood: (req, res) => {
    const searchedFood = new RegExp(".*" + req.query.food + ".*", 'i');

    Food.find({ food_name: searchedFood })
      .then((food) => {
        res.json(food);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  findFoodById: (req, res) => {
    Food.findById(req.params.id)
    .then((food) => {
      res.json(food)
    })
    .catch((error) => {
      console.log(error)
    })
  },
  create: async (req, res) => {
    console.log(req.body);
    const food = await Food.create(req.body);
    res.json(food);
  },
  edit: (req, res) => {
    Food.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).then((food) => {
      res.json(food);
    });
  },
  delete: (req, res) => {
    Food.findOneAndRemove({ _id: req.params.id }).then((food) => {
      res.json(food);
    });
  },
  updateFood: (req, res) => {
    console.log(req.params)
    Food.findOneAndUpdate({food_name: req.params.food_name}, req.body)
    .then((food) => res.json(food))
  }
};

export default foodController;
