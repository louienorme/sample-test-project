import express, { Application } from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import dbConnect from './_config/dbConnect';
import { mainRouter } from './tasks/route';

dotenv.config();

const app: Application = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', mainRouter);

const port = process.env.PORT || 5000;

const runServer = async () => {
  console.clear();
  console.log('This is a Sample Test Project by John Loui Enorme\n');

  if (await dbConnect()) {
    server.listen(port, () => {
      console.log(
        `Now running and listening at \x1b[32m${
          process.env.NODE_ENV === 'development' ? 'localhost:' : 'SERVER-IP'
        }${port}`,
        '\x1b[0m'
      );
      console.log('Server logging starts now.');
    });
  }
};

runServer();
