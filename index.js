import { passportFunc } from "./config/passport.js";
import userController from "./controllers/users.js";
import express from "express";
const app = express();
/* import router from "./routes/index.js"; */

const passport = passportFunc();
app.use(express.json());

app.use(passport.initialize());
app.use("/users", userController);

/* app.use(router); */

app.listen(4000, () => console.log("I hear you sneaking around on Port 4000"));
//changed to 4000 from 3000
