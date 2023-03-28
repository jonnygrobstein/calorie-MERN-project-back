import express from "express";
import jwt from "jwt-simple";
import { passportFunc } from "../config/passport.js";
import { jwtSecret, jwtSession } from "../config/config.js";
import User from "../models/User.js";

const usersController = {
  signup: (req, res) => {
    if (req.body.email && req.body.password) {
      let newUser = {
        email: req.body.email,
        password: req.body.password,
      };
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          User.create(newUser)
            .then((user) => {
              if (user) {
                var payload = {
                  id: newUser.id,
                };
                var token = jwt.encode(payload, jwtSecret);
                res.json({
                  token: token,
                });
              } else {
                console.log("User creation failed:", err.message);
                res.sendStatus(401);
              }
            })
            .catch((err) => {
              console.log("User creation failed:", err.message);
              res.sendStatus(401);
            });
        } else {
          console.log("User already exists");
          res.sendStatus(409);
        }
      });
    } else {
      res.sendStatus(401);
    }
  },
  login: (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
          if (user.password === req.body.password) {
            var payload = {
              id: user.id,
            };
            var token = jwt.encode(payload, jwtSecret);
            res.json({
              token: token,
            });
          } else {
            console.log("Wrong credentials");
            res.sendStatus(401);
          }
        } else {
          console.log("User does not exist");
          res.sendStatus(401);
        }
      });
    } else {
      console.log("post failure");
      res.sendStatus(401);
    }
  },
};
export default usersController;
