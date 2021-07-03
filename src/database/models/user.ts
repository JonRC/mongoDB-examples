import { model, Schema } from "mongoose";
import { User } from "../../interfaces/User";

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
})

const userModel = model<User & Document>('users', userSchema)

export { userModel }