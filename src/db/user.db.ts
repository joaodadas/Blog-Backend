import UserModel from "../models/user.model";

export const createUser = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const createUser = await UserModel.create({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });
  return createUser;
};
