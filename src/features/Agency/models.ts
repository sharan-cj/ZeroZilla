import { model, Schema } from "mongoose";

const Agency = new Schema({
  agencyId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  state: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

export const Agencies = model("Agencies", Agency);
