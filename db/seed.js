import Food from '../models/Food'
import Meals from '../models/MealPlans'
import foodData from './MyFoodData.json' assert { type: 'json' }

Food.remove({})

Food.insert(foodData)
    .then(test => {
        console.log(foodData)
    })
    .catch(err => {
        console.log(err)
    })


//fetching xivapi
// async function seed() {
//     try {
//       const response = await axios.get('https://platform.fatsecret.com/rest/server.api');
//       const data = response.data;
//       await Food.deleteMany({});
//       await Food.insertMany(data);
//       console.log("Data successfully seeded.");
//     } catch (error) {
//       console.error(error);
//     }
// }

// seed();

// Your OAuth 2.0 
// Your Client ID:
// 2db8c715191e48869b1fa680b2cfcfbc
// Your Client Secret:
// a4665c07f2a24f0d8820cc728e1e1fed


// import express from 'express';
// import axios from 'axios';

// const app = express();

// // Define a route to handle GET requests
// app.get('/food/:id', async (req, res) => {
//   try {
//     // Set the API endpoint and query parameters
//     const endpoint = 'https://platform.fatsecret.com/rest/server.api';
//     const method = 'food.get.v2';
//     const foodId = req.params.id;
//     const params = { method, food_id: foodId, format: 'json' };
//     const config = {
//       headers: {
//         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`, // replace with actual access token
//         'Content-Type': 'application/json',
//       },
//     };

//     // Note that you'll need to replace process.env.ACCESS_TOKEN (above) with your actual access token, 
//     // which you obtained through the OAuth 2.0 authorization flow. Additionally, you may need 
//     // to adjust the code to handle any errors or edge cases specific to your use case.


//     // Make the GET request to the API
//     const { data } = await axios.get(endpoint, { params, ...config });

//     // Return the API response to the client
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });