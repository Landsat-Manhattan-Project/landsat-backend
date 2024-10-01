import mongoose, { Schema } from "mongoose";
import { User } from "./user.entity";

const userSchema = new Schema<User>({
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true }
  });
  
  export default mongoose.model<User>('User', userSchema);