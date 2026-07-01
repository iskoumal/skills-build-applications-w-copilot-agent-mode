// Seed command description: use this script to populate the OctoFit database with sample data.
import { connectToDatabase } from '../config/database';

export const seedCommandDescription = 'Seed command for populating octofit_db with starter data';

export const seedDatabase = async () => {
  const connection = await connectToDatabase();
  console.log(`Seed script connected to ${connection.name}`);
};

void seedDatabase();
