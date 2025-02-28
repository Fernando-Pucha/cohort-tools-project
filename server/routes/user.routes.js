import express from "express";
import User from "../models/User.model.js";
import { isAuthenticated } from "../middlewares/jwt.middleware.js";
const router = express.Router();

// GET /api/users/:usersId

router.get("/api/users/:id", isAuthenticated, (req, res, next) => {
  const usersId = req.params.id;

  if (!usersId) {
    return res.status(400).json({ message: "User ID is required." });
  }

  User.findById(usersId)
    .then((users) => {
      if (!users) {
        return res.status(404).json({ message: "User not found." });
      }
      console.log("Retrieved user ->", users);
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error("Error while updating User ->", error.message);
      next(error);
    });
});

export default router;
