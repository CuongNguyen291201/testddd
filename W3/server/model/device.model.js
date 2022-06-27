import mongoose, { Schema } from "mongoose";


const Device = new Schema({
  name: String,
  ip: String,
  power: Number
});

export const DeviceModel = mongoose.model("Device", Device);