import mongoose, { Schema } from "mongoose";
import { User } from "./user.entity";
import { Coordinate } from "../../coordinate/coordinate.entity";
import {coordinateSchema} from "../../coordinate/coordinate.schema";

export type UserModel = User & { locations: Coordinate[]}

const userSchema = new Schema<UserModel>({
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    purpose: { type: String, required: true },
    locations: [coordinateSchema]
  });
  
  export default mongoose.model<UserModel>('User', userSchema);