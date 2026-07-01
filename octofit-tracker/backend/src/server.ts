import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/api';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/api', apiRoutes);

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/octofit_db');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }

  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
};

startServer();
