"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = exports.seedCommandDescription = void 0;
// Seed the octofit_db database with test data.
const database_1 = require("../config/database");
exports.seedCommandDescription = 'Seed command for populating octofit_db with starter data';
const seedDatabase = async () => {
    const connection = await (0, database_1.connectToDatabase)();
    console.log(`Seed script connected to ${connection.name}`);
};
exports.seedDatabase = seedDatabase;
void (0, exports.seedDatabase)();
