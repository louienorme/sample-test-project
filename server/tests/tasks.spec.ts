import mongoose from 'mongoose';
import app from '../src/server';
import request from 'supertest';
import { TaskModel } from '../src/tasks/model';
import dbConnect from '../src/_config/dbConnect';

beforeAll(
  async () =>
    // Connect to a test database before running tests
    await dbConnect()
);

afterEach(async () => {
  // Clear the database after each test
  await TaskModel.deleteMany({});
});

afterAll(async () => {
  // Close the MongoDB connection after all tests
  await mongoose.connection.close();
});

describe('API tests', () => {
  it('GET /api/ should return tasks', async () => {
    // Arrange
    // No specific arrangement needed for this test

    // Act
    const response = await request(app).get('/api/');

    // Assert
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([]);
  });

  it('POST /api/task should create a task', async () => {
    // Arrange
    const requestBody = {
      title: 'Finish testing',
      desc: 'Write tests',
    };

    // Act
    const response = await request(app).post('/api/task').send(requestBody);

    // Assert
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.title).toBe(requestBody.title);
    expect(response.body.data.desc).toBe(requestBody.desc);
  });
});
