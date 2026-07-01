"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const Team_1 = require("../models/Team");
const Activity_1 = require("../models/Activity");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
router.get('/health', (_req, res) => {
    res.json({ status: 'ok', message: 'Octofit Tracker backend is running' });
});
router.get('/users', async (_req, res) => {
    const users = await User_1.User.find().sort({ createdAt: -1 });
    res.json(users);
});
router.post('/users', async (req, res) => {
    const user = await User_1.User.create(req.body);
    res.status(201).json(user);
});
router.get('/teams', async (_req, res) => {
    const teams = await Team_1.Team.find().populate('members');
    res.json(teams);
});
router.post('/teams', async (req, res) => {
    const team = await Team_1.Team.create(req.body);
    res.status(201).json(team);
});
router.get('/activities', async (_req, res) => {
    const activities = await Activity_1.Activity.find().populate('user');
    res.json(activities);
});
router.post('/activities', async (req, res) => {
    const activity = await Activity_1.Activity.create(req.body);
    res.status(201).json(activity);
});
router.get('/workouts', async (_req, res) => {
    const workouts = await Workout_1.Workout.find().sort({ createdAt: -1 });
    res.json(workouts);
});
router.post('/workouts', async (req, res) => {
    const workout = await Workout_1.Workout.create(req.body);
    res.status(201).json(workout);
});
router.get('/leaderboard', async (_req, res) => {
    const activities = await Activity_1.Activity.find().populate('user');
    const leaderboard = activities
        .map((activity) => ({
        user: activity.user,
        calories: activity.calories || 0,
        duration: activity.duration || 0,
    }))
        .reduce((acc, item) => {
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
exports.default = router;
