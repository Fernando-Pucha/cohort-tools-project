// ./models/Cohorts.model.js
import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const cohortsSchema = new Schema({
    /* _id: Number, */
    inProgress: Boolean,
    cohortSlug: String,
    cohortName: String,
    program: String,
    campus: String,
    startDate: String,
    endDate: String,
    programManager: String,
    leadTeacher: String,
    totalHours: Number
}, {versionKey: false});

// CREATE MODEL
const Cohorts = model("Cohort", cohortsSchema);

// EXPORT THE MODEL
export default Cohorts;
