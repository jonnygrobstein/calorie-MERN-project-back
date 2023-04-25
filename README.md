CalorieTrakr - Backend
======
This is the backend, developed in Node.js and MongoDB for our CalorieTrakr program.

Check out the front-end repo [HERE](https://github.com/JpadillaCoding/Front-end-MERN-Project)

Check out the deployed app: [CalorieTrakr](https://aesthetic-raindrop-2c9eee.netlify.app/)

Description
------
This backend was developed for a group project at General Assembly.  We decided to build a Calorie Tracking App where you could search for calories in food, add food to the database, and save foods that you ate into a food diary.

This includes creating login capability and front-end to back-end authentication and authorization.  

The backend was set up utilizing an outside data repository of food nutritional facts that were available and converted into JSON.  This was then imported into the database and used going forward.

How to Install and Run This
------
Upon forking and cloning this repository you will need to install dependencies.  You can do this by navigating into the top level folder and running your install commands in your Terminal.  We used NPM so our command is
_npm install_.

The dependencies for our project can be seen below, with the versions used.

```javascript
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jwt-simple": "^0.5.6",
    "mongoose": "^7.0.2",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.1"
  }
```
Upon getting the dependencies installed, you will want to navigate within terminal into the /db folder and open the connection.js document.  On line 3 you will see the connection info with the localhost information commented out and the live server info after it.  You will want to remove the live server info and uncomment the localhost connection info.  Your line should look like this:

```javascript
mongoose.connect('mongodb://localhost/calories', { useNewUrlParser: true, useUnifiedTopology: true })
```
Then you can run the following code in your Terminal:
```
node seed.js
```

Once the database is seeded with data you can test by utilizing Postman (or another tool of your choosing)

API Endpoints
------
All our database queries start from **/calories** to access the data.  

#### Our Endpoints 
##### Foods /foods
```javascript
foodRouter.get("/", foodController.index);

foodRouter.get("/searchFood/", foodController.findFood);

foodRouter.get("/:id", foodController.findFoodById)

foodRouter.post("/addFood", foodController.create);

foodRouter.put("/:id", foodController.edit);

foodRouter.put("/updateFood/:food_name", foodController.updateFood)

foodRouter.delete("/:id", foodRouter.delete);
```
##### Meals /meals
```javascript
mealRouter.get("/", mealsController.index)
```
##### Users /users
```javascript
userRouter.post("/signup", usersController.signup);

userRouter.post("/login", usersController.login);
```
Challenges to building the backend
------
The initial challenges were finding good data.  The initial build went smoothly to get it up and usable, however, finding clean data, or data that we could clean up, was more challenging.  Once that was done, we were able to start really working on the project.

As this is our first project where we truly had to integrate the front-end with the backend via API we had some growing pains.  

From figuring out how to connect the two sides using authentication, to how use data on the front-end, that was received from the backend, and then, once done with it, send it back to the database was challenging.  This, considering the scope of our project, was probably one of the most challenging and ongoing pieces to the backend.


Credits
------
CalorieTrakr was developed by the following contributors:

  * Jonny Grobstein - [GitHub](https://github.com/jonnygrobstein) [LinkedIn](https://www.linkedin.com/in/jonnygrobstein/)

  * Jose Padilla - [GitHub](https://github.com/JpadillaCoding) [LinkedIn](https://www.linkedin.com/in/jose-padilla-978ab5146/)

  * Nate Leonard - [GitHub](https://github.com/nateleo91) [LinkedIn](https://www.linkedin.com/in/nathen-leonard/)

  * Sharnell Graham - [GitHub](https://github.com/SharnellGraham) [LinkedIn](https://www.linkedin.com/in/sharnell-graham-627932262/)


Ideas for upcoming feature enhancements
------
Some of the feature enhancements we would like to see, apart from the standard UX/UI upgrades are:

* Language options
* Exercise tracking
* Favorite Meals
* Blog
* Community Boards
