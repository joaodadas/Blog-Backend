import exp from "constants";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

export const getUser = () => UserModel.find();
export const getUserByEmail = (email: String) => UserModel.findOne({ email });
export const getUserBySessiononToken = (sessionToken: String) =>
  UserModel.findOne({
    "authenticatin.sessionToken": sessionToken,
  });
export const getUserById = (id: String) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUser = (id: String) =>
  UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: String, values: Record<string, any>) =>
  UserModel.findById(id, values);
