import { model, Schema } from "mongoose";

const Client = new Schema({
  name: { type: String, required: true },
  agencyId: { type: String, required: true },
  clientId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  totalBill: { type: Number, required: true },
});

export const Clients = model("Clients", Client);
