import mongoose, { Schema } from "mongoose";
import { Coordinate } from "./coordinate.entity";

const coordinateSchema = new Schema<Coordinate>({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    name: { type: String, required: true },
    iconName: { type: String, required: false }
  });
  
  export default mongoose.model<Coordinate>('Coordinate', coordinateSchema);