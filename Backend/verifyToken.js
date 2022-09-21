import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  //getting token from cookie
  const token = req.cookies.access_token;
  //checking if there is token or not
  if (!token) return next(createError(401, "You are not authenticated!"));

  //verifying token
  Jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is invalid"));
    req.user = user;
    next();
  });
};
