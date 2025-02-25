// ./models/Students.model.js
import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const studentsSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: { type: String, maxlength: 5, unique: true },
    program: String,
    background: String,
    image: String,
    cohort: Number,
    projects: { type: String, maxlength: 15, unique: true }
});

// CREATE MODEL
const Students = model("Students", studentsSchema);

// EXPORT THE MODEL
export default Students;
