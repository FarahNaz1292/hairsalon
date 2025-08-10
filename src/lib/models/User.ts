import mongoose from "mongoose"
const userSchema= new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    image:{
      type:String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false 
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
  })


 export const User=mongoose.models.User || mongoose.model("User", userSchema)