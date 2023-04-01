import { passportFunc } from "./config/passport.js";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

const passport = passportFunc();
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(cors());

app.use("/", router);

app.listen(4000, () => console.log("I hear you sneaking around on Port 4000"));
//changed to 4000 from 3000
