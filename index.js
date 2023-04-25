import { passportFunc } from "./config/passport.js";
import * as dotenv from 'dotenv';
import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = 4000
const passport = passportFunc();

dotenv.config()

app.use(express.json());
const corsOptions ={
    origin:/* 'http://localhost:3000' */ 'https://aesthetic-raindrop-2c9eee.netlify.app', 
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(cors());

app.use("/", router);

app.listen( process.env.PORT || PORT, () => console.log("I hear you sneaking around on Port " + PORT));
//changed to 4000 from 3000
