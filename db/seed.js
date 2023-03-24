import axios from 'axios'
import Food from '../models/Food.js'
// import Meals from '../models/MealPlans.js'
import foodData from './foodData.json' assert { type: 'json' }





//fetching xivapi
async function seed() {
    try {
      const response = await axios.get('https://xivapi.com/lore?string=story&columns=Text,Data');
      const data = response.data;
      await Food.deleteMany({});
      await Food.insertMany(data);
      console.log("Data successfully seeded.");
    } catch (error) {
      console.error(error);
    }
}

seed();

// Your OAuth 2.0 
// Your Client ID:
// 2db8c715191e48869b1fa680b2cfcfbc
// Your Client Secret:
// a4665c07f2a24f0d8820cc728e1e1fed
