import mongoose, { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    difficulty: { type: String, default: 'beginner' },
    duration: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Workout = mongoose.models.Workout || model('Workout', workoutSchema);
