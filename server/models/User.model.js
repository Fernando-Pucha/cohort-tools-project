// models/User.model.js
import { Schema as _Schema, model, version } from "mongoose";
import mongoose from "mongoose";

const Schema = _Schema;

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const Users = model("Users", userSchema);

// EXPORT THE MODEL
export default Users;
