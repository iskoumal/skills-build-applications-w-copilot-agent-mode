// Seed the octofit_db database with test data.
import { connectToDatabase } from '../config/database';

export const seedCommandDescription = 'Seed command for populating octofit_db with starter data';

export const seedDatabase = async () => {
  const connection = await connectToDatabase();
  console.log(`Seed script connected to ${connection.name}`);
};

void seedDatabase();
