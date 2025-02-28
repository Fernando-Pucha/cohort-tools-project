// ./models/Students.model.js
import { Schema as _Schema, model, version } from "mongoose";
import mongoose from "mongoose";

const Schema = _Schema;

// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const studentsSchema = new Schema(
  {
    /* _id: Number, */
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: { type: Array, maxlength: 5 },
    program: String,
    background: String,
    image: String,
    projects: { type: Array, maxlength: 15 },
    cohort: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cohort",
    },
  },
  { versionKey: false }
);

// CREATE MODEL
const Students = model("Students", studentsSchema);

// EXPORT THE MODEL
export default Students;
