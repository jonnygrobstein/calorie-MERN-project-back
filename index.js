import { passportFunc } from "./config/passport.js";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
const passport = passportFunc();

app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.use("/", router);

app.listen(4000, () => console.log("I hear you sneaking around on Port 4000"));
//changed to 4000 from 3000
