import mongoose from 'mongoose';

export const mongooseConnector = async (
  mongodbUri: string,
  user: string,
  pass: string
) => {
  let connected = false;

  const databaseOptions = {
    authSource: 'admin',
    user,
    pass,
  };

  while (!connected) {
    await mongoose
      .connect(mongodbUri, databaseOptions)
      .then(() => {
        connected = true;
        console.log('Database connection successful.\n\n');
      })
      .catch((err) => {
        console.error(
          'We have a problem connecting to the database, Retrying...'
        );
        console.error(err);
      });
  }
  return mongoose.connection.readyState > 0;
};

export default async function connectToDatabase(): Promise<boolean> {
  const { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, TEST_DB } =
    process.env;

  if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASS || !DB_NAME) {
    console.log(DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME);
    throw new Error('You have not defined the database credentials correctly.');
  }

  let mongodbUri = `${process.env.MONGO_KEY}/${DB_NAME}`;

  NODE_ENV === 'test'
    ? (mongodbUri = `${process.env.MONGO_KEY}/${TEST_DB}`)
    : mongodbUri;

  console.log(`Connecting to the MongoDB database at: ${mongodbUri}`);

  return await mongooseConnector(mongodbUri, DB_USER, DB_PASS);
}
