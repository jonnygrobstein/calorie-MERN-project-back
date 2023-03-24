import express from "express";
import jwt from "jwt-simple";
import { passportFunc } from "../config/passport.js";
import { jwtSecret, jwtSession } from "../config/config.js";
import User from "../models/User.js"

const router = express.Router();

router.post('/signup', (req,res) => {
    if(req.body.email && req.body.password) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({ email: req.body.email })
        .then((user) => {
            if(!user) {
                User.create(newUser)
                .then(user => {
                    if(user) {
                        var payload = {
                            id: newUser.id
                        }
                        var token = jwt.encode(payload, jwtSecret)
                        res.json({
                            token: token
                        })
                    } else {
                        console.log("User creation failed:", err.message);
                        res.sendStatus(401)
                    }
                })
                .catch(err => {
                    console.log("User creation failed:", err.message);
                    res.sendStatus(401);
                });
            } else {
                res.sendStatus(409)
            }
        })
    } else {
        res.sendStatus(401)
    }
})

export default router;
