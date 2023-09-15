import mongoose from "mongoose";

const connectDatabase = async (dbUri: string) => {
  try {
    await mongoose.connect(dbUri);
    console.log("Database conection was a sucsses!");
  } catch (error) {
    console.log(error);
    console.log("Database connection was field!");
  }
};

export default connectDatabase;
