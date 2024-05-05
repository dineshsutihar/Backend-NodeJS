import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // data to be added here
    // username: String,
    // email: String,
    // isActive: Boolean
    // Professional
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

//above code is always going to be same and it is to create model
