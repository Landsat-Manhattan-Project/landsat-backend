import { Schema } from "mongoose";
import { Coordinate } from "./coordinate.entity";

export const coordinateSchema = new Schema<Coordinate>({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    name: { type: String, required: true },
    iconName: { type: String, required: false }
  });