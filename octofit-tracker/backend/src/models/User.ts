import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    role: { type: String, default: 'member' },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || model('User', userSchema);
