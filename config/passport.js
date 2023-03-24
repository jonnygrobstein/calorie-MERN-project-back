import passport from "passport";
import passportJWT, { ExtractJwt } from "passport-jwt";
import { jwtSecret, jwtSession } from "../config/config.js";
import mongoose from "../db/connection.js";
import User from "../models/User.js";

const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export function passportFunc () {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null;
    if (user) {
      return callback(null, { id: user.id });
    } else {
      return callback(new Error("User not found"), null);
    }
  });

  passport.use(strategy);

  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate("jwt", { session: false });
    },
  };
};
