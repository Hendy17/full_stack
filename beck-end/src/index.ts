import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import tasksRouter from './routes/tasks';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3232;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
