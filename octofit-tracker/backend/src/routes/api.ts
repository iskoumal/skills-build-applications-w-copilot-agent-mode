import { Router } from 'express';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Octofit Tracker backend is running' });
});

router.get('/users', async (_req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});

router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

router.get('/teams', async (_req, res) => {
  const teams = await Team.find().populate('members');
  res.json(teams);
});

router.post('/teams', async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json(team);
});

router.get('/activities', async (_req, res) => {
  const activities = await Activity.find().populate('user');
  res.json(activities);
});

router.post('/activities', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
});

router.get('/workouts', async (_req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });
  res.json(workouts);
});

router.post('/workouts', async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
});

router.get('/leaderboard', async (_req, res) => {
  const activities = await Activity.find().populate('user');
  const leaderboard = activities
    .map((activity) => ({
      user: activity.user,
      calories: activity.calories || 0,
      duration: activity.duration || 0,
    }))
    .reduce<Record<string, { user: any; totalCalories: number; totalDuration: number }>>((acc, item) => {
      const key = item.user?._id?.toString() || 'unknown';
      if (!acc[key]) {
        acc[key] = {
          user: item.user,
          totalCalories: 0,
          totalDuration: 0,
        };
      }
      acc[key].totalCalories += item.calories;
      acc[key].totalDuration += item.duration;
      return acc;
    }, {});

  const ranked = Object.values(leaderboard)
    .sort((a, b) => b.totalCalories - a.totalCalories)
    .map((entry) => ({
      user: entry.user,
      totalCalories: entry.totalCalories,
      totalDuration: entry.totalDuration,
    }));

  res.json(ranked);
});

export default router;
